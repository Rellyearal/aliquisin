import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://www.example.com    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
