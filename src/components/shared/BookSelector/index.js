import React from 'react';
import da from '../../../img/da-600.jpg'

const BookSelector = () => {
  const images = [da]
  const generateImageList = () => images.map((el, i)=>(
    <div key={i}>
      <img 
        src={el}
        style={{maxWidth: '100%', height: 'auto', width: 'auto\\9'}}
      />
    </div>
  ));
  return (
    <div>
      {generateImageList()}
    </div>
  )
}

export default BookSelector;