async function fetchGH() {
    const response = await fetch('https://api.github.com/repos/facebook/react/issues', {
        headers: {
            'Authorization': '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',
        }
    })
    return await response.json()
} // KEY For raise limite of api acess

import {user} from '/src/scripts/services/user.js'
import {repositories} from '/src/scripts/services/repositories.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {

    const userName = e.target.value
    const key = e.key
    const isEnterPressed = key === "Enter"

    if(isEnterPressed){
        getUserProfile(userName)
    }
})

function getUserProfile(userName){

    user(userName).then(userData =>{
        let userInfo = `<div class="info">
                        <img src='${userData.avatar_url}' alt="Foto de perfil do usuário"> 
                        <div class="data">
                            <h1> ${userData.name ?? 'Não foi possivel encontrar o Nome 😢'}</h1>
                            <p> ${userData.bio ?? 'Não foi possivel encontrar a Bio 😢'}</p>
                        </div>
                        </div>`
        document.querySelector('.profile-data').innerHTML = userInfo

        getUserRepositories(userName)
    })
}

function getUserRepositories(userName){
    repositories(userName).then(reposData => {
        let repositoriesItens = []
        reposData.forEach(repo => {
            repositoriesItens +=`<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })
        document.querySelector('.profile-data').innerHTML += 
        `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
        </div>`
    })
}

