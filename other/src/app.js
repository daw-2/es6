import Say from './components/Say';
import substraction, { addition, square, getUsers } from './lib/functions';
import env from './env';
import { get } from './lib/get';
import User from './components/User';

let test = () => 20;

console.log(test());

let say = new Say();
console.log(say.hello());

console.log(addition(1, 2, 3));
console.log(square(5));
console.log(substraction(3, 2, 1));

// AJAX
// Récupère la liste des utilisateurs
getUsers().then(users => {
  const ul = document.createElement('ul');
  ul.id = 'user';

  users.map(user => {
    let li = User.addItem(user);

    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}).catch(e => console.log('throw', e));

// Création du formulaire en JS
const form = document.createElement('form');
const inputName = document.createElement('input');
const button = document.createElement('button');

form.setAttribute('method', 'POST');
form.addEventListener(
  'submit',
  User.add.bind(null, inputName)
);
inputName.setAttribute('type', 'text');
button.textContent = 'Ajouter';

form.appendChild(inputName);
form.appendChild(button);
document.body.appendChild(form);

document.querySelector('#btn-preview').addEventListener('click', (event) => {
  let file = document.querySelector('#file');
  let reader = new FileReader();

  reader.addEventListener('load', (event) => {
    let buffer = event.target.result;
    let decoded = jpegasm.decode(buffer);

    let canvas = document.getElementById('canvas');
    canvas.width = decoded.width;
    canvas.height = decoded.height;

    let ctx = canvas.getContext('2d');

    let imageData = ctx.getImageData(0, 0, decoded.width, decoded.height);
    let imageBytes = imageData.data;
    let bufferView = new Uint8Array(decoded.buffer);
    let size = decoded.width * decoded.height;

    for (let i = 0, j = 0; i < size * 4; i < size) {
      imageBytes[i++] = bufferView[j++] + 100; // R
      imageBytes[i++] = bufferView[j++]; // G
      imageBytes[i++] = bufferView[j++]; // B
      imageBytes[i++] = 0xFF; // A
    }

    ctx.putImageData(imageData, 0, 0);
  });

  reader.readAsArrayBuffer(file.files[0]);
});
