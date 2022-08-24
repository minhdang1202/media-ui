import { Post, Share } from "../index";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
