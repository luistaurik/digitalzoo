import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const MyContext = createContext({})

const URL = 'https://api.pexels.com/v1/search';
const apiKey = 'IGYlpVMeqQtvLXMQE80dUZP0DqRfhZF8hCVlAW4DiYWCrRw3A5bjeTZX';
const query = 'animal';
const numberOfImages = 16;

const ContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const getPhotosData = async () => {
    try {
      const response = await axios(`${URL}`, {
        headers: {
          Authorization: apiKey,
        },
        params: {
          query: query,
          per_page: numberOfImages,
        },
      });
      if (response.status !== 200) {
        throw new Error('Problemas obteniendo la data');
      }
      const photosData = response.data.photos;
      setImages(photosData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPhotosData();
  }, []);

  const changeLikedStatus = (id) => {
    const newImages = images.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          liked: !e.liked,
        };
      }
      return e;
    });
    setImages(newImages);
  };

  return (
    <MyContext.Provider value={{ images, setImages, changeLikedStatus }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
