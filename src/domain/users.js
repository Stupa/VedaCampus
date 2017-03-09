//namespace MicroCMS\Domain;

class users {
    constructor() {
        this.table="users";
        this.id = '';
        this.icon = '';
        this.phone = '';
        this.nickname = '';
    }

    getTable() {
        return this.table;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
        return this;
    }
    getIcon() {
        return this.icon;
    }

    setIcon(icon) {
        this.icon = icon;
        return this;
    }
    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }
    getNickname() {
        return this.nickname;
    }

    setNickname(nickname) {
        this.nickname = nickname;
        return this;
    }

}