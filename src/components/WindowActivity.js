import TabVisibility from 'react-tab-visibility'
import { windowActivated, windowDeactivated } from '../actions/appActions';

class WindowActivity extends TabVisibility {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  onTabVisibilityChange({ tabIsVisible, hiddenTime }) {

    if (tabIsVisible) {
      this.store.dispatch(
        windowActivated(hiddenTime)
      );
    } else {
      this.store.dispatch(
        windowDeactivated()
      );
    }

  }

}

export default WindowActivity;
