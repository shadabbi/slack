export const INIT_STATE = {
  user: null,
  showSidebar: false,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SHOW_SIDEBAR":
      return {
        ...state,
        showSidebar: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
