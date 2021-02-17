import { Component } from 'react';

import { correctUrl } from './helpers';
import { setStorageData, setStoreData, loadStoreDataError, storageDataSaved } from '../actions/appActions';

import settings from '../configuration/Settings';
import LocalStorageManager from './LocalStorageManager';

class DataManager extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      isLoading:false,
      isLoaded:false,
    }
    this.loader=null;
    this.result=null;

  }

/* ++++ React methods ++++ */

  componentDidMount() {
    this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
    this.load();
    this.mounted=true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted=false;
  }

  componentDidUpdate(prevProps, prevState) {
  }

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      // this.setState(state);
      if (state.reloadData) {
        // console.log("DataManager reloadData");
        this.load()
      } else
      if (state.saveStorageData) {
        // console.log("DataManager saveStorageData");
        this.saveStorageData();
      }
    }
  }

//Функция не работает на локальном варианте
  loadJSON(fileName,callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', fileName, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState === 4 && xobj.status === "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
  }

  stopTimeout() {
    if (this.loadTimeout) {
      clearTimeout(this.loadTimeout)
      this.loadTimeout=null;
    }
  }

  onScriptLoad() {
    this.setState(
      {
        ...this.state,
        isLoading:false,
        isLoaded:true,
      }
    )
    this.stopTimeout();
    try {
      document.body.removeChild(this.script);
    } catch (e) {
    }

    let data=this.processData(window.report);
    this.store.dispatch(
      setStoreData(data)
    );

    if (!this.localStorageManager) {
      this.localStorageManager=new LocalStorageManager({
        name:settings.localStoreName+"_"+data.name,
      })
      this.loadStorageData();
    }

  }

  onScriptLoadError() {
    this.setState(
      {
        ...this.state,
        isLoading:false,
        isLoaded:false,
      }
    )
    this.stopTimeout();
    this.store.dispatch(
      loadStoreDataError()
    );
  }

  load() {
    if (this.state.isLoading) return;
    this.setState(
      {
        ...this.state,
        isLoading:true,
        isLoaded:false,
      }
    )

    this.stopTimeout();
    this.loadTimeout=setTimeout(()=>{
      this.onScriptLoadError();
    },settings.loadTimeout)

    window.onReport = () => {
      this.onScriptLoad();
    }

    try {
      this.script = document.createElement("script");
      // console.log("???",settings.reportUrlJs);
      this.script.src = settings.reportUrlJs;
      this.script.async = true;
      document.body.appendChild(this.script);
    } catch (e) {
    }
  }

  processData(data)
  {
    let frameCount=0;
    data.statuses={
      empty:0,
      building:0,
      waitingForRebuilding:0,
      failed:0,
      completed:0,
      aborted:0,
      waitingForBuilding:0,
      paused:0,

    };
    for (let name in data.creatives) {
      let creative=data.creatives[name];

      let status=creative.state;
      if (!status) status="empty";
      if (!data.statuses[creative.state])data.statuses[creative.state]=0;
      data.statuses[creative.state]++;

      creative.backupPath=correctUrl(creative.backupPath);
      creative.zipPath=correctUrl(creative.zipPath);
      creative.demoPath=correctUrl(creative.demoPath);
      creative.framesPath=correctUrl(creative.framesPath);

      // console.log("backupPath:",creative.backupPath);
      // console.log("demoPath:",creative.demoPath);
      // console.log("framesPath:",creative.framesPath);

      if ((creative.frames)&&(creative.frames.length>frameCount)) {
        frameCount=creative.frames.length;
      }
    }
    return {
      ...data,
      frameCount,
    }
  }

  loadStorageData()
  {
    let data=this.localStorageManager.load();
    this.store.dispatch(
      setStorageData(data)
    );
  }

  saveStorageData()
  {
    let state=this.store.getState();
    this.localStorageManager.save({passStatus:state.passStatus,viewStatus:state.viewStatus});

    this.store.dispatch(
      storageDataSaved()
    );
  }

  render () {
    return null;
  }

}
export default DataManager;
