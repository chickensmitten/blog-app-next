import axios from 'axios';
import getPosts from 'src/pages/api/posts';

function Post({ post }) {
  return (
    <div>
      <h3>{post.id}</h3>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;  
  const response = await axios.get(`http://localhost:8080/posts/${id}`);
  const post = response.data;
  
  return {
    props: {
      post,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => ({ params: { id: post._id } })),
    fallback: false,
  };
}

export default Post;
