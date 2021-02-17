import React, { Component } from 'react';
import { openLink } from '../core/helpers'

class BackupLayer extends Component {

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

    if (this.props.backupPath) {
      children.push(
        <img
          key={'Backup'}
          src={this.props.backupPath}
          className='backup-img'
          alt={this.props.name}
          style={
            {
              width:this.props.width+"px",
              height:this.props.height+"px",
            }
          }
        />
      );
    }

    let elementProps={
      id:'BackupLayer',
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

export default BackupLayer;
