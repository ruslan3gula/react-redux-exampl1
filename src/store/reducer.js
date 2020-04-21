const initialState = {
  age: 21,
  text: ""
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      newState.age++;
      break;
    case "AGE_DOWN":
      newState.age--;
      break;

    case "ADD_TEXT":
   return { ...newState, text:action.text };

    default:
      return newState;
  }
  return newState;
};

export default reducer;
