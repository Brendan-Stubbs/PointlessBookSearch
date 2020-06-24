import React from "react";
import Searchbar from "./Searchbar";
import Header from "./Header";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import google_books from "./apis/google_books";

class App extends React.Component {
  state = { books: [], selectedBook: null };

  componentDidMount = () => {
    this.onSearchSubmit("Goosebumps");
  };

  onSearchSubmit = async (title_term) => {
    const response = await google_books.get("v1/volumes", {
      params: { q: title_term },
    });

    this.setState({
      books: response.data.items.slice(0, 5),
      selectedBook: response.data.items[0],
    });
  };

  onBookSelect = (book) => {
    this.setState({ selectedBook: book });
  };

  render() {
    return (
      <div className="main-app-container ui container">
        <Header />
        <Searchbar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <BookDetail book={this.state.selectedBook} />
            </div>
            <div className="six wide column">
              <BookList
                books={this.state.books}
                onBookSelect={this.onBookSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
