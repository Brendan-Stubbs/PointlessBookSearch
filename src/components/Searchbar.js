import React from "react";
// import { debounce } from "lodash";

const debounce = (fn, delay) => {
  let timeoutID;
  return function (...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

class Searchbar extends React.Component {
  state = { title_term: "" };

  onInputChange = (event) => {
    this.setState({ title_term: event.target.value });
  };

  onKeyUp = debounce(() => {
    const searchType = this.getSearchType(this.props.searchType);
    this.props.onSearchSubmit(this.state.title_term, searchType);
  }, 1000);

  onFormSubmit = (event) => {
    event.preventDefault();
    const searchType = this.getSearchType(this.props.searchType);
    this.props.onSearchSubmit(this.state.title_term, searchType);
  };

  getSearchType = function (searchType) {
    if (searchType === "title") return "intitle";
    else if (searchType === "author") return "inauthor";
    else return this.props.searchType;
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
                onKeyUp={this.onKeyUp}
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
