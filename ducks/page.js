const LOAD = "page/LOAD";

const initialState = {
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
