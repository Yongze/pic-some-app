import React, { createContext, useState, useEffect } from "react";
const Context = createContext();

const TheContext = props => {
  const [allPhotos, setAllPhotos] = useState([]);
  const toggleFavorite = id => {
    const updatedArr = allPhotos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  };

  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = img => {
    const list = [...cartItems, img];
    setCartItems(list);
  };
  const removeItemFromCart = id => {
    const list = cartItems.filter(item => item.id !== id);
    setCartItems(list);
  };

  function emptyCart() {
    setCartItems([]);
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then(response => response.json())
      .then(data => setAllPhotos(data));
  }, []);

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        emptyCart
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { TheContext, Context };
