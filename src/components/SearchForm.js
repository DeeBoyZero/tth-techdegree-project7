import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
  // Initial state
  constructor() {
    super();
    this.state = {
      searchQuery: "",
    };
  }

  // Change the state when the input field detects change
  onSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  // Function to handle the submit handler of the search form. Add the new page to the History and redirects.
  handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    this.props.history.push(`/search/${this.state.searchQuery}`);
    this.setState({
      searchQuery: ""
    });
  };

  render() {
    return (
      <>
        <form action="" className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            ref={(input) => (this.query = input)}
            onChange={this.onSearchChange}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(SearchForm);
