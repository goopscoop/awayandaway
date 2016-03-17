import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';
import '../../../style/buttons.css';

const PreviewPanel = ({
  book,
  isPreviewEpanded,
  closePreview,
  expandPreview,
  retractPreview,
}) => {

  const displayExpandedPreview = () => {
    if (isPreviewEpanded) {
      return (
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <nav className="cl-effect-12 menu-btn">
              <a href="#" onClick={retractPreview}>
                <span
                  className="glyphicon glyphicon-menu-up close-preview"
                ></span>
              </a>
            </nav>
            <div dangerouslySetInnerHTML={(()=>({__html: book.longDesc}))()} />
          </div>
        </div>
      )
    }
  };

  const showExpandPreviewBtn = () => {
    if (!isPreviewEpanded){
      return (
        <nav className="cl-effect-12 menu-btn">
          <a href="#" onClick={expandPreview}>
            <p
              onClick={expandPreview}
              className=""
              style={{ textAlign: 'center'}}>Description</p>
            <span
              className="glyphicon glyphicon-menu-down close-preview  animated infinite pulse"
            ></span>
          </a>
        </nav>
      );
    }
  }

  return (
    <ReactCSSTransitionGroup
      transitionName="slideDown"
      transitionAppear={true}
      transitionAppearTimeout={400}
      transitionLeaveTimeout={400}
      >
      <div className={`preview-panel ${ isPreviewEpanded ? 'expanded' : 'retracted'}`}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <h2 id="book-title">
              {book.title}
            </h2>
          </div>
          <div className="col-md-1">
              <nav className="cl-effect-12">
                <a href="#" onClick={closePreview}>
                  <span
                    className="glyphicon glyphicon-remove close-preview"
                  ></span>
                </a>
              </nav>
          </div>
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
          <div className="col-xs-3 details">
            <h4>by S.C. Barrus</h4>
            <p><strong>Genres: </strong>{`${book.genre.join(', ')}.`}</p>
            <p><strong>Formats: </strong>{`${book.types.join(', ')}.`}</p>
            <p><strong>Pages: </strong>{book.pages}</p>
            <a
              target="blank"
              href={book.buyUrl} 
              style={{fontSize: '2rem'}} 
              className="btn btn-1 btn-1e">
              Buy It
            </a>
          </div>
          <div className="col-xs-6">
            <p>{book.shortDesc}&nbsp;
              <strong>
                <a href="#" onClick={expandPreview}>Learn More.</a>
              </strong>
            </p>
            <br/>
            {
              showExpandPreviewBtn()
            }
          </div>
        </div>
        {
          displayExpandedPreview()
        }
      </div>
    </ReactCSSTransitionGroup>
  );
}
export default PreviewPanel;
//