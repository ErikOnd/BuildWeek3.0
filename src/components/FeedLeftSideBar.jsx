import { Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BookmarkFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";

const FeedLeftSideBar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="feed-left-sidebar">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IJpYXw1z9dcY_h9oYkdhRJd3KqECVrzB-5odrCurcu7qsY-j"
          className="left-sidebar-header-img"
        ></Image>
        <Image src={user.image} className="feed-left-side-profile"></Image>
        <Row className="justify-content-center mt-5 box-h2">
          {user.name + " " + user.surname}
        </Row>
        <Row className="justify-content-center experience-p mt-1 pb-3 creator-mode mx-0">
          Student at Epicode
        </Row>
        <Row className="mx-0 pl-3 pr-3 mt-3 justify-content-between">
          <span>Connections</span>
          <span className="blue-bold">42</span>
        </Row>
        <Row className="mx-0 pl-3 pr-3 mb-1">
          {" "}
          <b>Connect with alumni</b>
        </Row>
        <Row className="mx-0 pl-3 pr-3 justify-content-between pb-3 creator-mode">
          <span>Who's viewed your profile</span>
          <span className="blue-bold">16</span>
        </Row>
        <Row className="mx-0 pl-3 pr-3 mb-1 mt-3">
          Access exclusive tools & insights
        </Row>
        <Row className="mx-0 pl-3 pr-3 mb-1 pb-3 creator-mode">
          <b>
            <u>Try Premium for free</u>
          </b>
        </Row>
        <Row className="mx-0 pl-3 pr-3 mb-1 pb-3 mt-3 align-items-center">
          {" "}
          <BookmarkFill className="mr-2 book"></BookmarkFill>My items
        </Row>
      </div>
      <div className="feed-left-sidebar mt-2">
        <Row className="mx-0 pl-3 pr-3 mb-1 pb-1 mt-3">Recent</Row>
        <Row className="mx-0 pl-3 pr-3 mb-1 pb-3">JavaScript Developer</Row>
        <Row className="mx-0 pl-3 pr-3 mb-1 pb-1 mt-2 blue-bold">Groups</Row>
        <Row className="mx-0 pl-3 pr-3 mb-1">JavaScript Developer</Row>
        <Row className="mx-0 pl-3 pr-3 mb-1 pb-2">See all</Row>
        <Row className="mx-0 pl-3 pr-3 mb-1 mt-3 justify-content-between pb-1 align-items-center">
          <span className="blue-bold ">Events</span>
          <Plus className="plus-left-sidebar"></Plus>
        </Row>
        <Row className="mx-0 pl-3 pr-3 mb-1 pb-2 blue-bold creator-mode">
          Follow Hashtags
        </Row>
        <Row className="align-items-center justify-content-center">
          <span className="lp-bottom-text pointer mb-3">Discover more</span>
        </Row>
      </div>
    </>
  );
};

export default FeedLeftSideBar;
