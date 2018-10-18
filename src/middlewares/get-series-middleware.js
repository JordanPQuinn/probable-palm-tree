import axios from 'axios'
import { getSeriesSuccess, getSeriesFailure } from '../actions/series-actions'

async function getSeriesRequestHandler (store, action) {
  // get data
  // dispatch success or failure action
  try {
    const request = await axios.get('http://localhost:9001/sample-series-videos')
    store.dispatch(getSeriesSuccess(request.data))
  } catch (error) {
    const message = error && error.response && error.response.data
      ? error.response.data.message
      : 'generic error message'
    store.dispatch(getSeriesFailure(message))
  }
}

export default store => next => action => {
  const { type } = action
  switch (type) {
    case 'GET_SERIES_REQUEST':
      getSeriesRequestHandler(store, action)
      break
    default:
      break
  }
  next(action)
}
