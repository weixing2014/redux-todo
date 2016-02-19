import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import VideoDetail from './components/video-detail'
import VideoList from './components/video-list'
import styles from './App.css'

const API_KEY = "AIzaSyAmKhrf4poUt3yMTqvYwcPGjMC3wggxxi4"

export default class App extends Component {
  render() {
    return (
      <div className={styles.searchBarContainer} style={{padding: '10px'}}>
        <SearchBar />
      </div>
    );
  }
}
