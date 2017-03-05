//namespace MicroCMS\Domain;

class dbuser {
    constructor(email, password) {
        this.email = email;
        this.pass = password;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }
    getPass() {
        return this.pass;
    }

    setPass(pass) {
        this.pass = pass;
        return this;
    }
}