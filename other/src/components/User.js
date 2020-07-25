import { ajax } from '../lib/get';
import env from '../env';

export default class User {
  static delete(id, node, event) {
    console.log('Suppression ', id, event);

    ajax(`${env.url}/users/${id}`, 'DELETE').then(
      () => node.remove()
    );
  }

  static add(node, event) {
    event.preventDefault();
    console.log('Ajout', node.value);

    ajax(`${env.url}/users`, 'POST', { name: node.value }).then(
      user => {
        // Ajouter un li avec le nouvel user
        let li = User.addItem(user);

        document.querySelector('#user').appendChild(li);

        // Vider le input
        node.value = '';
      }
    )
  }

  static switch(user, node, parent) {
    let input = document.createElement('input');
    input.value = user.name;
    let blurCb = () => {
      let span = User.addSpan(user, parent);
      parent.replaceChild(span, input);
    };
    input.addEventListener('blur', blurCb);
    input.addEventListener(
      'keyup',
      (event) => {
        let keyCode = event.keyCode;
        if (13 === keyCode) {
          input.removeEventListener('blur', blurCb);
          ajax(
            `${env.url}/users/${user.id}`,
            'PUT',
            { name: input.value }
          ).then(user => {
            console.log(user);
            let span = User.addSpan(user, parent);
            parent.replaceChild(span, input);
          });
        }
      }
    );

    parent.replaceChild(input, node);

    input.focus();
  }

  static addSpan(user, parent) {
    let span = document.createElement('span');
    span.textContent = user.name;
    span.addEventListener(
      'dblclick',
      User.switch.bind(null, user, span, parent)
    );

    return span;
  }

  static addItem(user) {
    let li = document.createElement('li');
    let span = User.addSpan(user, li);
    li.appendChild(span);

    let button = document.createElement('button');
    button.textContent = 'X';
    button.addEventListener(
      'click',
      User.delete.bind(null, user.id, li)
    );
    li.appendChild(button);

    return li;
  }
}
