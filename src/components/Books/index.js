import React from 'react';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// const Books = () => {

//   const renderBookList = () => this.props.books.books.map((el, i )=>(
//     <div
//       className="media"
//       style={{
//         paddingBottom: '10px'
//       }}>
//       <div className="media-left">
//         <a href="#">
//           <img 
//             className="media-object"
//             width="150px"
//             src={el.img}
//             style={{
//               paddingLeft: '15px'
//             }}
//           />
//         </a>
//       </div>
//       <div className="media-body" style={{padding: '0 15px'}}>
//         <div className="row">
//           <h4 className="media-heading">{el.name}</h4>
//           {
//             el.quote ?
//             <div>
//               <p style={{textAlign: 'center'}}><em>"{el.quote}"</em></p>
//               <p className="pull-right">- {el.quoteBy}</p>
//             </div>
//             :
//             <p style={{textAlign: 'center'}}>{el.shortDesc}</p>
//           }
//           </div>
//         <div className="row" style={{padding: '0 15px'}}>
//           <span className="btn btn-primary btn-small pull-right">Learn More</span>
//         </div>
//       </div>
//     </div>
//   ))

//   return (
//     <div className="row">
//       <div
//         className="home-bg">
//         <ReactCSSTransitionGroup
//           transitionName="vanishIn"
//           transitionAppear={true}
//           transitionAppearTimeout={1000}
//           transitionEnterTimeout={500}>
//           <div key="1" className="col-md-8 col-md-offset-2 content">
//             <h1>
//               Books
//             </h1>
//             <NavBar currentPage="books"/>
//             <hr/>
//             <div className="row" >
//               {
//                 renderBookList()
//               }
//             </div>
//           </div>
//           <Footer/>
//         </ReactCSSTransitionGroup>
//       </div>
//     </div>
//   );
// }

// export default Books;