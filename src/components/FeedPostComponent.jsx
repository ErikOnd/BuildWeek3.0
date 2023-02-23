import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync } from "../Redux/actions";
import SinglePostComponent from "./SinglePostComponent";

const FeedPostComponent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const refresh = useSelector((state) => state.posts.refresh);

  // useEffect(() => {
  //   dispatch(fetchPostsAsync());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    dispatch(fetchPostsAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <>
      {posts === null ? (
        "Loading"
      ) : (
        <div className="mt-3 mr-4">
          {posts.map((e) => {
            return <SinglePostComponent data={e} key={e._id} />;
          })}
        </div>
      )}
    </>
  );
};
export default FeedPostComponent;
