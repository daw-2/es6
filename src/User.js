import axios from 'axios';

export default class User {
    static findAll() {
        return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data);
    }

    static findAllPosts(id, node = null) {
        let promise = axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(response => response.data);

        if (node) {
            let tagName = node.lastChild.tagName;
            if (tagName && tagName.toLowerCase() === 'ul') {
                // node.children[0].remove();
                return;
            }

            let ul = document.createElement('ul');

            promise.then(posts => {
                posts.map(post => {
                    let li = document.createElement('li');
                    li.textContent = post.title;
                    ul.appendChild(li);
                });

                node.appendChild(ul);
            });

            node.addEventListener('click', () => ul.remove(), { once: true });

            return;
        }

        return promise;
    }
}
