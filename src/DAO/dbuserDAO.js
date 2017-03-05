class dbuserDAO extends dbrootDAO {
    constructor(dbrootDAO,email, password) {
        super();
        this.auth = dbrootDAO.getAuth();
        this.dbuser = new dbuser(email,password);
    }

    create() {
        // TODO : check email
        const promise = this.auth.createUserWithEmailAndPassword(this.dbuser.getEmail(), this.dbuser.getPass());
        promise.catch(e => console.log(e.message));
    }

    set(email, password) {
        this.dbuser.setEmail(email);
        this.dbuser.setPass(password);
    }

    login() {
        const promise = this.auth.signInWithEmailAndPassword(this.dbuser.getEmail(), this.dbuser.getPass());
        promise.catch(e => console.log(e.message));
    }

    logout() {
        this.auth.signOut();
    }
}
