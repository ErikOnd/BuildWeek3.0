import FeedLeftSideBar from "./FeedLeftSideBar";
import HomeRightBar from "./HomeRightBar";
import PostSection from "./PostSection";
import { Container, Row, Col } from "react-bootstrap";
const FeedComponent = () => {
  return (
    <Container className="feed-container">
      <Row>
        <Col className="d-flex justify-content-center">
          <Col>
            <FeedLeftSideBar />
          </Col>
          <div className="mx-5 ">
            <PostSection />
          </div>
          <div className="feed-right-bar-container">
            <HomeRightBar />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeedComponent;
