import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.css';
import Minus from '../images/minus.svg';
import Play from '../images/play.svg';
import Plus from '../images/plus.svg';


class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    }
  }

  handleActiveEpisodeToggle = (activeIndex) => {
    this.setState({
      activeIndex
    });
  }

  renderEpisodeInfo = () => {
    const { props, state } = this;
    const { episodes } = props;
    const { activeIndex } = state;

    return episodes.map((episode, i) => {
      let durationMinutes = Math.floor(episode.durationSeconds / 60);
      let id = i === activeIndex ?
        "active" : 
        undefined

      return (
        <div
          key={episode.title} 
          className="text_flex"
          id={id} 
          onClick={this.handleActiveEpisodeToggle.bind(null, i)}
        >
          <p className="text_left"> {episode.title} </p>
          <p className="text_right"> {durationMinutes} mins </p>
        </div>
      );
    });
  }

  render() {
    const { props, state } = this;
    const { episodes } = props;
    const { activeIndex } = state;

    let tileArtSize = window.innerWidth < 1070 ? 'tileArtLarge' : 'tileArtMedium';

    return (
        <div className="flex">
            <section className="flex_left">
              <div className="active_episode_image_container">
                <p className="active_episode_header"> 
                  {episodes[activeIndex].title} 
                </p>
                <img 
                  className="play icon"
                  src={Play}
                />
                <img 
                  className="plus icon"
                  src={Plus}
                />
                <img 
                  className="active_episode_image"
                  src={episodes[activeIndex][tileArtSize]}
                /> 
              </div>            
              <div className="active_episode_teaser">
                {episodes[activeIndex].teaser}
              </div>
            </section>
            <section className="flex_right">
              {this.renderEpisodeInfo()}
            </section>
        </div>
    )
  }
}

export default Section;