import { makeAutoObservable, observable } from 'mobx';

import UserLocation from '../services/UserLocation';

class User {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  public location: UserLocation = new UserLocation();
}

export default new User();
