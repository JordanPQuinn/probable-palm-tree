
const initialState = {
  processing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VIDEO_REQUEST':
      return {
        data: null,
      }
    case 'GET_SERIES_REQUEST':
      return {
        processing: true,
      }
    case 'GET_SERIES_SUCCESS':
      return {
        processing: false,
        data: action.payload.data,
        error: null,
      }
    case 'GET_SERIES_FAILURE':
      return {
        processing: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}
