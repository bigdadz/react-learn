import { observable, action } from 'mobx';

class AuthStore {
  @observable email = '';
  @observable password = '';
  @observable currentUser = null;

  @action setEmail(email) {
    this.email = email;
  }

  @action setPassword(password) {
    this.password = password;
  }

  @action setCurrentUser(currentUser) {
    this.currentUser = currentUser;
  }
}

export default new AuthStore();