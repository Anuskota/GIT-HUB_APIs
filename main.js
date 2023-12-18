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
    
    try { const {data} = await axios(APIURL + username + "")
        addRepoToCard(data);
        
    } catch (err) {
        createErrorCard('Have a Poblem');

    }
}

async function createUserCard(user) {

    const cardHtmlCreate =
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





    
    
    
    
        `


}