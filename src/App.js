import logo from "./logo.svg";
import "./App.css";
import Box from "./component/Box";
import { useState } from "react";
// 박스 두개
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");
  const play = (userChoice) => {
    const userRe = choice[userChoice];
    setUserSelect(userRe);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setUserResult(judgement(choice[userChoice], computerChoice));

    const result = judgement(choice[userChoice], computerChoice);

    if (result === "tie") {
      setComputerResult("tie");
    } else {
      setComputerResult(result === "Win" ? "Lose" : "Win");
    }
  };
  const judgement = (user, computer) => {
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
  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체 키값만 뽑아서 array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
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

  return (
    <div className="main-container">
      <div className="controll-container">
        <div className="main">
          {/* 플레이어 */}
          <Box title="You" item={userSelect} result={userResult} />
          {/* 컴퓨터 */}
          <Box title="Computer" item={computerSelect} result={computerResult} />
        </div>

        <div className="main-btn">
          <button className="btn" onClick={() => play("scissors")}>
            가위
          </button>
          <button className="btn" onClick={() => play("rock")}>
            바위
          </button>
          <button className="btn" onClick={() => play("paper")}>
            보
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
