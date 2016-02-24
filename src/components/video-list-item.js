import React, { Component } from 'react'

export default class VideoListItem extends Component {

  render() {
    const { video } = this.props
    const imageUrl = video.snippet.thumbnails.default.url
    const title = video.snippet.title

    return (
      <li className="list-group-item">
        <div className="media">
          <div className="media-left">
            <img className="media-object" src={imageUrl}/>
          </div>
          <div className="media-body">
            <div className="media-heading" >{title}</div>
          </div>
        </div>
      </li>
    )
  }
}
