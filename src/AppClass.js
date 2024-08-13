import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
  rock: {
    name: "rock",
    img: "https://www.rocksandminerals4u.com/images/xfeldspar-250.jpg.pagespeed.ic.U7a2I5SLjM.webp",
  },
  scissors: {
    name: "scissors",
    img: "https://www.ikea.com/kr/en/images/products/manoega-scissors-stainless-steel-black__1215197_pe911911_s5.jpg?f=xl",
  },
  paper: {
    name: "paper",
    img: "https://thumb.silhouette-ac.com/t/26/2654adfd65b6ca4a8ac25a9f727d2262_w.jpeg",
  },
};

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      userResult: "",
      computerResult: "",
    };
  }

  play = (userChoice) => {
    const userRe = choice[userChoice];
    this.setState({ userSelect: userRe });

    let computerChoice = this.randomChoice();
    this.setState({ computerSelect: computerChoice });

    const result = this.judgement(choice[userChoice], computerChoice);

    this.setState({
      userResult: result,
      computerResult:
        result === "tie" ? "tie" : result === "Win" ? "Lose" : "Win",
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "Win" : "Lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "Win" : "Lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "Win" : "Lose";
    }
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체 키값만 뽑아서 array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    return (
      <div className="main-container">
        <div className="controll-container">
          <div className="main">
            {/* 플레이어 */}
            <BoxClass
              title="You"
              item={this.state.userSelect}
              result={this.state.userResult}
            />
            {/* 컴퓨터 */}
            <BoxClass
              title="Computer"
              item={this.state.computerSelect}
              result={this.state.computerResult}
            />
          </div>

          <div className="main-btn">
            <button className="btn" onClick={() => this.play("scissors")}>
              가위
            </button>
            <button className="btn" onClick={() => this.play("rock")}>
              바위
            </button>
            <button className="btn" onClick={() => this.play("paper")}>
              보
            </button>
          </div>
        </div>
      </div>
    );
  }
}
