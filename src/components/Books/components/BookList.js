import React from 'react';

const BookList = ({
  books,
  setCurrentlySelected,
  openPreview,
  header
}) => {

  const renderBookList = () => books.map((el, i )=>{
    if (i < 4 ){
      return (
        <div key={i} className="col-sm-3">
          <nav className="cl-effect-9">
            <a
              href="#"
              onMouseOver={setCurrentlySelected.bind(null, i)}
              onClick={openPreview}
              data-hover="Desultory">
              <span>
                <img
                  src={el.img}
                  className={`img-responsive`}
                />
              </span>
              <span style={{textAlign: 'center'}}>{el.cta}</span>
            </a>
          </nav>
        </div>
      );
    }
  })

  return (
    <div>
      <h4 style={{textAlign: 'left'}}>{header}</h4>
      {
        renderBookList()
      }
    </div>
  );
}

export default BookList;