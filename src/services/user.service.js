export class User {
    constructor(name, password, address, email, cnic) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.cnic = cnic;
        this.password = password;
    }

    addUser() {
        const users = localStorage.getItem("@users");
        if (!users) {
            localStorage.setItem("@users", JSON.stringify([{ ...this }]));
        }
        else {
            const items = JSON.parse(users);
            items.push({ ...this });
            localStorage.setItem("@users", JSON.stringify(items));
        }
    }

    static getAllUsers() {
        const items = localStorage.getItem("@users");
        return items ? JSON.parse(items): [];
    }
}

new User("Admin", "admin123", "admin@localhost.com", "admin123@gmail.com", "33333333333333").addUser();