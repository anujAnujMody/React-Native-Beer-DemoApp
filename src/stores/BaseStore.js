const {observable, action} = require('mobx');

class BaseStore {
  @observable isLoading = true;
  @action toggleLoading = (value) => {
    this.isLoading = value;
  };
}

export default BaseStore;
