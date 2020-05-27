import axios from 'axios';
import User from '../src/User';

jest.mock('axios');

describe('User test', () => {
    beforeEach(() => {
        axios.get.mockClear();
    });

    it('can get users list', async () => {
        let expected = [1, 2, 3];

        axios.get.mockResolvedValue({data: expected});

        expect(await User.findAll()).toBe(expected);
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    it('can get posts list', async () => {
        let expected = [{title: 4}, {title: 5}, {title: 6}];

        axios.get.mockResolvedValue({data: expected});

        expect(await User.findAllPosts(4)).toBe(expected);
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?userId=4');
        expect(axios.get).toHaveBeenCalledTimes(1);

        let div = document.createElement('div');
        // div.textContent = 'Toto';
        document.body.appendChild(div);

        expect(document.body.innerHTML).toBe('<div></div>');

        await User.findAllPosts(4, div);

        expect(document.body.innerHTML).toBe('<div><ul><li>4</li><li>5</li><li>6</li></ul></div>');

        div.click();

        expect(document.body.innerHTML).toBe('<div></div>');
    });
});
