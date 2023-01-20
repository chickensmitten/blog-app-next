import Link from "next/link";

function PostItem(props) {
  const { _id, title, content } = props.post;

  const linkPath = `/posts/${_id}`;

  return (
    <li>
      <Link href={linkPath}>
          <p>{_id}</p>
          <h3>{title}</h3>
          <p>{content}</p>
      </Link>
    </li>
  );
}

export default PostItem;