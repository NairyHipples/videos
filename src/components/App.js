import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit('da');
  }

  onFormSubmit = async searchTerm => {
    const res = await youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });

    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className={"ui container"}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className={"ui grid"}>
          <div className={"ui row"}>
            <div className={"ten wide column"}>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className={"six wide column"}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
