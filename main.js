const USERS_URL = "https://api.github.com/users";


let container = document.getElementsByTagName('section')[0];


async function getUsers() {
    await fetch(USERS_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        data.forEach(item => {
            let elementImg = document.createElement('img')
            let elementLogin = document.createElement('h4')
            let elementRepoUrl = document.createElement('p')
            let elementArticle = document.createElement('article')

            elementImg.setAttribute('src', item.avatar_url)
            elementLogin.appendChild(document.createTextNode(item.login))
            elementRepoUrl.appendChild(document.createTextNode(item.repos_url))

            elementArticle.appendChild(elementImg)
            elementArticle.appendChild(elementLogin)
            elementArticle.appendChild(elementRepoUrl)

            container.appendChild(elementArticle)
        });   
    });
}
getUsers();


