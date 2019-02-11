import React, {Component} from 'react';
import styles from "./styles.module.css";
import logo from "./assets/logo.png";
import Slider from "./sliderCeleb";
import cloneDeep from "lodash/cloneDeep"
import isEmpty from "lodash/isEmpty";
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
    celebImages: [
      {
        image: DiljitSingh,
        name: "Diljit Singh",
        match: null,
        clicked: null,
        key: 0,
        hint: "Big display to stalk Kylie Jenner’s instagram handle"
      },
      {
        image: Ramdev,
        name: "Ramdev",
        match: null,
        clicked: null,
        key: 1,
        hint: 'Swadeshi Apnao. Desh Bachao'
      },
      {
        image: RanveerSingh,
        name: "Ranveer Singh",
        match: null,
        clicked: null,
        key: 2,
        hint: "Unlimited energy. Never drains out",

      },
      {
        image: SRK,
        name: "Sharukh Khan",
        match: null,
        clicked: null,
        key: 3,
        hint: "Need to capture the wide “Shah Rukh” pose"
      },
      {
        image: Sunny,
        name: "Sunny Deol",
        match: null,
        clicked: null,
        key: 4,
        hint: " Is “Dhai Kilo ka haath” ko mazbooti pasand hai"
      },
      {
        image: Virat,
        name: "Virat",
        match: null,
        clicked: null,
        key: 5
      },
      {
        image: Badshah,
        name: "Badshah",
        match: null,
        clicked: null,
        key: 6,
        hint: "Dj wale Babu needs likes loud music"
      },
      {
        image: Deepika,
        name: "Deepika",
        match: null,
        clicked: null,
        key: 7,
        hint: "2 achhi selfies ki keemat tum kya jaano, Ramesh babu"
      },
    ],
    selectedCeleb: {}
  };
  handleSelectedCelebrity = (celeb, i) => {
    let updatedStateImages = cloneDeep(this.state.celebImages);
    updatedStateImages.forEach(item => {
      if (item.clicked) {
        item.clicked = null
      }
    });
    let updatedSelectedCeleb = updatedStateImages.filter(item => item.key === i);
    console.log(updatedSelectedCeleb, celeb, i);
    let updatedSelectedCelebObj = {};
    updatedSelectedCeleb.forEach(item => {
      updatedSelectedCelebObj.image = item.image;
      updatedSelectedCelebObj.clicked = item.key === i ? true : null;
      updatedSelectedCelebObj.match = null;
      updatedSelectedCelebObj.name = item.name;
      updatedSelectedCelebObj.key = celeb.key;
      updatedSelectedCelebObj.hint = item.hint
    });

    updatedStateImages[i] = updatedSelectedCelebObj;
    this.setState({selectedCeleb: updatedSelectedCelebObj})
    this.setState({celebImages: updatedStateImages})

  }

  render() {
    console.log(this.state);
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
            <Slider handleSelectedCelebrity={(celeb, i) => this.handleSelectedCelebrity(celeb, i)}
                    images={this.state.celebImages}/>
            <div>{isEmpty(this.state.selectedCeleb) ? null :
                <p align="center" style={{fontWeight: "bold"}}>{this.state.selectedCeleb.name}</p>}
            </div>
            <div>{isEmpty(this.state.selectedCeleb) ? null :
                <p align="center">Hint</p>}
            </div>
            <div>{isEmpty(this.state.selectedCeleb) ? null :
                <p align="center">{this.state.selectedCeleb.hint}</p>}
            </div>

          </div>

        </div>
    );
  }
}

export default App;
