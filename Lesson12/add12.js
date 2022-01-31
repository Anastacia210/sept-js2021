// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        let usDiv = document.getElementsByClassName('users')[0];
        for (const user of users) {
            let mainU = document.createElement('h1');
            mainU.innerText = `${user.id} - ${user.name}`;
            mainU.style.border = '3px solid red';
            mainU.style.width = '700px';
            let postBtn = document.createElement('button');
            postBtn.innerText = 'Post';
            postBtn.style.marginLeft = '10px';
            postBtn.style.background = 'lightgreen';
            postBtn.onclick = function () {

                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {

                        let pBox = document.getElementsByClassName('posts')[0];
                        pBox.innerHTML = '';
                        for (const post of posts) {
                            let poSt = document.createElement('p');
                            poSt.innerText = post.body;
                            poSt.style.fontSize = '16px';
                            poSt.style.width = '600px';
                            poSt.style.border = '2px solid pink';
                            let comBtn = document.createElement('button');
                            comBtn.innerText = 'Comment';
                            comBtn.style.marginLeft = '10px';
                            comBtn.style.background = 'lightblue';
                            comBtn.onclick = function () {

                                fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
                                    .then(response => response.json())
                                    .then(comments => {

                                        let comBox = document.getElementsByClassName('comments')[0];
                                        for (const comment of comments) {
                                            let comMent = document.createElement('li');
                                            comMent.innerText = comment.body;
                                            comMent.style.fontSize = '14px';
                                            comMent.style.color = 'gray';
                                            comMent.style.width = '500px';
                                            comMent.style.textAlign = 'center'
                                            comMent.style.margin = '5px';
                                            comMent.style.border = '1px solid aqua';
                                            comMent.append(comBox);
                                            poSt.appendChild(comMent);
                                        }

                                    });

                            }
                            poSt.appendChild(comBtn);
                            pBox.append(poSt);
                            mainU.appendChild(pBox);
                        }

                    });

            }
            usDiv.appendChild(mainU);
            mainU.appendChild(postBtn);

        }

    });
