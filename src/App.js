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
    }

    YTSearch({key: API_KEY, term: 'Yao Ming'}, function(videos) {
      this.setState({
        videos
      })
    }.bind(this))
  }

  render() {
    return (
      <div className={styles.searchBarContainer} style={{padding: '10px'}}>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
