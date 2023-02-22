import { Container,Row,Col } from "react-bootstrap";
import { useState } from "react";
import { ArrowDown,ArrowUp } from "react-bootstrap-icons";
// import {logo} from "../Css/pics/Ll-Logo"
const HomeRightBar = () => {
    let [more,setMore]=useState(false)
    return ( <><Container className="home-rigthbar-container">
     <Row>
        <div className="d-flex ">
            <p className="ml-4"><b> LinkedIn News</b></p>
         
        </div>
        </Row>
        <div className="side-news">
        <p><b>• Why We sleep more in the winter</b></p>

        <small>1d ago • 1,698 readers</small>
        </div >
        <div className="side-news">
        <p><b>• Why We sleep more in the winter</b></p>

        <small>1d ago • 1,698 readers</small>
        </div>
        <div className="side-news">
        <p><b>• Why We sleep more in the winter</b></p>

        <small>1d ago • 1,698 readers</small>
        </div>
        <div className="side-news">
        <p><b>• Why We sleep more in the winter</b></p>

        <small>1d ago • 1,698 readers</small>
        </div>
        {more?   
        <>
          <div className="side-news">
        <p><b>• Why We sleep more in the winter</b></p>

        <small>1d ago • 1,698 readers</small>
        </div>
        <div className="side-news">
        <p><b>• Why We sleep more in the winter</b></p>

        <small>1d ago • 1,698 readers</small>
        </div>
        <div className="side-news">
        <p><b>• Why We sleep more in the winter</b></p>

        <small>1d ago • 1,698 readers</small>
        </div>
        <div className="side-news">
        <p><b>• Why We sleep more in the winter</b></p>

        <small>1d ago • 1,698 readers</small>
        </div>
        <button onClick={()=>setMore(false)} className="ml-4 "> Show Less <ArrowUp/></button>
        </> :    <button onClick={()=>setMore(true)} className="ml-4 ">Show More <ArrowDown className=" arrowDown"/></button>   }
    </Container>
 
        <Container className="home-rightbar-footer">
            <div className="home-rightbar-footer-links">
                <Row className="d-flex justify-content-center">
          <small><a className="rightbar-link" href="https://about.linkedin.com/">About</a></small>
          <small ><a className="rightbar-link" href="https://www.linkedin.com/accessibility">Accessibility</a></small>
          <small ><a className="rightbar-link" href="https://www.linkedin.com//help/linkedin?trk=footer_d_flagship3_feed">Help Center</a></small>
          </Row>
          <Row className="d-flex justify-content-center">
          <small ><a className="rightbar-link" href="">Privacy & Terms <ArrowDown/> </a></small>
          <small ><a className="rightbar-link" href="https://www.linkedin.com/help/linkedin/answer/a1342443">Ad Choices</a></small>
          </Row>
          
         
          <Row className="d-flex justify-content-center">
          <small ><a className="rightbar-link" href="https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart">Advertising</a></small>
          <small ><a className="rightbar-link" href="">Business Services <ArrowDown/></a> </small>
         
          </Row>
          <Row className="d-flex justify-content-center">
          <small ><a className="rightbar-link" href="">Get the LinkedIn app</a></small>
          <small ><a className="rightbar-link" href="">More</a></small>
          </Row>
          </div>
          <br />
          <Row className="d-flex justify-content-center">
          <small className=""> LinkedIn Corporation © 2023</small>
          </Row>
        </Container>

    </> );
}
 
export default HomeRightBar;