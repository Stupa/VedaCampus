class usersDAO {
    constructor() {
        this.users = new users();
    }

    getTable() {
        return this.users.getTable();
    }


    setQuery(query) {
        this.query = query;
    }

    setValues(icon, phone, nickname) {
        this.users.setIcon(icon);
        this.users.setPhone(phone);
        this.users.setNickname(nickname);
    }

    add() {
        /* push génère une clef newid {...}*/
        this.query.ref.set({
            icon: this.users.getIcon(),
            phone: this.users.getPhone(),
            nickname: this.users.getNickname(),
        });
    }

    get() {
        /* this.auth.signOut();*/
    }
}
