import React from "react";
import Searchbar from "./Searchbar";

class MultipleSearch extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="seven wide column">
            <Searchbar
              onSearchSubmit={this.props.onSearchSubmit}
              searchType="title"
            />
          </div>
          <div className="four wide column">
            <Searchbar
              onSearchSubmit={this.props.onSearchSubmit}
              searchType="author"
            />
          </div>
          <div className="four wide column">
            <Searchbar
              onSearchSubmit={this.props.onSearchSubmit}
              searchType="subject"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleSearch;
