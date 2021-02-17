import React, { Component } from 'react';
import { openLink } from '../core/helpers'
import path from "path"

class FramesLayer extends Component {

  constructor(props) {
    super(props);
    this.onDemoClick=this.onDemoClick.bind(this);
  }

  onDemoClick() {
    if (this.props.platform==="Static") {
      openLink(this.props.backupPath)
    } else {
      openLink(this.props.demoPath)
    }
  }

  render() {
    let children = [];
    children.push(this.props.children);

    let frameIndex=0;
    let reasonClass="nocontent";
    let reasonText="Креатив не доступен";

    if (this.props.frameIndex) {
      frameIndex=Number(this.props.frameIndex);
    }

    if ((!this.props.frames)||(this.props.frames.length===0)) {
    } else
    if (frameIndex>=this.props.frames.length) {
      reasonClass="noframe"
      reasonText="Кадр отсутствует";
    }
    if ((this.props.frames)&&(this.props.frames.length>0)&&(frameIndex<this.props.frames.length)) {
      for (let i = 0; i < this.props.frames.length; i++) {
        let frameName=this.props.frames[i];
        let framePath=path.join(this.props.framesPath,frameName);
        children.push(
          <img
            key={'Frame'+i}
            src={framePath}
            className='frame-img'
            alt={this.props.name}
            style={
              {
                visibility:(frameIndex===i)?"visible":"hidden",
                width:this.props.width+"px",
                height:this.props.height+"px",
              }
            }
          />
        );
      }
    } else {
      children.push(
        <div
          key={'NoFrames'}
          className={reasonClass}
          style={
            {
              width:this.props.width+"px",
              height:this.props.height+"px",
            }
          }
        >{reasonText}</div>
      );
    }

    let elementProps={
      id:'FramesLayer',
      className:"layer",
      style:{
        ...this.props.style,
        width:this.props.width+"px",
        height:this.props.height+"px",
      }
    };

    if (((this.props.status==="completed")||(this.props.status==="paused"))&&(this.props.demoPath)) {
      elementProps.onClick=this.onDemoClick;
      elementProps.style.cursor="pointer";
    }

    return React.createElement(
      'div',
      elementProps,
      children
    );
  }
}

export default FramesLayer;
