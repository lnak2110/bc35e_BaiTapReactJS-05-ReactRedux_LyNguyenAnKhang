const burgerState = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
};

export const burgerReducer = (state = burgerState, { type, payload }) => {
  switch (type) {
    case 'TANG_THUC_AN':
      return {
        ...state,
        burger: {
          ...state.burger,
          [payload]: state.burger[payload] + 1,
        },
      };

    case 'GIAM_THUC_AN':
      if (state.burger[payload] <= 1) {
        window.alert('Tối thiểu là 1!');
        return state;
      }
      return {
        ...state,
        burger: {
          ...state.burger,
          [payload]: state.burger[payload] - 1,
        },
      };

    default:
      return state;
  }
};
