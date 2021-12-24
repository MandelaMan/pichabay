const Appreducer = (state, action) => {
  // console.log("state ", state);
  // console.log("action", action.type);
  // console.log("payload", action.payload);

  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_SEARCHED_PHOTOGRAPHERS":
      return {
        ...state,
        searched_photographers: action.payload,
      };
    case "GET_HOME_PHOTOGRAPHERS":
      return {
        ...state,
        home_photographers: action.payload,
      };
    case "SET_LOADING_STATUS":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "LOGIN_STATUS":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case "SET_USER_INFO":
      return {
        ...state,
        user_info: action.payload,
      };
    default:
      return state;
  }
};

export default Appreducer;
