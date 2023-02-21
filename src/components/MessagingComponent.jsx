import {
  ChevronCompactUp,
  PencilSquare,
  ThreeDots,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { Image } from "react-bootstrap";

const MessagingComponent = () => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {}, [user]);

  return (
    <div className="message-box">
      <Image src={user?.image} className="message-img"></Image>
      <div className="message-online"></div>
      <span className="message-text">Messaging</span>
      <ThreeDots className="mr-3"></ThreeDots>
      <PencilSquare className="mr-3"></PencilSquare>
      <ChevronCompactUp className="mr-3"></ChevronCompactUp>
    </div>
  );
};

export default MessagingComponent;
