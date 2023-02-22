import { Container,Row,Col } from "react-bootstrap";
import { useState } from "react";
const HomeRightBar = () => {
    let [more,setMore]=useState(false)
    return ( <Container className="home-rigthbar-container">
     <Row>
        <div className="d-flex">
            <p>LinkedIn News</p>
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
        <button onClick={()=>setMore(false)}>Show Less</button>
        </> :    <button onClick={()=>setMore(true)}>Show More</button>}
    </Container> );
}
 
export default HomeRightBar;