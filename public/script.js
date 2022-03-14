const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');
const cardBody = document.getElementsByClassName("card-body");

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  //alert('Implementar lógica del button submit');
  //getUser('james');
  event.preventDefault();

  const username = document.createElement("h1");
  username.textContent = getUser(input.value)
  username.className = "card-title";

  cardBody[0].appendChild(username);
});

/**
 * Llamado al backend con queryParam
 * @param {*} username
 */
async function getUser(username) {
  const resp = await fetch(`api/users/${username}`);
  const data = await resp.json();
  console.log('data from back', data);
  //printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
