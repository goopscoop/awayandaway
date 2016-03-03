import React from 'react';
import './style.css'

const PreviewPanel = ({book}) => {

  const formatArrToString = (arr) => arr.join(', ')

  return (
    <div className="preview-panel" style={{
      height: '550px',
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}>
      <div className="row">
        <h2 style={{
          color: 'white'
        }}>
          {book.title}
        </h2>
      </div>
      <div className="row">
        <div className="col-xs-3">
          <img 
            src={book.img}
            className="img-responsive"
            style={{
              paddingLeft: '20px'
            }}
          />
        </div>
        <div className="col-xs-6">
          <p>{`Genre:  ${book.genre.join(', ')}.`}</p>
        </div>
      </div>
    </div>
  );
}
export default PreviewPanel;