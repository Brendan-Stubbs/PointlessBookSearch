import React from "react";

class Searchbar extends React.Component {
  state = { title_term: "" };

  onInputChange = (event) => {
    this.setState({ title_term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.title_term);
  };

  render() {
    return (
      <div className=" ui inverted segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui left icon input">
              <input
                type="text"
                placeholder="Search by title..."
                className="focused"
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
