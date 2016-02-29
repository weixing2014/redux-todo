import React, { Component } from 'react'
import VideoListItem from './video-list-item.js'

export default class VideoList extends Component {
  render() {
    const { videos, onClickVideo, selectedVideo } = this.props
    return (
      <ul className="col-md-4 list-group">
        {
          videos.map(
            (video) => (
              <VideoListItem
                key={video.etag}
                video={video}
                selectedVideo={selectedVideo}
                onClickVideo={onClickVideo.bind(this, video)}
                />
            )
          )
        }
      </ul>
    )
  }
}
