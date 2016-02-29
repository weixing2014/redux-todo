import React, { Component } from 'react'

export default class VideoListItem extends Component {

  render() {
    const { video, onClickVideo, selectedVideo } = this.props
    const imageUrl = video.snippet.thumbnails.default.url
    const title = video.snippet.title
    const isSelected = video === selectedVideo

    const styles = {
      listGroupItem: {
        cursor: "pointer",
        background: isSelected ? "grey" : "",
      }
    }

    return (
      <li className="list-group-item"
        style={styles.listGroupItem}
        onClick={onClickVideo}>
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
