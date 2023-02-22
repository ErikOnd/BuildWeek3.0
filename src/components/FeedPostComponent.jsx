import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync } from "../Redux/actions";
import SinglePostComponent from "./SinglePostComponent";
import { Modal, Button } from "react-bootstrap";

const FeedPostComponent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [ordered, setOrdered] = useState(null);
  //   console.log(ordered);

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

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, []);

  return (
    <>
      {ordered === null ? (
        "Loading"
      ) : (
        <div className="mt-3 mr-4">
          {ordered.map((e) => {
            return <SinglePostComponent data={e} key={e._id} />;
          })}
        </div>
      )}
    </>
  );
};
export default FeedPostComponent;
