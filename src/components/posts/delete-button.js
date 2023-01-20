import { useRouter } from "next/router";
import { Fragment } from "react";
import deletePost from "src/pages/api/posts/delete";

function PostDelete(props) {
  const router = useRouter();

  async function deletePostHandler(id) {
    try {
      const response = await deletePost(id);
      router.push("/posts");
    } catch (error) {
      console.log("Deleting post failed")
    }
  }

  return (
    <Fragment>
      <button
        onClick={() => deletePostHandler(props.post._id)}
        >
        Delete
      </button>
    </Fragment>
  )

}

export default PostDelete;

