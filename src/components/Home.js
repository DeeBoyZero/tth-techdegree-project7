import flickr from '../flickr.png'

const Home = () => {
  return (
    <div className="home">
        <img src={flickr} alt="flickr logo" className="home-logo"/>
        <h2>A Flickr Search Photos Api App</h2>
        <h3>Please make a selection above or enter a tag to search.</h3>
    </div>
  )
}

export default Home
