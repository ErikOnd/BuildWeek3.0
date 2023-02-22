export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const GET_ALL_EXPERIENCE = "GET_ALL_EXPERIENCE";
export const GET_SINGLE_EXPERIENCE = "GET_SINGLE_EXPERIENCE";
export const POST_EXPERIENCE = "POST_EXPERIENCE";
//export const PUT_EXPERIENCE = "PUT_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const GET_POSTS = "GET_POSTS";
export const POST_POSTS = "POST_POSTS";
export const DELETE_POSTS = "DELETE_POSTS";

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
          type: GET_USER,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
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
        alert("Error fetching results");
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
        alert("Error fetching results");
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
        alert("Error fetching results");
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
      } else {
        alert("Error fetching results");
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
      } else {
        alert("Error fetching results");
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
          payload: data,
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
        fetchPostsAsync();
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
        fetchPostsAsync();
      } else {
        console.log("error deleting");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editPost = (e) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch("", {
        method: "PUT",
        body: JSON.stringify(e),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmNiYTgzODFmYzAwMTNmZmZhY2IiLCJpYXQiOjE2NzY4ODY5NjMsImV4cCI6MTY3ODA5NjU2M30.PbYdBr9ODIeGVoHjU6hpZC9fxUvyoG7rFcUiY-sDRs4",
        },
      });
      if (res.ok) {
        fetchPostsAsync();
      } else {
        console.log("error put");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
