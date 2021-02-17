import React, { Component } from 'react';

class CreativeTitle extends Component {

  render() {
    let children = [];
    children.push(this.props.children);

    if (this.props.section) {
      children.push(
        <div key="section" className="title-item">{this.props.section}</div>
      );
    }

    children.push(
      <div key="formatName" className="title-item">{this.props.formatName}</div>
    );
    children.push(
      <div key="publisher" className="title-item">{this.props.publisher+"("+this.props.platform+")"}</div>
    );

    if (this.props.feed) {
      children.push(
        <div key="feed" className="title-item">{this.props.feed}</div>
      );
    }

    return React.createElement(
      'div',
      {
        id:'CreativeTitle',
        className:"creative-title",
        style:{
        }
      },
      children
    );
  }
}

export default CreativeTitle;
