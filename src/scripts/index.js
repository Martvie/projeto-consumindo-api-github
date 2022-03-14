async function fetchGH() {
    const response = await fetch('https://api.github.com/repos/facebook/react/issues', {
        headers: {
            'Authorization': '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',
        }
    })
    return await response.json()
} // KEY For raise limite of api acess

import {getUser} from '/src/scripts/services/user.js'
import {getRepositories} from '/src/scripts/services/repositories.js'

import {user, screen} from '/src/scripts/objects/objects.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value

    if(validateEmptyInput(userName)){return}


    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {

    const userName = e.target.value
    const key = e.key
    const isEnterPressed = key === "Enter"

    if(validateEmptyInput(userName)){return}

    if(isEnterPressed){
        getUserData(userName)
    }
})

function validateEmptyInput(userName) {
    if(userName.length == 0){
        alert('Preencha o campo de pesquisa para encontrar um usuário')
        return true
    }
}

async function getUserData(userName){


    const userResponse = await getUser(userName)
    if(userResponse.message === "Not Found"){
        screen.renderNotfound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)


    screen.renderUser(user)
}

