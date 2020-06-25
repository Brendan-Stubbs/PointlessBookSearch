import React from "react";

class Searchbar extends React.Component {
  state = { title_term: "" };

  onInputChange = (event) => {
    this.setState({ title_term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const searchType = this.props.searchType;

    this.props.onSearchSubmit(this.state.title_term, searchType);
  };

  render() {
    return (
      <div className=" ui inverted segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui left icon input">
              <input
                type="text"
                placeholder={"Search by " + this.props.searchType}
                className="search-book-input"
                value={this.state.title_term}
                onChange={this.onInputChange}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
