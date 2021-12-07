export class SessionStorageModel{
  username: string='';
  loggedIn: boolean = false;
  sessionToken: string ='';
  constructor(username: string, loggedIn: boolean) {
    this.username = username;
    this.loggedIn = loggedIn;
  }
}
