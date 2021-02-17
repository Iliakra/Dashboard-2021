import React, { Component } from 'react';

import Creative from '../components/Creative'
import StatusBar from '../components/StatusBar';
import Footer from '../components/Footer';

class ScrollPlace extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
    this.mounted=true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted=false;
  }

  onStoreChange() {
    if (this.mounted) {
      let state=this.store.getState();
      this.setState(state);
    }
  }

  render() {

    let children = [];
    children.push(this.props.children);

    if ((this.state)&&(this.state.creatives)) {
      let creatives=[];
      for (let name in this.state.creatives) {
        let creative=this.state.creatives[name];
        let ratio=creative.format.width/creative.format.height;
        if (
          ((creative.format.width+"_"+creative.format.height+"_"+creative.format.isRubber===this.state.viewStatus.format)||(this.state.viewStatus.format==="all")||
          ((this.state.viewStatus.format==="simple")&&(!creative.format.isRubber))||
          ((this.state.viewStatus.format==="rubber")&&(creative.format.isRubber))||
          ((this.state.viewStatus.format==="square")&&(ratio>0.7)&&(ratio<1.3)&&(!creative.format.isRubber))||
          ((this.state.viewStatus.format==="vertical")&&(ratio<=0.7)&&(!creative.format.isRubber))||
          ((this.state.viewStatus.format==="horizontal")&&(ratio>=1.3)&&(!creative.format.isRubber))
          ) &&
          (
            (creative.section===this.state.viewStatus.section)||(this.state.viewStatus.section==="all")||
            ((this.state.viewStatus.section==="main")&&(creative.section===""))
          ) &&
          ((creative.publisher===this.state.viewStatus.publisher)||(this.state.viewStatus.publisher==="all")) &&
          ((creative.platform===this.state.viewStatus.platform)||(this.state.viewStatus.platform==="all")) &&
          ((creative.feed===this.state.viewStatus.feed)||(this.state.viewStatus.feed==="all")) &&
          ((creative.state===this.state.viewStatus.status)||(this.state.viewStatus.status==="all")) &&
          (
            (this.state.passStatus[creative.name]&&(this.state.viewStatus.passedView==="passed"))||
            (!this.state.passStatus[creative.name]&&(this.state.viewStatus.passedView==="nonpassed"))||
            (this.state.viewStatus.passedView==="all")
          )
        ) {
          creatives.push(creative);
        }
      }

      if (this.state.viewStatus.sortMode==="format") {
        creatives.sort((a,b)=>{
          if ((!a.format)||(!b.format)) return -1;
          let am=(a.format.width*a.format.height);
          let bm=(b.format.width*b.format.height);
          if (am>bm) return 1;
          if (am<bm) return -1;
          if (a.format.width>b.format.width) return 1;
          if (a.format.width<b.format.width) return -1;
          if (a.format.height>b.format.height) return 1;
          if (a.format.height<b.format.height) return -1;
          if (a.name>b.name) return 1;
          if (a.name<b.name) return -1;
          return -1;
        })
      } else
      if (this.state.viewStatus.sortMode==="formatDown") {
        creatives.sort((a,b)=>{
          if ((!a.format)||(!b.format)) return -1;
          let am=(a.format.width*a.format.height);
          let bm=(b.format.width*b.format.height);
          if (am>bm) return -1;
          if (am<bm) return 1;
          if (a.format.width>b.format.width) return -1;
          if (a.format.width<b.format.width) return 1;
          if (a.format.height>b.format.height) return -1;
          if (a.format.height<b.format.height) return 1;
          if (a.name>b.name) return -1;
          if (a.name<b.name) return 1;
          return -1;
        })
      } else
      if (this.state.viewStatus.sortMode==="date") {
        creatives.sort((a,b)=>{if (a.updateTime>b.updateTime) return 1; return -1;})
      } else
      if (this.state.viewStatus.sortMode==="dateDown") {
        creatives.sort((a,b)=>{if (a.updateTime<b.updateTime) return 1; return -1;})
      }

      children.push(
        <StatusBar
        store={this.store}
        viewCount={creatives.length}
        key="StatusBarTop"
        />
      );


      for (let i = 0; i < creatives.length; i++) {
        let creative=creatives[i];
        children.push(
          <Creative
            store={this.store}
            key={creative.name}
            name={creative.name}
            layer={this.state.viewStatus.mode}
            frameIndex={this.state.viewStatus.currentFrame}
            backupPath={creative.backupPath}
            zipPath={creative.zipPath}
            demoPath={creative.demoPath}
            feed={creative.feed}
            width={creative.format.width}
            height={creative.format.height}
            isRubber={creative.format.isRubber}
            formatName={creative.formatName}
            frames={creative.frames}
            framesPath={creative.framesPath}
            platform={creative.platform}
            publisher={creative.publisher}
            section={creative.section}
            state={creative.state}
            updateTime={creative.updateTime}
            creativeWeight={creative.creativeWeight}
            backupWeight={creative.backupWeight}
            lastError={creative.lastError}
            passed={this.state.passStatus[creative.name]}
            margin={5}
          />
        );
      }

      children.push(
        <StatusBar
        store={this.store}
        viewCount={creatives.length}
        key="StatusBarBottom"
        />
      );

      children.push(
        <Footer
        store={this.store}
        viewCount={creatives.length}
        key="Footer"
        />
      );

    }

    return React.createElement(
      'div',
      { id:'ScrollPlace',
      },
      children
      );
  }
}

export default ScrollPlace;
