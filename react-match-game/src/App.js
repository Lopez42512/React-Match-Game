import React, { Component } from "react";
// import Wrapper from "./component/Wrapper/index";
import image from "./image.json";
import ImageCard from "./component/ImageCard/";
import Header from "./component/Header";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const shuffleImage = shuffleArray(image);

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    image: image
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    if (this.state.score >= this.state.topScore) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ topScore: this.state.topScore + 1 });
    } else {
      this.setState({ score: this.state.score + 1 });
    }
  };

  picked = event => {
    const { name, value } = event.target;

    console.log(name, value)
  };

  allFunctions = () => {
    this.handleIncrement();
    const shuffleImage = shuffleArray(image);
    // this.picked()
  };

  render() {
    return (
      <div>
        <Header Score={this.state.score} topScore={this.state.topScore} />

        <div onClick={this.allFunctions} >
          {shuffleImage.map(image => (
            <ImageCard onClick={this.allFunctions} name={this.state.image.id} value={console.log("hello")} key={image.id} url={image.url} onChange={this.picked} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

// state = {
//     image
//   };

//   hello = event => {
//     event.preventDefault();
//     return console.log("hello world");
//   };

//   render() {
//     const shuffleImage = shuffleArray(image);
//     return (
//       <div>
//         <Header />

//         <Wrapper>
//           {shuffleImage.map(image => (
//             <ImageCard key={image.id} url={image.url} />
//           ))}
//         </Wrapper>
//       </div>
//     );
//   }
