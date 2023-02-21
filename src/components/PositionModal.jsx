// import { Button, Modal, Form } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { MDBCheckbox } from 'mdb-react-ui-kit'
// import { useEffect, useState,useInterval } from "react";



// const PositionModal = (show3) => {
//     const user = useSelector((state) => state.user.user);
//      let [name,setName]=useState(user.name)
// let [surname,setSurname]=useState(user.surname)
// let [title,setTitle]=useState(user.title)
// let[id,setId]=useState(user._id)
//     let [working,setWorking]=useState(false)
// let [skill,setSkill]=useState(false)
// let [media,setMedia]=useState(false)
// let [on,setOn]=useState(false)
// const [count, setCount] =useState(0)
// const arrayRange = (start, stop, step) =>
// Array.from(
// { length: (stop - start) / step + 1 },
// (value, index) => start + index * step
// )
// let years=(arrayRange(1923,2023,1))
// useEffect(()=>{
// setSkill(false)
// },[])
// const ons=()=>{
//     if(on===false){
//       setOn(true)
//     }else{
//       setOn(false)
//     }
//   }
//   const setmed=()=>{
//     if(media===true){
//       setMedia(false)
//     }else{
//       setMedia(true)
//     }
//   }
//   const work=()=>{
//     if(working===true){
//       setWorking(false)
//     }else{
//       setWorking(true)
//     }
//   }
 


//     return ( 
//          <Modal show={show3} onHide={handleClose3} dialogClassName="positionModal d-flex" contentClassName="modal-height">
//     <Modal.Header closeButton>
//       <Modal.Title>Add experience</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <div className="notify">
//       Notify network
// Turn on to notify your network of key profile changes (such as new job) and work anniversaries. Updates can take up to 2 hours. Learn more about sharing profile changes.
// <Form >
//   <Form.Check 
//     type="switch"
//     id="custom-switch"
//     onClick={()=>ons()}
//   />
//   </Form>
//   {on ? <div> <p>On</p></div>:<div> <p>Off</p></div>}
//       </div>
//       <br />
//       <small>*indicates Required</small>
//        <br />             <br />
     
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//        <Form.Label>  Title*</Form.Label>
//             <Form.Control type="text" required placeholder="Ex:Retail Sales Manager"/>
//             <br />
//             <Form.Label>Employment type</Form.Label>

//             <Form.Control as={"select"} required >
//               <option>Please Select</option>
//               <option>Full-Time</option>
//               <option>Part-Time</option>
//               <option>Self-Employed</option>
//               <option>Freelance</option>
//               <option>Contract</option>
//               <option>Internship</option>
//               <option>Apprenticeship</option>
//               <option>Temporary</option>

//             </Form.Control>
//                Learn More About <a href="">employment types</a>.
//                <br /><br />
//                <Form.Label>Company Name*</Form.Label>
//             <Form.Control type="text" required placeholder="Ex:Microsoft"/>
//             <br />
//             <Form.Label>Location</Form.Label>
//             <Form.Control type="text"  placeholder="Ex:London United Kingdom"/>
//             <br />
//             <Form.Label>Location type</Form.Label>
//             <Form.Control as={"select"} required >
//             <option>Please Select</option>
//               <option>On-Site</option>
//               <option>Hybrid</option>
//               <option >Remote</option>
//             </Form.Control>
//             Pick a location type ex:remote             
//             <br />      
//                    <br />
//             {working ?
//             <><MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='I am currently working on this role' onClick={()=>work()} />
//             <br />
//             <Form.Label>Start Date*</Form.Label>
//             <Form.Control as={"select"} required >
//             <option>Month</option>
//               <option>January</option>
//               <option>Febraury</option>
//               <option >April</option>
//               <option >May</option>
//               <option >June</option>
//               <option >July</option>
//               <option >August</option>
//               <option >Septembet</option>
//               <option >October</option>
//               <option >November</option>
//               <option >December</option>
//               <option >March</option>
//             </Form.Control>
//             <Form.Control as={"select"} required >
//            <option>Year</option>
//            {years.map((y)=>{
//             return    <><option key={y}>{y}</option></> 
//            })}
//             </Form.Control>
//             <br />
//             <Form.Label>End Date*</Form.Label>
//             <Form.Control as={"select"} disabled >
//             <option>Month</option>
//               <option>January</option>
//               <option>Febraury</option>
//               <option >April</option>
//               <option >May</option>
//               <option >June</option>
//               <option >July</option>
//               <option >August</option>
//               <option >Septembet</option>
//               <option >October</option>
//               <option >November</option>
//               <option >December</option>
//               <option >March</option>
//             </Form.Control>
//             <Form.Control as={"select"} disabled >
//            <option>Year</option>
//            {years.map((y)=>{
//             return    <><option key={y}>{y}</option></> 
//            })}
//             </Form.Control>
//             <br />
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='End current position as of now'  />

//             <Form.Label>Industry*</Form.Label>
//             <Form.Control type="text" required placeholder="Ex:Retail"/>
//             LinkedIn uses industry information to provide more relevant recommendations
//             <p>Learn more about <a href="">industry options</a></p>
//             <Form.Label>Description</Form.Label>
//             <br /><br />
//             <textarea name="description" id="description" cols="85" rows="3"  onChange={e => setCount(e.target.value.length)}></textarea>
//             <p className="texarea-text"> {count}/2000 </p> <br /><br />
//             </> :
//             <><MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='I am currently working on this role' onClick={()=>work()} />
//             <br />
//             <Form.Label>Start Date*</Form.Label>
//             <Form.Control as={"select"} required >
//             <option>Month</option>
//               <option>January</option>
//               <option>Febraury</option>
//               <option >April</option>
//               <option >May</option>
//               <option >June</option>
//               <option >July</option>
//               <option >August</option>
//               <option >Septembet</option>
//               <option >October</option>
//               <option >November</option>
//               <option >December</option>
//               <option >March</option>
//             </Form.Control>
//             <Form.Control as={"select"} required >
//            <option>Year</option>
//            {years.map((y)=>{
//             return    <><option key={y}>{y}</option></> 
//            })}
//             </Form.Control>
//             <br />
//             <Form.Label>End Date*</Form.Label>
//             <Form.Control as={"select"} required >
//             <option>Month</option>
//               <option>January</option>
//               <option>Febraury</option>
//               <option >April</option>
//               <option >May</option>
//               <option >June</option>
//               <option >July</option>
//               <option >August</option>
//               <option >Septembet</option>
//               <option >October</option>
//               <option >November</option>
//               <option >December</option>
//               <option >March</option>
//             </Form.Control>
//             <Form.Control as={"select"} required >
       
//            {years.map((y)=>{
//             return    <><option key={y}>{y}</option></> 
//            })}
           
//             </Form.Control>
//             <br />
            
//             <Form.Label>Description</Form.Label>     <br /><br />
//             <textarea name="description" id="description" cols="85" rows="3" maxLength={2000}  onChange={e => setCount(e.target.value.length)}></textarea>
//            <p className="texarea-text"> {count}/2000 </p><br /><br />
//             </>}  
//             <Form.Label>Profile Headline</Form.Label>
//             <Form.Control type="text"  value={title}/>
//             Appears below your name at the top of the profile
//             <br />
//                      <br />
//             <h3>Skills</h3>
//             We recommend adding your top 5 used in this role. They’ll also appear in your Skills section.
//             <br />
//             {skill?  
//             <button onClick={()=>setSkill(true)} className="button second">Add Skill</button>
//             :<Form.Control type="text"  />}
//             <h3>Media</h3>
//             Add or link to external documents, photos, sites, videos, and presentations. Learn more about <a href=""> media file types supported</a>
// <br /> <br />
//             <button className="button" onClick={()=>setmed()}>Add Media</button>
//             {media ?
//             <div>
//               <p>Add a link</p>
//               <p>Upload media</p>
//             </div>:""}
//        </Form.Group>



//     </Modal.Body>
//     <Modal.Footer>

//       <Button className="first button" onClick={handleClose3}>
//         Save
//       </Button>
//     </Modal.Footer>
//   </Modal>);
// }
 
// export default PositionModal;