import React, {Component} from 'react';
import styles from "./styles.module.css";
import logo from "./assets/logo.png";
import SliderCeleb from "./sliderCeleb";
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
import AppleXs from "./assets/phones/Apple-iPhone-Xs-Max.png"
import HuaweiP20 from "./assets/phones/Huawei-P20-Pro.png"
import MicromaxInfinity from "./assets/phones/Micromax-Infinity-N11.png"
import MotoZ2 from "./assets/phones/Moto-Z2-Force.png"
import OppoF3 from "./assets/phones/Oppo-F3-Plus.png"
import SamgsungA9 from "./assets/phones/Samsung-Galaxy-A9-Pro.png"
import SamgsungS9 from "./assets/phones/Samsung-Galaxy-S9+.png"
import Xiaomi from "./assets/phones/xiaomi-mi-mix-3.png"
import SliderPhone from "./phoneSlider";

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
        name: "Baba Ramdev",
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
        name: "Shah Rukh Khan",
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
        key: 5,
        hint: "Likes recording people littering from cars"
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
    selectedCeleb: {},
    phoneImages: [
      {
        name: "Apple-iPhone-Xs-Max",
        image: AppleXs,
        key: 5,
        subTitle: "Motion-stabilization camera"
      },
      {
        name: "Huawei-P20-Pro",
        image: HuaweiP20,
        key: 3,
        subTitle: "Wide-Angle Camera"
      },
      {
        name: "Micromax-Infinity-N11",
        image: MicromaxInfinity,
        key: 1,
        subTitle: "Made-in-India"
      },
      {
        name: "Moto-Z2-Force",
        image: MotoZ2,
        key: 4,
        subTitle: "Unbreakable screen"
      },
      {
        name: "Oppo-F3-Plus",
        image: OppoF3,
        key: 7,
        subTitle: "16MP+8MP dual front camera"
      },
      {
        name: "Samgsung-Galaxy-A9-Pro",
        image: SamgsungA9,
        key: 2,
        subTitle: "5000 Mah battery"
      },
      {
        name: "Samgsung-Galaxy-S9+",
        image: SamgsungS9,
        key: 6,
        subTitle: "Stereo speakers"
      },
      {
        name: "Xiaomi-mi-mix-3",
        image: Xiaomi,
        key: 0,
        subTitle: "6.39 inches Screen"
      },

    ]
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

  };

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
            <SliderCeleb handleSelectedCelebrity={(celeb, i) => this.handleSelectedCelebrity(celeb, i)}
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
            <div style={{
              display: "flex",
              flexDirection: "row",
              margin: '20px',
              alignItems: 'center',
              justifyContent: "center"
            }}>
              <div style={{width: "150px", height: "1px", backgroundColor: "red"}}></div>
              <div style={{padding: "10px"}}><p align="center" style={{color: "red"}}>Slider</p></div>
              <div style={{width: "150px", height: "1px", backgroundColor: "red"}}></div>
            </div>
            <SliderPhone images={this.state.phoneImages}/>
          </div>
        </div>
    );
  }
}

export default App;
