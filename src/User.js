import axios from 'axios';

export default class User {
    static findAll() {
        return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data);
    }

    static findAllPosts(id, event) {
        console.log(id);
    }
}
