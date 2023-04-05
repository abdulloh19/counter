// import { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//       decrement: 1,
//     };
//   }

//   counter = () => {
//     const a = this.state.counter;
//     this.setState({ counter: a + this.state.decrement });
//     // this.setState((prevState) => ({ counter: prevState.counter + 1 }));
//   };

//   decrement = () => {
//     const b = this.state.decrement;
//     this.setState({ decrement: b + 1 });
//     // this.setState((prevState) => ({ decrement: prevState.decrement + 1 }));
//   };

//   render() {
//     // const { counter, decrement } = this.state;
//     return (
//       <div className="wrapper">
//         <p className="counter">{this.state.counter} Metr</p>
//         <button onClick={this.counter}>Yurish</button>
//         <div>  
//           <p className="counter">Qadamni kattaligi: {this.state.decrement}</p>
//           <button onClick={this.decrement}>Qadamni kengaytirish</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
