const API = 'https://api.github.com/users/';

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

getUser('hijal');

async function getUser(user) {
  const response = await fetch(API + user);
  const data = await response.json();
  createUser(data);
  getRepository(user);
}

async function createUser(data) {
  const cardHtml = `
    <div class="card">
      <div>
        <img class="avatar" src="${data.avatar_url}" alt="avatar-${data.name}" />
      </div>
      <div class="user-info">
        <h2>
          ${data.name}
        </h2>
        <p>
          ${data.bio}
        </p>
        <ul class="info">
          <li>${data.followers} <strong>Follower</strong></li>
          <li> ${data.following} <strong>Following</strong><li>
          <li>${data.public_repos} <strong>Public</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;

  main.innerHTML = cardHtml;
}


async function getRepository(username) {
  const response = await fetch(API + username + '/repos');
  const data = await response.json(response);
  addRepositoryToCard(data);
}

function  addRepositoryToCard(repo){
  const repository = document.getElementById('repos');
  if(repo) {
    repo.sort(function(a, b){
      return b.stargazers_count - a.stargazers_count;
    })
    .slice(0, 10)
    .forEach(element => {
      const repoEL = document.createElement('a');
      repoEL.classList.add('repo');
      repoEL.href = element.html_url;
      repoEL.target = "_blank";
      repoEL.innerText = element.name;
      repository.appendChild(repoEL);
    });
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const user = search.value;

  if(user) {
    getUser(user);
    search.value = '';
  }
});