const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main');
const search = document.getElementById('search');
const form = document.getElementById('form');


async function getUser(username) {

    try {
        const { data } = await axios(APIURL + username);
        createUserCard(data);2
        getRepos(username);
        console.log(getUser)
    

    }catch (err) {
    
        if (err.response.status == 404) {
        createErrorCard ('No profile')
    }

} 

}

async function getRepos(username) {
    
    try {
        
        const { data } = await axios(APIURL + username + "")
        addRepoToCard(data);
        
    } catch (err) {
        createErrorCard('Have a Poblem');

    }
}

function createUserCard(user) {

    const cardHtml =
        ` <div class="card">
                <div>
                    <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
                </div>
                <div class="user-info">
                    <h2>"${user.name}</h2>
                    <ul>
                        <li>${user.followers} <strong>Followers</strong><li>
                        <li>${user.following} <strong>Following</strong><li>
                        <li>${user.public_repos} <strong>Public Repos</strong><li>
                    <ul>

                <div id="repos"></div>
                </div>
            </div>`;

    main.innerHTML = cardHtml;


}

function createErrorCard(msg) {
    const cardHTML = ` 
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML; 

}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');
    repos.slice(0, 5).forEach(repo => {
        const repoLink = document.createElement('a');
        repoLink.classList.add('repo');
        repoLink.href = repo.html_url;
        repoLink.target = '_blank'
        repoLink.innerText = repo.name;

        reposEl.appendChild(repoLink);


    });
}

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const user = search.valua;
        if(user) {
            getUser(user);
            search.value = '';
    }



})



