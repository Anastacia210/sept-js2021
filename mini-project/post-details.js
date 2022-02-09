// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then(comments => {
        let comBox = document.getElementsByClassName('comments')[0];
        comBox.innerHTML = '';
        for (const comment of comments) {
            let comMent = document.createElement('li');
            comMent.innerText = comment.body;
            comBox.appendChild(comMent);

        }
    });

