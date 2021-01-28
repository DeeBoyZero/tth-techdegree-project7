import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import PhotoContainer from "./PhotoContainer";

class FetchData extends Component {
  // Setting initial state for the component
  state = {
    photos: [],
    isLoading: true,
    query: this.props.match.params.query,
  };

  // After component mounted, fetch data
  componentDidMount() {
    this.fetchPhotos(this.props.match.params.query);
  }

  // On component update, setup the query comparing previous state query and change it if necessary
  componentDidUpdate(prevProps, prevState) {
    let query = this.props.match.params.query;
    if (prevState.query !== query) {
      this.fetchPhotos(query);
      this.setState({
        query: query,
      });
    }
  }

  // Fetch Functions to fetch photos from api and setting photos state
  fetchPhotos = async (query) => {
    const apiKey = this.props.apiKey;

    await axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&page=1&per_page=24&safe_search=1`
      )
      .then((response) => {
        const fetchedPhotos = response.data.photos.photo;
        this.setState({
          photos: fetchedPhotos,
          isLoading: false,
        });
      })
      .catch((error) => {
        // handle error
        console.log("Something went wrong fetching the data.", error);
      });
  };

  // Render function that will render a loading indicator if data is being fetch. Otherwise it loads the PhotoContainer Component
  render() {
    if (this.state.isLoading) {
      return (
        <div className="photo-container">
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <>
        <PhotoContainer data={this.state.photos} title={this.state.query} />
      </>
    );
  }
}

export default withRouter(FetchData);
