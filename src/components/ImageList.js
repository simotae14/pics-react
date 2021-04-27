import React from 'react';

const ImageList = (props) => {
  const images = props.images.map(image => <img alt={image.alt_description} src={image.urls.regular} />)
  return (
    <div>
      {images}
    </div>
  );
};

export default ImageList;
