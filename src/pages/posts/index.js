import PostItem from 'src/components/posts/post-item';
import getPosts from '../api/posts';

function Posts({ posts }) {
  
  return (
    <div>
      {posts.map(post => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}

export async function getStaticProps() {

  const posts = await getPosts();
  return {
    props: {
      posts
    },
    revalidate: 3600
  }
}

export default Posts;