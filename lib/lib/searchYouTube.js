import { API_KEY, YOUTUBE_API_KEY } from '/src/config/config.js';
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = ({
  query,
  max = 6
}, callback) => {
  // TODO
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
    part: 'snippet',
    youtube_api_key: YOUTUBE_API_KEY,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(({
    items
  }) => {
    if (callback) {
      callback(items);
    }
  }).fail(({
    responseJSON
  }) => {
    responseJSON.error.errors.forEach(err => console.error(err));
  });
};

export default searchYouTube;