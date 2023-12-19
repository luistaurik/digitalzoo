import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import IconHeart from './IconHeart';

const Gallery = () => {
  const { images, changeLikedStatus } = useContext(MyContext);

  return (
    <div className="">
      <h1 className="text-success title">Meet the animals</h1>
      <div className="gallery">
        {images.map((e) => {
          return (
            <div key={e.id} className="image-container">
              <a target="_blank" href={e.url}>
                <img src={e.src.large2x} alt={e.alt} />
              </a>
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
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
