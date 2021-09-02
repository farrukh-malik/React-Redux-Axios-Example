import axios from 'axios';

class UserService {

    async getUser() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response && response.data;
    }
}

export default new UserService();