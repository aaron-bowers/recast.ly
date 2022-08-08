// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import { API_KEY, YOUTUBE_API_KEY } from '/src/config/config.js';

ReactDOM.render(
  <App
    API_KEY={YOUTUBE_API_KEY}
    searchYouTube={searchYouTube}
  />,
  document.getElementById('app')
);