const { User } = require('../models');

const userData = [
    {
        username: 'Panicor',
        password: 'Ohnahh21'

    },
    {
        username: 'Mr.305',
        password: 'Miamiforever22'
    },
    {
        username: 'Avaniw',
        password: 'Hannibal45!'
    },
    {
        username: 'llamabutnot',
        password: 'Password12'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
