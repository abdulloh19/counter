// import React, { Component } from "react";
// import "./counter.css";
// import { prettyFormat } from "@testing-library/react";

// class Counter extends React.Component {

//   state = { counters: [] };

//   addCounter = () => {
//     const a = this.state.counters;
//     a.push(0);
//     this.setState({ counters: a });
//   };

//   counter = (index) => {
//     let b = this.state.counters;
//     b[index] = b[index] + 1;

//     this.setState({ counters: b });
//   };
//   decrement = (index) => {
//     let b = this.state.counters;
//     b[index] = b[index] - 1;

//     this.setState({ counters: b });
//   };

//   restart = () => {
//     this.setState({ counters: 0 });
//   };

//   render() {
//     return (
//       <div className="wr">
//         <button className="btn-add" onClick={this.addCounter}>
//           Add Counter
//         </button>
//         {this.state.counters.map(
//           (item, index) => (
//             <div className="counters">
//               <button onClick={() => this.counter(index)} className="btn">
//                 +
//               </button>
//               {item}
//               <button onClick={() => this.decrement(index)} className="btn">
//                 -
//               </button>
//             </div>
//           )
//         )}
//       </div>
//     );
//   }
// }

// export default Counter;
