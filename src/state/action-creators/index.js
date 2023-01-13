// action creator function to dispatch an action for switching to dark/light mode
export const updateDarkMode = (modeVal) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_MODE",
      payload: modeVal,
    });
  };
};