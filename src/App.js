import React, {Component} from 'react';
import styles from "./styles.module.css";
import logo from "./assets/logo.png"
import Slider from "./sliderCeleb";
import Badshah from "./assets/celeb/Badshah.png"
import Deepika from "./assets/celeb/Deepika.png"
import DiljitSingh from "./assets/celeb/Diljit-Singh.png"
import Ramdev from "./assets/celeb/Ramdev.png"
import RanveerSingh from "./assets/celeb/ranveer-singh.png"
import SRK from "./assets/celeb/SRK.png"
import Sunny from "./assets/celeb/Sunny.png"
import Virat from "./assets/celeb/virat.png"

class App extends Component {
  state = {
    images: [
      {
        image: DiljitSingh,
        name: "Diljit Singh",
        match: null,
        clicked: null
      },
      {
        image: Ramdev,
        name: "Ramdev",
        match: null,
        clicked: null
      },
      {
        image: RanveerSingh,
        name: "Ranveer Singh",
        match: null,
        clicked: null
      },
      {
        image: SRK,
        name: "Sharukh Khan",
        match: null,
        clicked: null
      },
      {
        image: Sunny,
        name: "Sunny Deol",
        match: null,
        clicked: null
      },
      {
        image: Virat,
        name: "Virat",
        match: null,
        clicked: null
      },
      {
        image: Badshah,
        name: "Badshah",
        match: null,
        clicked: null
      },
      {
        image: Deepika,
        name: "Deepika",
        match: null,
        clicked: null
      },
    ],
    currentIndex: 0,
    translateValue: 0
  };
  handleSelectedCelebrity = (celeb) => {

  }

  render() {
    return (
        <div className={styles.body}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src={logo} alt="logo"/>
            </div>
            <div>Presents</div>
            <div className={styles.heading}>#CelebValentine</div>
            <div className={styles.subheading}>
              <p align="center">Chose the perfect smartphone gift</p>
              <p align="center">for your favourite celebrity</p>
            </div>
            <Slider handleSelectedCelebrity={(celeb) => this.handleSelectedCelebrity(celeb)}
                    images={this.state.images}/>

          </div>

        </div>
    );
  }
}

export default App;
