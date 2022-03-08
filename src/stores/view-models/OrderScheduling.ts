import User from '../app/User';

class OrderScheduling {
  constructor() {
    this.getUserLocation();
  }

  private async getUserLocation() {
    await User.location.requestCoordinates();
  }
}

export default OrderScheduling;
