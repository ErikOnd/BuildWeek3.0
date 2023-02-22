import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync } from "../Redux/actions";
import SinglePostComponent from "./SinglePostComponent";
import { Modal, Button } from "react-bootstrap";
import PostModalComponent from "./PostModalComponent";

const FeedPostComponent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [ordered, setOrdered] = useState(null);
  console.log(ordered);

  useEffect(() => {
    dispatch(fetchPostsAsync());
    setOrdered(
      posts
        .slice(0)
        .reverse()
        .slice(0, 20)
        .map(function (e) {
          return e;
        })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   useEffect(() => {
  //     console.log(ordered);
  //   }, [ordered]);

  return (
    <>
      <PostModalComponent />

      {ordered === null
        ? "Loading"
        : ordered.map((e) => {
            return <SinglePostComponent data={e} key={e._id} />;
          })}
    </>
  );
};
export default FeedPostComponent;
