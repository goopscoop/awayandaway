import React from 'react';
import BookSelector from './BookSelector';
import './style.css';

class Home extends React.Component {

  render(){
    return (
      <div
        className="home-bg"
        style={{
          minHeight: '100%'
        }}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 content-light">
              <h1
                style={{
                  padding: '5rem 0 4rem'
                }}
              >
                Away and Away
              </h1>
              <h2 className="center">-~-</h2>
              <h2
                style={{
                  padding: '2rem'
                }}
              >Home of Author S.C. Barrus</h2>
          </div>
        </div>
        <BookSelector
          images={[
            '../img/da-600.jpg',
            '../img/tht-647.jpg'
          ]}
        />

      </div>
    );
  }
}

export default Home;