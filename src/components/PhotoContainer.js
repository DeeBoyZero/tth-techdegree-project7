import Photo from "./Photo";
import NoSearchResult from "./NoSearchResult";

const PhotoContainer = ({ data, title }) => {
  let photoGallery;

  if (data && data.length > 0) {
    photoGallery = data.map((photo) => (
      <Photo
        key={photo.id}
        url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      />
    ));
  } else {
    photoGallery = <NoSearchResult />;
  }

  return (
    <div className="photo-container">    
      {data.length > 0 && <h2>{title} Photos</h2>}
      <ul>{photoGallery}</ul>
    </div>
  );
};

export default PhotoContainer;
