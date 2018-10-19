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
    case 'ADD_TO_PLAYLIST':
      if (state && state.data) {
        let found =  state.data.find(episode => {
          return episode.title === action.payload.title
        });
        found.playlist = !found.playlist;
        let index = state.data.map(({title}) => title).indexOf(found.title);
        state.data.splice(index, 1, found);
      }
      
      return {
        processing: false,
        data: [...state.data],
        error: null
      }
    default:
      return state
  }
}
