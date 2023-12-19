import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import IconHeart from './IconHeart';
import errorImage from "../assets/img/404.png"

const Favorites = () => {
  const { images, changeLikedStatus } = useContext(MyContext);

  const favoriteImages = images.filter(function (e) {
    return e.liked === true;
  });

  return (
    <div className='gallery'>
      <h1 className="text-success title">Check out your Zoo!</h1>
      {favoriteImages.length <= 0 ? (
        <div className="errorContainer animate__animated animate__fadeIn">
          <img src={errorImage} className="notfound" alt="error 404 page not found" />
        </div>
      ) : (
        <div className="image-container-wrapper">
          {favoriteImages.map((e, index) => (
            <div key={e.id} className="image-container">
              <a target="_blank" href={e.url}>
                <img src={e.src.large2x} alt={e.alt} />
              </a>
              <span className="photographer">
                {e.photographer !== '' ? e.photographer : <span>Unknown</span>}
              </span>
              <span className="image-description">
                {e.alt !== '' ? e.alt : <span>Untitled</span>}
              </span>
              <div className="heart-icon">
                <button
                  className="icon-button"
                  onClick={() => changeLikedStatus(e.id)}
                >
                  <IconHeart liked={e.liked} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
