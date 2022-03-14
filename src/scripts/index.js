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
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {

    const userName = e.target.value
    const key = e.key
    const isEnterPressed = key === "Enter"

    if(isEnterPressed){
        getUserData(userName)
    }
})

async function getUserData(userName){


    const userResponse = await getUser(userName)
    const reositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(reositoriesResponse)


    screen.renderUser(user)
}

