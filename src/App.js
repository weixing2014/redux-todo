import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import VideoDetail from './components/video-detail'
import VideoList from './components/video-list'

export default class App extends Component {
  render() {
    return (
      <SearchBar />
      <VideoDetail />
      <VideoList />
    );
  }
}
