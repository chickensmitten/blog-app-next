import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import createPost from "src/pages/api/posts/create";




function PostForm() {
  const [enteredTitle, setTitle] = useState("")
  const [enteredContent, setContent] = useState("")
  const router = useRouter();

  async function sendPostHandler(event) {
    event.preventDefault();
    try {
      const post = await createPost({
        title: enteredTitle,
        content: enteredContent
      })
      router.push(`/posts/${post._id}`);
    } catch (error) {
      console.log("New Post failed")
    }
  }

  return (
    <Fragment>
      <form onSubmit={sendPostHandler}>
        <div>
          <label>Title</label>
          <input 
            id="title"
            type="text"
            placeholder="Title here"
            onChange={(event) => setTitle(event.target.value)}
            />
        </div>
        <div>
          <label>Content</label>
          <textarea 
            id="content"
            type="text"
            placeholder="Content here"
            onChange={(event) => setContent(event.target.value)}
            />
        </div>
        <div>
          <button
            type="submit"
            >
            Save
          </button>
        </div>
      </form>
    </Fragment>
  )
}

export default PostForm;