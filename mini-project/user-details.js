// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usInfBox = document.getElementsByClassName('usInf')[0];

        for (const user of users) {
            let usBox = document.createElement('div');
            usBox.innerText = JSON.stringify(user);
            usBox.style.border = '2px solid #000';
            usBox.style.marginTop = '10px';

            let postBtn = document.createElement('button');
            postBtn.innerText = 'post of current user';
            postBtn.style.background = 'salmon';
            postBtn.style.marginTop = '30px';
            postBtn.style.marginLeft = '90%';

            postBtn.onclick = function () {

                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {

                        let pBox = document.getElementsByClassName('posts')[0];
                        pBox.innerHTML = '';
                        for (const post of posts) {
                            let poSt = document.createElement('p');
                            poSt.innerText = post.title;
                            poSt.style.fontSize = '16px';
                            poSt.style.width = '500px';
                            poSt.style.border = '2px solid pink';
                            let comBtn = document.createElement('button');
                            comBtn.innerText = 'Comment';
                            comBtn.style.marginTop = '50px';
                            comBtn.style.marginLeft = '80%'
                            comBtn.style.background = 'lightblue';
                            comBtn.onclick = function () {
                                location.href = `post-details.html?Post_Id=${user.id}`;
                            };
                            pBox.appendChild(poSt);
                            poSt.appendChild(comBtn);
                            usBox.appendChild(poSt);

                        }
                    });
            }

            usInfBox.append(usBox);
            usBox.appendChild(postBtn);

        }
    });
