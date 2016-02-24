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
      term: '',
    }
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos() {
    YTSearch({key: API_KEY, term: this.state.term}, function(videos) {
      this.setState({
        videos
      })
    }.bind(this))
  }

  handleSearchTermChange(e) {
    this.setState({
      term: e.target.value,
    })
    this.fetchVideos()
  }

  render() {
    return (
      <div className={styles.searchBarContainer} style={{padding: '10px'}}>
        <SearchBar handleSearchTermChange={this.handleSearchTermChange.bind(this)} term={this.props.term}/>
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
