import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.css'

class Section extends Component {
  constructor(props) {
    super(props);

  }


  renderEpisodeInfo = () => {
    const { props } = this;
    const { episodes } = props;

    return episodes.map((episode, i) => {
      let durationMinutes = Math.floor(episode.durationSeconds / 60);
      let className = i === 0 ? "text_flex active" : "text_flex"
      return (
        <div className={className}>
          <p className="text_left"> {episode.title} </p>
          <p className="text_right"> {durationMinutes} mins </p>
        </div>
      );
    });
  }

  render() {
    const { props } = this;
    const { episodes } = props;

    return (
      <div>
        <div className="flex">
            <section className="flex_left">
              <img 
                className="episode_image" 
                src={episodes[0].tileArtMedium}
              />
              <div className="episode_teaser">
                {episodes[0].teaser}
              </div>
            </section>
            <section className="flex_right">
              {this.renderEpisodeInfo()}
            </section>
        </div>
      </div>
    )
  }
}

export default Section;