import "./App.css";
import { useEffect } from "react";
import { Sound } from "./sound";
import Pad from "./Pad";

function App() {
  useEffect(() => {
    document.addEventListener("keydown", listenKeyDown);
  }, []);

  const handleClick = (e) => {
    let id = e.target.id;
    let audioId = e.target.innerText;
    playSound(audioId, id);
  };

  const listenKeyDown = (e) => {
    console.log(e.key, e.keyCode);
    let keyPress = "";
    let buttonId = "";
    switch (e.keyCode) {
      case 81:
        keyPress = "Q";
        buttonId = "Heater 1";
        break;
      case 87:
        keyPress = "W";
        buttonId = "Heater 2";
        break;
      case 69:
        keyPress = "E";
        buttonId = "Heater 3";
        break;
      case 65:
        keyPress = "A";
        buttonId = "Heater 4";
        break;
      case 83:
        keyPress = "S";
        buttonId = "Clap";
        break;
      case 68:
        keyPress = "D";
        buttonId = "Open-HH";
        break;
      case 90:
        keyPress = "Z";
        buttonId = "Kick-n'-Hat";
        break;
      case 88:
        keyPress = "X";
        buttonId = "Kick";
        break;
      case 67:
        keyPress = "C";
        buttonId = "Closed-HH";
        break;
    }

    if (keyPress !== "") {
      playSound(keyPress, buttonId);
    }
  };

  const playSound = (keyPress, buttonId) => {
    const audio = document.getElementById(keyPress);
    audio.play();
    document.getElementById("display").innerHTML = buttonId;
    const playButton = document.getElementById(buttonId);
    playButton.focus();
  };

  return (
    <div id="drum-machine">
      <div id="center">
        <p id="display" />
        <div className="row">
          <div className="col-1">
            <Pad
              buttonId={Sound.Q.buttonId}
              handleClick={handleClick}
              id={Sound.Q.id}
              src={Sound.Q.src}
            />
          </div>
          <div className="col-1">
            <Pad
              buttonId={Sound.W.buttonId}
              handleClick={handleClick}
              id={Sound.W.id}
              src={Sound.W.src}
            />
          </div>
          <div className="col-1">
            <Pad
              buttonId={Sound.E.buttonId}
              handleClick={handleClick}
              id={Sound.E.id}
              src={Sound.E.src}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <Pad
              buttonId={Sound.A.buttonId}
              handleClick={handleClick}
              id={Sound.A.id}
              src={Sound.A.src}
            />
          </div>
          <div className="col-1">
            <Pad
              buttonId={Sound.S.buttonId}
              handleClick={handleClick}
              id={Sound.S.id}
              src={Sound.S.src}
            />
          </div>
          <div className="col-1">
            <Pad
              buttonId={Sound.D.buttonId}
              handleClick={handleClick}
              id={Sound.D.id}
              src={Sound.D.src}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <Pad
              buttonId={Sound.Z.buttonId}
              handleClick={handleClick}
              id={Sound.Z.id}
              src={Sound.Z.src}
            />
          </div>
          <div className="col-1">
            <Pad
              buttonId={Sound.X.buttonId}
              handleClick={handleClick}
              id={Sound.X.id}
              src={Sound.X.src}
            />
          </div>
          <div className="col-1">
            <Pad
              buttonId={Sound.C.buttonId}
              handleClick={handleClick}
              id={Sound.C.id}
              src={Sound.C.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
