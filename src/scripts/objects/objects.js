const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }
}

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                        <img src='${user.avatarUrl}' alt="Foto de perfil do usuário"> 
                        <div class="data">
                            <h1> ${user.name ?? 'Não foi possivel encontrar o Nome 😢'}</h1>
                            <p> ${user.bio ?? 'Não foi possivel encontrar a Bio 😢'}</p>
                        </div>
                        </div>`
        
        let repositorieItens = ''
        user.repositories.forEach(repo => repositorieItens += `<li><a href="${repo.htmlUrl}" target="_blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositorieItens}</ul>
                                                </div>`
        }
    },
    renderNotfound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}
export {user, screen}