const API_USERS = 'https://mauvelous-leopard-5257.twil.io/friends';
const API_plays = 'https://mauvelous-leopard-5257.twil.io/friends-detail?';
const fs = require("fs");

let datos = fs.readFileSync(API_USERS, "utf8", function (err, data) {
  console.log(data);
});

let info = fs.writeFileSync('usuarios.json', data, (er) => {
  datos.map;
});

const getUser = async () => {
  //TODO user logic
  async function getUsers() {
    const result = await fetch(API_USERS);
    const data = await result.json();
    
    return data;
  }
};

module.exports = { getUser };
