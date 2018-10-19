export const addToPlayList = (episode) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_TO_PLAYLIST',
      payload: 
        episode
    });
  }
}

export const getSeriesRequest = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_SERIES_REQUEST',
    })
  }
}

export const getSeriesSuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_SERIES_SUCCESS',
      payload: {
        data,
      }
    })
  }
}

export const getSeriesFailure = (error) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_SERIES_FAILURE',
      payload: {
        error,
      }
    })
  }
}
