import React, { Component } from 'react';
import settings from '../configuration/Settings.js';

class StatusBar extends Component {

  constructor(props) {
    super(props);
    this.state={
      viewStatus:{},
    };
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
    // let isSelected=false;

    let creativeCount=0;
    if (this.state.creatives) {
      creativeCount = Object.keys(this.state.creatives).length;
    }

    let children = [];
    children.push(this.props.children);

    children.push(<div key="campName"><b>{this.state.name}</b></div>);

    children.push(<div key="count">Показано {this.props.viewCount} из {creativeCount}</div>);

    let format=this.state.viewStatus.format;
    switch (format) {
      case "all": format="все форматы"; break;
      case "simple": format="только простые"; break;
      case "rubber": format="только тянущиеся"; break;
      case "square": format="только квадратные"; break;
      case "vertical": format="только вертикальные"; break;
      case "horizontal": format="только горизонтальные"; break;
      default:;
    }
    children.push(<div key="format">Формат: {format}</div>);

    let section=this.state.viewStatus.section;
    switch (section) {
      case "all": section="все"; break;
      case "main": section="основной"; break;
      default:;
    }
    children.push(<div key="section">Раздел: {section}</div>);

    let publisher=this.state.viewStatus.publisher;
    if (publisher==="all") publisher="все"
    children.push(<div key="publisher">Площадка: {publisher}</div>);

    let platform=this.state.viewStatus.platform;
    if (platform==="all") platform="все"
    children.push(<div key="platform">Платформа: {platform}</div>);

    let feed=this.state.viewStatus.feed;
    if (feed==="all") feed="все"
    children.push(<div key="feed">Фиды: {feed} </div>);

    let status=this.state.viewStatus.status;

    if (status) {
      if (status==="all") status="все"; else status=settings.statuses[status].title.toLowerCase();
      children.push(<div key="status">Статус: {status}</div>);
    }

    let passedView=this.state.viewStatus.passedView;
    switch (passedView) {
      case "all": passedView="все"; break;
      case "passed": passedView="только принятые"; break;
      case "nonpassed": passedView="только непринятые"; break;
      default:;
    }
    children.push(<div key="passedView">Реценизия: {passedView}</div>);

    let mode=this.state.viewStatus.mode;
    switch (mode) {
      case "frames": mode="кадр №"+(Number(this.state.viewStatus.currentFrame)+1); break;
      case "demo": mode="демо"; break;
      case "backup": mode="заглушки"; break;
      default:;
    }
    children.push(<div key="layer">Просмотр: {mode}</div>);

    return React.createElement(
      'div',
      { id:'StatusBar',
      },
      children
      );
  }



}

export default StatusBar;
