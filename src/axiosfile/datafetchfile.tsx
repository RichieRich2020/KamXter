import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const fetchUsers = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return data;
};

const registerUser = async (userData: any) => {
  console.log(userData, 'sedsdsewew');
  const response = await axios.post(`${baseURL}/api/user/register`, userData);
  console.log(response, 'weeweew');
  return response.data;
};

export { fetchUsers, registerUser };
