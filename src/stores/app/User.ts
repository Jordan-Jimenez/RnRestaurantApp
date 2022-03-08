import UserLocation from '../services/UserLocation';

class User {
  constructor() {}

  public location: UserLocation = new UserLocation();
}

export default new User();
