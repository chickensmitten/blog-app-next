import axios from 'axios';

async function getPosts(req, res) {
  try {
    const response = await axios.get('http://localhost:8080/posts');
    return response.data
  } catch (error) {
    console.error(error);
    return []
  }
}

export default getPosts;