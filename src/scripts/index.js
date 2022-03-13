document.getElementById('btn-search').addEventListener('click', () => {
    const userNick = document.getElementById('input-search').value
    getUserProfile(userNick)
})

async function user(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

function getUserProfile(userName){
    user(userName).then(userData =>{
        console.log(userData)
        let userInfo = `<img src='${userData.avatar_url}' alt="Foto de perfil do usuário"> 
                        <div class="data">
                            <h1> ${userData.name ?? 'Não foi possivel encontrar o Nome 😢'}</h1>
                            <p> ${userData.bio ?? 'Não foi possivel encontrar a Bio 😢'}</p>
                        </div>`
        document.querySelector('.profile-data').innerHTML = userInfo
    })
}

getUserProfile()