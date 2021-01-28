import flickr from '../flickr.png'

const Home = () => {
  return (
    <div className="home">
        <img src={flickr} alt="" className="home-logo"/>
        <h2>A Flickr Search Photos Api App</h2>
        <h4>Please make a selection above or enter a tag to research.</h4>
    </div>
  )
}

export default Home
