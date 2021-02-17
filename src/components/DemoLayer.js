import React, { Component } from 'react';

class FramesLayer extends Component {

  render() {
    let children = [];
    children.push(this.props.children);

    if ((this.props.demoPath)&&(this.props.platform!=="Static")) {
      children.push(
        <iframe
          key='Demo'
          src={this.props.demoPath}
          className='demo-iframe'
          title={this.props.name}
          style={
            {
              width:this.props.width+"px",
              height:this.props.height+"px",
            }
          }
        />
      );
    } else {
      children.push(
        <div
          key={'NoDemo'}
          className='nocontent'
          style={
            {
              width:this.props.width+"px",
              height:this.props.height+"px",
            }
          }
        >Креатив не доступен</div>
      );
    }

    return React.createElement(
      'div',
      {
        id:'DemoLayer',
        className:"layer",
        style:{
          ...this.props.style,
          width:this.props.width+"px",
          height:this.props.height+"px",
        }
      },
      children
    );
  }
}

export default FramesLayer;
