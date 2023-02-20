export const GET_USER = "GET_USER";

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
