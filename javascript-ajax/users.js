const $list = document.querySelector('#user-list');

const xhrObj = new XMLHttpRequest();
xhrObj.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhrObj.responseType = 'json';
xhrObj.addEventListener('load', function () {
  console.log(xhrObj.status);
  console.log(xhrObj.response);
  for (let i = 0; i < xhrObj.response.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = xhrObj.response[i].name;
    $list.appendChild($li);
  }
});
xhrObj.send();
