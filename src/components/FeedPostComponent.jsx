import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync } from "../Redux/actions";
import SinglePostComponent from "./SinglePostComponent";
import { Spinner, Alert } from "react-bootstrap";

const FeedPostComponent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const loading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.isError);

  useEffect(() => {
    dispatch(fetchPostsAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-3 mr-1">
      {error && (
        <Alert variant="danger" className="mr-2">
          We got an error loading the posts...
        </Alert>
      )}

      {loading && (
        <Spinner animation="border" role="status" className="post-spinner">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      {posts.map((e, i) => {
        return <SinglePostComponent key={i} data={e} />;
      })}
    </div>
  );
};
export default FeedPostComponent;
