import React from 'react';

const BookSelector = ({ images }) => {
  const generateImageList = () => images.map((el, i)=>(
    <div key={i}><img src="{el}"/></div>
  ));
  console.log(images)
  return (
    <div>
      {generateImageList()}
    </div>
  )
}

export default BookSelector;