class dbrootDAO {
    constructor() {
        this.config = {
            apiKey: "AIzaSyDcsS2GsecC2mFxUlgnCoYnPHI2hG_Z-tE",
            authDomain: "vedacampus.firebaseapp.com",
            databaseURL: "https://vedacampus.firebaseio.com",
            storageBucket: "vedacampus.appspot.com",
            messagingSenderId: "369174664334"
        };
        this.auth = null;
    }

    getAuth() {
        return this.auth;
    }

    init() {
        firebase.initializeApp(this.config);
        this.auth = firebase.auth();
    }
}