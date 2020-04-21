const initialValue = {
  text: ""
};

const textReducer = (state = initialValue, action) => {
  // switch (action.type) {
  //   case "ADD_TEXT":
  //     return { ...state, text: action.text };
  //   default:
  //     return state;
  // }
  // return state;

  if (action.type === "ADD_TEXT") {
    return { ...state, text: action.text };
  }
};

export default textReducer;
