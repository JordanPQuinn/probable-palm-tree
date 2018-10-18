const axios = require('axios')
const express = require('express')
const app = express()
const port = 9001

/**
 * return section episodes with only required fields
 * @param {array} seriesEpisodes array of series episodes
 */
const _transformSeriesEpisodes = (seriesEpisodes) => {
  // Use only the first 5 episodes of the series
  const data = seriesEpisodes.splice(0, 5)
  return data.map((episode) => {
    return {
      tileArtLarge: episode.keyart16x9NoText.large,
      tileArtMedium: episode.keyart16x9NoText.medium,
      tileArtSmall: episode.keyart16x9NoText.small,
      title: episode.title,
      seasonNum: episode.season,
      episodeNum: episode.episode,
      durationSeconds: episode.feature.duration,
      teaser: episode.teaser,
      playlist: false,
      /**
       * BOUNTY:
       * - Hey, good on you for being curious :)
       * - Currently, we are defaulting the playlist property to false for all episodes
       * - Instead, populate this property with random true/false so our starting data and UI will be a little more interesting
       */
    }
  })
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/sample-series-videos', async (req, res, next) => {
  try {
    // TODO: don't use TRY CATCH here,use .then().catch()
    const node = await axios.get('https://brooklyn.gaia.com/v2/videos/series/179166/season/1')
    const response = _transformSeriesEpisodes(node.data.videos)
    res.send(response)
  } catch (error) {
    const status = error && error.response && error.response.status
    const message = error && error.response && error.response.data && error.response.data.message
    res.status(status).send({
      message,
    })
    next(error)
  }
})

app.listen(port, () => console.log(`Congrats, the server is running.  Serving from port: ${port}`))
