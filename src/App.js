import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import VideoDetail from './components/video-detail'
import VideoList from './components/video-list'
import styles from './App.css'
import YTSearch from 'youtube-api-search'

const API_KEY = "AIzaSyAmKhrf4poUt3yMTqvYwcPGjMC3wggxxi4"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null,
      term: '',
    }
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos() {
    YTSearch({key: API_KEY, term: this.state.term}, function(videos) {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      })
    }.bind(this))
  }

  handleSearchTermChange(e) {
    this.setState({
      term: e.target.value,
    })
    this.fetchVideos()
  }

  handleSelectedVideoChange(video) {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    return (
      <div className={styles.searchBarContainer} style={{padding: '10px'}}>
        <SearchBar
          handleSearchTermChange={this.handleSearchTermChange.bind(this)}
          term={this.props.term}
          />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          selectedVideo={this.state.selectedVideo}
          onClickVideo={this.handleSelectedVideoChange.bind(this)}
          />
      </div>
    );
  }
}
