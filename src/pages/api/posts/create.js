import axios from 'axios';

async function createPost(req, res) {
  try {
    const response = await axios.post('http://localhost:8080/posts/create', req);
    return response.data
  } catch (error) {
    console.error(error);
  }
}

export default createPost;