// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let postsBox = document.getElementsByClassName('posts-box')[0];
        for (const post of posts){
            let pBox = document.createElement('p');
            pBox.innerText = `${post.id} - ${post.body}`
            pBox.style.width = '400px';
            pBox.style.border = '2px solid blue';
            postsBox.append(pBox)
        }
    });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let comBox = document.getElementsByClassName('comments-box')[0];
        for (const comment of comments){
            let cBox = document.createElement('p');
            cBox.innerText = `${comment.id} - ${comment.body}`
            cBox.style.width = '500px';
            cBox.style.border = '2px solid green';
            comBox.append(cBox)
        }
    });