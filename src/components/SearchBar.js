import React from "react";

export default class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className={"searchBar ui segment"}>
        <form onSubmit={this.onFormSubmit} className={"ui form"}>
          <div className={"field"}>
            <label>Video Search</label>
            <input
              type={"text"}
              value={searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
