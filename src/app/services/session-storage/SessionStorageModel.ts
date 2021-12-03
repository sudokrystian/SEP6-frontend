export class SessionStorageModel{
  username: string='';
  loggedIn: boolean = false;
  constructor(username: string, loggedIn: boolean) {
    this.username = username;
    this.loggedIn = loggedIn;
  }
}
