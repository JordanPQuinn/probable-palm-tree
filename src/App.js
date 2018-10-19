import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSeriesRequest } from './actions/series-actions'
import Section from './section/Section';
import './App.css';

class App extends Component {
  componentDidMount () {
    const { props } = this
    const {
      getSeriesRequest,
    } = props
    getSeriesRequest()
  }

  render() {
    const { props } = this
    const { series = {} } = props
    const episodes = series && series.data
    const seriesProcessing = series && series.processing
    const seriesError = series && series.error

    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__main-heading">{`Hello!  This is the <App /> component!  Please render your section component in .app__body below`}</h1>
        </header>
        <div className="app__body">
          { episodes && !seriesError ? 
            <Section episodes={episodes}/>
            : undefined
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    series: state.series,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSeriesRequest: (processing) => dispatch(getSeriesRequest(processing)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
