import React, { Component } from "react";
// import Wrapper from "./component/Wrapper/index";
import image from "./image.json";
import ImageCard from "./component/ImageCard/";
import Header from "./component/Header";
import Wrapper from "./component/Wrapper/index.js";

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
    clicked: [9]
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

  picked = imgId => {
    let clickedImage = this.state.clicked;
    console.log(clickedImage)
    console.log(imgId)
    // clickedImage.push(this.image.id);
    console.log(this.state.clicked)
  };

  allFunctions = () => {
    this.handleIncrement();
    const shuffleImage = shuffleArray(image);
    // this.picked();
  };

  render() {
    return (
      <div>
        <Header Score={this.state.score} topScore={this.state.topScore} />

        <Wrapper>
          <div onClick={this.allFunctions}>
            {shuffleImage.map(image => (
              <ImageCard key={image.id} url={image.url} onClick={() => this.picked()} />
            ))}
          </div>
        </Wrapper>
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

{
  /* <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[0].id}
            url={this.state.image[0].url}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[1].id}
            url={this.state.image[1].url}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[2].id}
            url={this.state.image[2].url}
            picked={this.state.image[2].picked}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[4].id}
            url={this.state.image[4].url}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[5].id}
            url={this.state.image[5].url}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[6].id}
            url={this.state.image[6].url}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[7].id}
            url={this.state.image[7].url}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[8].id}
            url={this.state.image[8].url}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[9].id}
            url={this.state.image[9].url}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[10].id}
            url={this.state.image[10].url}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[11].id}
            url={this.state.image[11].url}
            onChange={this.picked}
          />
        </button>
        <button onClick={this.allFunctions}>
          <ImageCard
            name={this.state.image[3].id}
            url={this.state.image[3].url}
            onChange={this.picked}
          />
        </button> */
}
