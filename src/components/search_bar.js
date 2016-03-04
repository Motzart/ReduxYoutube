import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }
  render() {
    return (
      <div>
        <br />
        <h3>Youtube Search</h3>
        <input className="form-control"
               value={this.state.term}
               onChange={e => this.onInputChange(e.target.value)} />
      </div>
      )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;