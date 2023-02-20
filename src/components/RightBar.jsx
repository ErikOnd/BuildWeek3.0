import React from "react"
import Text from "./Text"
import "../App.css";





export default function RightBar() {
  return (
    <>
      
      <div className=" border side-component-border bg-white">
        <Text text="Edit public profile & URL" />
        <hr style={{ width: "90%" }} />
        <Text text="Add profile in another language" />
      </div>
     
      <div className=" border side-component-border bg-white">
      <h6 class="view">People also viewed</h6>
     </div>
     <div className="border side-component-border bg-white">
      <h6 class="people">People you may know</h6>
      </div>
      

    </>
  )
}