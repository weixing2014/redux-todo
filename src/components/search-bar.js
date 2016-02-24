import React, { Component } from 'react'
import { Input } from 'react-bootstrap'

export default class SearchBar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Input
        type="text"
        placeholder="Search YouTube…"
        value={ this.props.term }
        ref="searchBar"
        onChange={ this.props.handleSearchTermChange }
        standalone
        />
    );
  }
}
