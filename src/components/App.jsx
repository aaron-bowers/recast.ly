import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import searchYouTube from '/src/lib/searchYouTube.js';
import { API_KEY, YOUTUBE_API_KEY } from '/src/config/config.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
    };
    this.props.searchYouTube(options, (videos) => {
      console.log(videos);
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      });
    });
  }

  // componentDidMount() {
  //   this.getYoutubeVideos('cute kittens');
  // }

  onVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search
              handleSearchInputChange={this.getYouTubeVideos.bind(this)}
            />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer
              display={this.state.currentVideo}
            />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videoList}
              onVideoListEntryClick={this.onVideoListEntryClick.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;