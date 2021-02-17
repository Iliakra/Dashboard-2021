import React, { Component } from 'react';
import settings from '../configuration/Settings'

class EmptyLayer extends Component {

  render() {
    let children = [];
    children.push(this.props.children);
    let state=this.props.state;
    if (!state) state="empty";
    children.push(
      <div
        key={'Empty'}
        className='empty-div'
        style={
          {
            ...this.props.style,
            backgroundColor:settings.statuses[state].fill,
            width:this.props.width+"px",
            height:this.props.height+"px",
          }
        }
      />
    );

    return React.createElement(
      'div',
      {
        id:'Empty',
        className:"layer",
        style:{
          width:this.props.width+"px",
          height:this.props.height+"px",
        }
      },
      children
    );
  }
}

export default EmptyLayer;
