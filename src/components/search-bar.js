import React, { Component } from 'react'
import { Input } from 'react-bootstrap'

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = { query: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <Input
        type="text"
        placeholder="Search YouTube…"
        value={ this.state.query }
        ref="searchBar"
        onChange={ this.handleChange }
        standalone
        />
    );
  }

  handleChange(e) {
    this.setState({ query: e.target.value })
  }
}
