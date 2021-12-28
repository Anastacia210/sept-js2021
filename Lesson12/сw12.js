// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users => {
        let usersComment = document.getElementsByClassName('comments-box')[0];
        for (const user of users) {
            let comUser = document.createElement('p');
            comUser.innerText = `${user.id} - ${user.body}`;
            let detailsBtn = document.createElement('button');
            detailsBtn.innerText = 'comment';
            detailsBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        let comBox = document.getElementsByClassName('comments')[0];
                        comBox.innerHTML = '';
                        for (const comment of comments) {
                            let comMent = document.createElement('li');
                            comMent.innerText = comment.body;
                            comBox.append(comMent);
                        }
                    });
            };
            comUser.appendChild(detailsBtn);
            usersComment.appendChild(comUser);
        }
    });