import { Form } from "react-bootstrap";

export const GET_USER = "GET_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const GET_ALL_EXPERIENCE = "GET_ALL_EXPERIENCE";
export const GET_SINGLE_EXPERIENCE = "GET_SINGLE_EXPERIENCE";
export const POST_EXPERIENCE = "POST_EXPERIENCE";
//export const PUT_EXPERIENCE = "PUT_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const GET_POSTS = "GET_POSTS";
export const POST_POSTS = "POST_POSTS";
export const DELETE_POSTS = "DELETE_POSTS";
export const REFRESH = "REFRESH";
export const ADD_LIKED = "LIKED";
export const REMOVE_LIKED = "REMOVE_LIKED";
export const POST_PROFILE_PIC="POST_PROFILE_PIC"
export const POST_EXPERIENCE_PIC="POST_EXPERIENCE_PIC"
export const POST_POST_PICTURE="POST_POST_PICTURE"
export const USER_LOADING="USER_LOADING"
export const USER_ERROR="USER_ERROR"
export const addLiked = (e) => {
  console.log("added", e);
  return {
    type: ADD_LIKED,
    payload: e,
  };
};

export const removeLiked = (e) => {
  return {
    type: REMOVE_LIKED,
    payload: e,
  };
};
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";

export const fetchDataAsync = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );
      if (response.ok) {

        let data = await response.json();
        dispatch({
          type:USER_ERROR,
          payload:false
        })
        dispatch({
          type:USER_LOADING,
          payload:true
        })
        dispatch({
          type: GET_USER,
          payload: data,
        });
        dispatch({
          type:USER_LOADING,
          payload:false
        })
      } else {
        console.log("Error fetching results");
        dispatch({
          type:USER_LOADING,
          payload:false
        })
        dispatch({
          type:USER_ERROR,
          payload:true
        })
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type:USER_LOADING,
        payload:false
      })
      dispatch({
        type:USER_ERROR,
        payload:true
      })
    }
  };
};

export const updateDataAsync = () => {
  return async (body, dispatch) => {
    try {
      let res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllExperienceAsync = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/63f32cba8381fc0013fffacb/experiences`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_ALL_EXPERIENCE,
          payload: data,
        });
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSingleExperienceAsync = (experienceId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/63f32cba8381fc0013fffacb/experiences/${experienceId}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_SINGLE_EXPERIENCE,
          payload: data,
        });
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/*
experience has to look like this
{		
    "role": "CTO",
    "company": "New School 123",
    "startDate": "2019-06-16",
    "endDate": "2019-06-16", 									
    "description": "Doing stuff",
    "area": "Berlin",
    "username": "admin"
}
*/

export const postExperienceAsync = (experience) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/63f32cba8381fc0013fffacb/experiences/`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );
      if (response.ok) {
        dispatch({
          type: POST_EXPERIENCE,
          payload: experience,
        });
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/*
change has to look like this
{		
    "role": "CTO",
    "company": "New School 123",
    "startDate": "2019-06-16",
    "endDate": "2019-06-16", 									
    "description": "Doing stuff",
    "area": "Berlin",
    "username": "admin"
}
*/

export const putExperienceAsync = (change, experienceId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/63f32cba8381fc0013fffacb/experiences/${experienceId}`,
        {
          method: "PUT",
          body: JSON.stringify(change),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );
      if (response.ok) {
        getAllExperienceAsync();
        /* dispatch({
          type: PUT_EXPERIENCE,
          payload: change,
        }); */
        dispatch({
          type: UPDATE_EXPERIENCE,
          payload: +1,
        });
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteExperienceAsync = (experienceId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/63f32cba8381fc0013fffacb/experiences/${experienceId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );
      if (response.ok) {
        dispatch({
          type: DELETE_EXPERIENCE,
          payload: experienceId,
        });

        dispatch({
          type: UPDATE_EXPERIENCE,
          payload: +1,
        });
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchPostsAsync = () => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_POSTS,
          payload: data
            .reverse()
            .slice(0, 20)
            .map((e) => {
              return e;
            }),
        });
      } else {
        console.log("error baby");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putPost = (e) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          body: JSON.stringify(e),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );
      if (res.ok) {
        dispatch({
          type: REFRESH,
          payload: +1,
        });
        dispatch({
          type: POST_POSTS,
          payload: e,
        });
        dispatch({
          type: REFRESH,
          payload: +1,
        });
      } else {
        console.log("error posting");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePost = (e) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/` + e,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );

      if (res.ok) {
        dispatch({
          type: REFRESH,
          payload: +1,
        });
      } else {
        console.log("error deleting");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editPost = (e, id) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + id,
        {
          method: "PUT",
          body: JSON.stringify(e),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
          },
        }
      );
      if (res.ok) {
        dispatch({
          type: REFRESH,
          payload: +1,
        });
      } else {
        console.log("error put");
      }
    } catch (error) {
      console.log(error);
    }
  };
};





















export const userUpdate=(body)=>{
 return async(dispatch)=>{
  try{
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/`,
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
        },
      }
     
    );
    if(res.ok){
      dispatch({
        type:USER_LOADING,
        payload:true
      })
      dispatch({
        type: UPDATE_USER,
        payload: body,
      });
      dispatch({
        type:USER_LOADING,
        payload:false
      })
    console.log("succes")
    }
  }catch(err){
    console.log(err)
  }
 }
}





export const postProfilePicture=(id,form)=>{
  return async(dispatch)=>{
    let Url =
    "https://striveschool-api.herokuapp.com/api/profile/" + id + "/picture"
    
   try{
    let res= await fetch(Url, {
      method: "POST",
      body: form,

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
      },
    })
    console.log(Url);
    if (res.ok) {
      
      dispatch({
        type: POST_PROFILE_PIC,
        payload: form,
      });
   

    }else{
      console.log("nope")
    }
   }catch(err){
    console.log(err)
   }
  }

}


export const postExperiencePicture=(id,eid,form)=>{
 return async(dispatch)=>{
  let Url =
  "https://striveschool-api.herokuapp.com/api/profile/"+id+"/experiences/"+eid+"/picture"
  try{
    const res = await fetch(Url, {
      method: "POST",
      body: form,

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
      },
    });
    if (res.ok) {
      console.log("succes");
      dispatch({
        type: POST_EXPERIENCE_PIC,
        payload: form,
      });
    }
  }catch(err){
    console.log(err)
  }
 }
}

export const postPostPicture=(id,form)=>{
 return async(dispatch)=>{
  let Url =
  "https://striveschool-api.herokuapp.com/api/posts/"+id;
   
   
  
  try {
    const res = await fetch(Url, {
      method: "POST",
      body: form,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
      },
    })
    if (res.ok) {
      console.log("succes");
      dispatch({
        type: POST_POST_PICTURE,
        payload: form,
      });
    }
   }catch(err){
    console.log(err)
   }
  
  }}

