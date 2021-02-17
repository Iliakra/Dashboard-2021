import React, { Component } from 'react';
import TopMenu from '../components/TopMenu';
import ScrollPlace from '../components/ScrollPlace';
import FeedsEditor from '../components/FeedsEditor';

class Container extends Component {

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


  componentDidUpdate(prevProps, prevState, snapshot) {
    let topMenuElement=document.getElementById("TopMenu");
    let scrollPlaceElement=document.getElementById("ScrollPlace");
    scrollPlaceElement.style.top=topMenuElement.clientHeight+"px";
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

    children.push(
      <TopMenu
        store={this.store}
        key="TopMenu"
      />
    );
    children.push(
      <ScrollPlace
        store={this.store}
        key="ScrollPlace"
      />
    );

    if ((this.state)&&(this.state.feedsEditorisActive)) {
      children.push(
        <FeedsEditor
          store={this.store}
          key="FeedsEditor"
          />
      );
    }

    return React.createElement(
      'div',
      { id:'Container',
      },
      children
      );
  }
}

export default Container;
