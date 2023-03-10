import axios from 'axios';

async function deletePost(req, res) {
  try {
    const response = await axios.delete(`http://localhost:8080/posts/${req}/delete`);
    return "Post Deleted"
  } catch (error) {
    console.error(error);
  }
}

export default deletePost;