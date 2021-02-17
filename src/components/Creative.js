import React, { Component } from 'react';

import FramesLayer from './FramesLayer'
import DemoLayer from './DemoLayer'
import BackupLayer from './BackupLayer'
import EmptyLayer from './EmptyLayer'
import CreativeTitle from './CreativeTitle'
import CreativeStatusBar from './CreativeStatusBar'
import settings from '../configuration/Settings'

import VizSensor from "../improve/visibility-sensor.js"//'react-visibility-sensor';

class Creative extends Component {

  constructor(props) {
    super(props);

    this.childRef = React.createRef();

    this.store = this.props.store;
    this.state = {
      isVisible:false,
    };
  }

  // componentDidMount() {
  //   this.unsubscribe=this.store.subscribe(()=>{this.onStoreChange()});
  //   this.mounted=true;
  // }
  //
  // componentWillUnmount() {
  //   if (this.unsubscribe) {
  //     this.unsubscribe();
  //   }
  //   this.mounted=false;
  // }
  //
  // onStoreChange() {
  //   if (this.mounted) {
  //     let state=this.store.getState();
  //     this.setState(state);
  //   }
  // }

  render() {
    let children = [];
    children.push(this.props.children);

    let opacity=((this.props.state==="completed")||(this.props.state==="paused"))?1:settings.disableOpacity;

    children.push(
      <CreativeTitle
        key='CreativeTitle'
        feed={this.props.feed}
        formatName={this.props.formatName}
        platform={this.props.platform}
        publisher={this.props.publisher}
        section={this.props.section}
      />
    );

    let isEmpty=true;

    if (this.state.isVisible) {

      if (this.props.layer==="frames") {
        if (this.props.framesPath) {
          isEmpty=false;
          children.push(
            <FramesLayer
              key='Frames'
              name={this.props.name}
              store={this.store}
              frameIndex={this.props.frameIndex}
              width={this.props.width}
              height={this.props.height}
              frames={this.props.frames}
              status={this.props.state}
              framesPath={this.props.framesPath}
              platform={this.props.platform}
              demoPath={this.props.demoPath}
              backupPath={this.props.backupPath}
              style={{
                opacity
              }}
            />
          );
        }
      } else
      if (this.props.layer==="demo") {
        if (this.props.demoPath) {
          isEmpty=false;
          children.push(
            <DemoLayer
              key='Demo'
              name={this.props.name}
              store={this.store}
              width={this.props.width}
              height={this.props.height}
              platform={this.props.platform}
              demoPath={this.props.demoPath}
              style={{
                opacity
              }}
            />
          );
        }
      } else
      if (this.props.layer==="backup") {
        if (this.props.backupPath) {
          isEmpty=false;
          children.push(
            <BackupLayer
              key='Backup'
              name={this.props.name}
              store={this.store}
              width={this.props.width}
              height={this.props.height}
              status={this.props.state}
              platform={this.props.platform}
              backupPath={this.props.backupPath}
              demoPath={this.props.demoPath}
              style={{
                opacity
              }}
            />
          );
        }
      }
    }

    if (isEmpty) {
      children.push(
        <EmptyLayer
          key='Empty'
          state={this.props.state}
          width={this.props.width}
          height={this.props.height}
          style={{}}
        />
      );
    }

    children.push(
      <CreativeStatusBar
        key='CreativeStatusBar'
        name={this.props.name}
        store={this.store}
        passed={this.props.passed}
        status={this.props.state}
        updateTime={this.props.updateTime}
        creativeWeight={this.props.creativeWeight}
        backupWeight={this.props.backupWeight}
        lastError={this.props.lastError}
        platform={this.props.platform}
        demoPath={this.props.demoPath}
        backupPath={this.props.backupPath}
        zipPath={this.props.zipPath}
      />
    );

    // console.log("!!!!",this.childRef);

    return (
      <VizSensor
             onChange={(isVisible) => {
               this.setState({isVisible: isVisible})
             }}
             childRef={this.childRef}
             partialVisibility={true}
           >
           {
             React.createElement(
               'div',
               {
                 ref:this.childRef,
                 id:'Creative/'+this.props.name,
                 className:"creative",
                 style:{
                   margin:this.props.margin+"px",
                   width:(Number(this.props.width))+"px",
                 },
               },
               children
             )
           }
      </VizSensor>
    )

  }

}

export default Creative;
