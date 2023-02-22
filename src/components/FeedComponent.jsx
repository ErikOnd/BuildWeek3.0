import FeedLeftSideBar from "./FeedLeftSideBar";
import { Container } from "react-bootstrap";

const FeedComponent = () => {
  return (
    <Container className="feed-container">
      <FeedLeftSideBar></FeedLeftSideBar>
    </Container>
  );
};

export default FeedComponent;
