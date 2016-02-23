import React, { Component } from 'react'

export default class VideoListItem extends Component {

  render() {
    const { video } = this.props;

    return (
      <li>{video}</li>
    )
  }
}
