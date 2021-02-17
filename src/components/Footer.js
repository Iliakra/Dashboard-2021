import React, { Component } from 'react';

class Footer extends Component {

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

    return (
      <div id="Footer">
        <div>
          Сервис автосборки интернет-баннеров <a className="adverter" href="http://www.adverter.ru/">adverter.ru</a>
        </div>
      </div>
    )
  }



}

export default Footer;
