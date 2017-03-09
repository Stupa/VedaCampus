class dbuserDAO {
    constructor(auth, email, password) {
        /*super();*/
        this.auth = auth;
        this.dbuser = new dbuser(email, password);
    }

    create() {
        // TODO : check email
        var pwd = this.dbuser.getPass();
        var tempauth = this.auth;
        var tempemail = this.dbuser.getEmail();
        const promise = this.auth.createUserWithEmailAndPassword(this.dbuser.getEmail(), this.dbuser.getPass());
        promise.catch(e => console.log(e.message));
        promise.then(user => this.login());
    }

    set(auth, email, password) {
        this.auth = auth;
        this.dbuser.setEmail(email);
        this.dbuser.setPass(password);
    }

    getAuth() {
        return this.auth;
    }

    login() {
        const promise = this.auth.signInWithEmailAndPassword(this.dbuser.getEmail(), this.dbuser.getPass());
        promise.catch(e => console.log("MESSAGE " + e.message));
    }

    logout() {
        this.auth.signOut();
    }
}
