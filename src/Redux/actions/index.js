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
export const ADD_LIKED = "LIKED";
export const REMOVE_LIKED = "REMOVE_LIKED";
export const GET_ERROR_POST = "GET_ERROR_POST";
export const GET_LOADING_POST = "GET_LOADING_POST";

export const addLiked = (e) => {
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
          type: GET_USER,
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
        dispatch({
          type: GET_LOADING_POST,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_LOADING_POST,
          payload: false,
        });
        dispatch({
          type: GET_ERROR_POST,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_LOADING_POST,
        payload: false,
      });
      dispatch({
        type: GET_ERROR_POST,
        payload: true,
      });
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
          type: POST_POSTS,
          payload: e,
        });
        dispatch({
          type: GET_LOADING_POST,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_LOADING_POST,
          payload: false,
        });
        dispatch({
          type: GET_ERROR_POST,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_LOADING_POST,
        payload: false,
      });
      dispatch({
        type: GET_ERROR_POST,
        payload: true,
      });
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
          type: GET_LOADING_POST,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_LOADING_POST,
          payload: false,
        });
        dispatch({
          type: GET_ERROR_POST,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_LOADING_POST,
        payload: false,
      });
      dispatch({
        type: GET_ERROR_POST,
        payload: true,
      });
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
          type: GET_LOADING_POST,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_LOADING_POST,
          payload: false,
        });
        dispatch({
          type: GET_ERROR_POST,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_LOADING_POST,
        payload: false,
      });
      dispatch({
        type: GET_ERROR_POST,
        payload: true,
      });
    }
  };
};

export const fetchUsersDataAsync = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmRkODgzODFmYzAwMTNmZmZhY2UiLCJpYXQiOjE2NzcxNjE1NjAsImV4cCI6MTY3ODM3MTE2MH0.fAmFttFOD-EuZLdMX1wMyGaxtc-aJrXXB5Wp4fJ9Xfg",
          },
        }
      );
      if (response.ok) {
        let users = await response.json();
        dispatch({
          type: GET_ALL_USERS,
          payload: users,
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
