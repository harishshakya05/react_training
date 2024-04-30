import React from "react";
// Function Based
// const App = () => {
//   return (
//     <div>
//      <h1> Component Reusablity</h1>
//      <Greeting/>
//      <Greeting/>
//     </div>
//   )
// }

// function Greeting(){
//   return(
//     <h3>Good Morning!!</h3>
//   )
// }

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome to React!!!</h1>
        <Greeting />
        <Greeting />
      </>
    );
  }
}

class Greeting extends React.Component {
  render() {
    return <h2>Good Morning Everyone!!</h2>;
  }
}
export default App;
