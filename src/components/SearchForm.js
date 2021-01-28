import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {

  constructor() {
    super()
    this.state = {
      searchQuery: ''
    }
  }

  onSearchChange = e => {
    this.setState({ searchQuery: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
    this.props.history.push(`/search/${this.state.searchQuery}`);
  }
  
  render() {
    return (
      <>
        <form action="" className="search-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search..." ref={(input) => this.query = input} onChange={this.onSearchChange} />
          <button>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(SearchForm)
