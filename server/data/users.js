import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345678', 8),
        isAdmin: true
    },
    {
        name: 'prem kumar',
        email: 'prem@example.com',
        password: bcrypt.hashSync('12345678', 8),
        isAdmin: false
    },
    {
        name: 'vijay',
        email: 'vijay@example.com',
        password: bcrypt.hashSync('12345678', 8),
        isAdmin: false
    },

]

export default users;