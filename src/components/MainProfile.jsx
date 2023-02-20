import { useEffect, useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import  "../Css/MainProfile.css"
const MainProfile = () => {

   let [user,setUser]=useState(null)
 let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4"
  const getUser=async()=>{
    const Url="https://striveschool-api.herokuapp.com/api/profile/me"
    try{
        let res= await fetch(Url,{
            method: 'GET',
           
            headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4'}
        }
          )
       let data= await res.json()

  
      setUser(user=data)
      console.log(user)
    }catch(err){
        console.log(err)
    }
  }
  useEffect(()=>{
   getUser()
  },[])


    return (
        
    <Container>
      <Row>
        <Col>
        {user && user===null?
         <div className="upper">
            <img className="profile-pic" src={user.image} alt="Profile-Pic" />

         </div>
     :<h1>Loding...</h1>}
        </Col>
      </Row>
    </Container>);
}
 
export default MainProfile;