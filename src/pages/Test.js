import React, { useEffect, useReducer } from "react";

const Test = () => {
  const initState = {
    loading: false,
    data: [],
    error: null,
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case "GET_USER_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_USER_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.data,
        };
      case "GET_USER_ERROR":
        return {
          ...state,
          data: [],
          error: action.data,
        };
    }
  };

  const [user, userDispatch] = useReducer(userReducer, initState);

  const getUsers = () => {
    userDispatch({
      type: "GET_USER_REQUEST",
    });

    setTimeout(() => {
      fetch("https://reqres.in/api/users?page=2")
        .then((res) => res.json())
        .then((res) => {
          userDispatch({
            type: "GET_USER_SUCCESS",
            data: res,
          });
        })
        .catch((err) => {
          userDispatch({
            type: "GET_USER_ERROR",
            data: err,
          });
        });
    }, 2000);
  };

  return (
    <div>
      {user.loading ? <p>Loading..</p> : <p>{JSON.stringify(user.data)}</p>}

      <button onClick={getUsers}>GET USER</button>
    </div>
  );
};

export default Test;
