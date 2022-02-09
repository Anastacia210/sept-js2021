// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersBox = document.getElementsByClassName('users-box')[0];
        usersBox.style.display = 'flex';
        usersBox.style.flexWrap = 'wrap';
        usersBox.style.columnGap = '30px';
        usersBox.style.marginLeft = '200px';

        for (const user of users) {
            let blockUser = document.createElement('div')
            blockUser.innerHTML = `<h1>${user.id} - ${user.name}</h1>`;
            blockUser.style.width = '500px';
            blockUser.style.border = '2px solid blue';
            blockUser.style.margin = '5px';
            blockUser.style.fontSize = '20px';
            blockUser.style.boxSizing = 'border-box';

            let detailsBtn = document.createElement('button')
            detailsBtn.innerText = 'Details';
            detailsBtn.style.marginTop = '50px';
            detailsBtn.style.marginLeft = '70%';
            detailsBtn.style.background = 'aqua';
            detailsBtn.onclick = function () {
                location.href = `user-details.html?User_Id=${user.id}`;
            };

            usersBox.appendChild(blockUser);
            blockUser.appendChild(detailsBtn);

        }
    })