import {action, makeObservable, observable, runInAction} from 'mobx';
import {apiRequest} from '../network/ApiRequest';
import {utils} from '../utils/Utils';
import BaseStore from './BaseStore';

class HomeStore extends BaseStore {
  beerList = observable.array();
  page = 1;

  constructor() {
    super();
    makeObservable(this);
  }

  @action getBeers = (fromPagination = false) => {
    if (!fromPagination) {
      this.toggleLoading(true);
    } else {
      this.page++;
    }
    apiRequest.callAPIs(apiRequest.getBeers(this.page)).then((response) => {
      if (response.status === apiRequest.STATUS.SUCCESS) {
        if (fromPagination) {
          runInAction(() => {
            this.beerList.replace([...this.beerList, ...response.data]);
          });
        } else {
          this.beerList.replace(response.data);
        }
      } else {
       
      }
      this.toggleLoading(false);
    }).catch(err=>{
      this.toggleLoading(false);
    });
  };
}

export default HomeStore;
