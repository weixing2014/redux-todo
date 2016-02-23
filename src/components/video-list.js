import React, { Component } from 'react'
import VideoListItem from './video-list-item.js'

export default class VideoList extends Component {
  render() {
    const { videos } = this.props
    return (
      <ul className="col-md-4 list-group">
        {
          videos.map(
            (video) => (
              <VideoListItem video={video} />
            )
          )
        }
      </ul>
    )
  }
}
