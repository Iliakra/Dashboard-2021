import React from 'react';

import ResizableBox from '../core/ResizableBox';
import IconButton from './IconButton'

import IconCloseNormal from "../images/misc/icon-close-normal.svg";
import IconCloseHover from "../images/misc/icon-close-hover.svg";

class InformationScrollablePopup extends ResizableBox {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.closeButton_clickHandler = this.closeButton_clickHandler.bind(this);
    this.background_clickHandler = this.background_clickHandler.bind(this);
    this.container_clickHandler = this.container_clickHandler.bind(this);

  }


  closeButton_clickHandler(event) {
    this.dispatchEvent("onComplete",{action:"close",source:"requests"});
  }

  background_clickHandler(event) {
    if (this.props.closable!==false) {
      this.dispatchEvent("onComplete",{action:"close"});
    }
  }

  container_clickHandler(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  renderText(i,text) {
    let result;
    result = <p key={"text"+i} dangerouslySetInnerHTML={{__html:text}}></p>;
    return result;
  }


  render() {

    let texts=[];
    if (this.props.text instanceof Array) {
      texts=this.props.text.reduce((a,v,i)=>{
        a.push(this.renderText(i,this.props.text[i]));
        return a;
      },[]);
    } else {
      texts=[this.renderText(0,this.props.text)];
    }

    return (
      <div id="InformationScrollablePopup"
          className="small-popup"
          style={this.styles}
          onClick={this.background_clickHandler}
        >

        <div className="container"
          onClick={this.container_clickHandler}
          >
          <h1>{this.props.title}</h1>

          <div
            className="list"
            style={{
              top:(this.props.title)?"20%":".4em",
              height:(this.props.title)?"74%":"94%",
            }}
          >
            <div className="v-spacer" style={{height:".5em"}}></div>
            {texts}
            <div className="v-spacer" style={{height:".5em"}}></div>
          </div>

          <div
            className="list-overlay"
            style={{
              top:(this.props.title)?"20%":".4em",
              height:(this.props.title)?"74%":"94%",
            }}
          >
          </div>

          <IconButton
            className="close-button"
            iconStates={[IconCloseNormal,IconCloseHover,IconCloseHover,IconCloseNormal]}
            isVisible={this.props.closable}
            isEnabled={true}
            isActive={false}
            title="Закрыть"
            onClick={this.closeButton_clickHandler}
          />

        </div>
      </div>

    );
  }
}

export default InformationScrollablePopup;
