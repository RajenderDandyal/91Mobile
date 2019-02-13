import React, { Component } from "react";
import styles from "./styles.module.css";
import logo from "./assets/logo.png";
import SliderCeleb from "./sliderCeleb";
import cloneDeep from "lodash/cloneDeep";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
import Badshah from "./assets/celeb/Badshah.png";
import Deepika from "./assets/celeb/Deepika.png";
import DiljitSingh from "./assets/celeb/Diljit-Singh.png";
import Ramdev from "./assets/celeb/Ramdev.png";
import RanveerSingh from "./assets/celeb/ranveer-singh.png";
import SRK from "./assets/celeb/SRK.png";
import Sunny from "./assets/celeb/Sunny.png";
import Virat from "./assets/celeb/virat.png";
import AppleXs from "./assets/phones/Apple-iPhone-Xs-Max.png";
import HuaweiP20 from "./assets/phones/Huawei-P20-Pro.png";
import MicromaxInfinity from "./assets/phones/Micromax-Infinity-N11.png";
import MotoZ2 from "./assets/phones/Moto-Z2-Force.png";
import OppoF3 from "./assets/phones/Oppo-F3-Plus.png";
import SamgsungA9 from "./assets/phones/Samsung-Galaxy-A9-Pro.png";
import SamgsungS9 from "./assets/phones/Samsung-Galaxy-S9+.png";
import Xiaomi from "./assets/phones/xiaomi-mi-mix-3.png";
import fb from "./assets/fb.png";
import twitter from "./assets/twitter.png";
import amazon from "./assets/amazon.jpg";
import SliderPhone from "./phoneSlider";
import { FacebookShareButton, TwitterShareButton } from "react-share";

class App extends Component {
  state = {
    finallySubmit: false,
    showResult: false,
    answerCheck: [],
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
        hint: "Swadeshi Apnao. Desh Bachao"
      },
      {
        image: RanveerSingh,
        name: "Ranveer Singh",
        match: null,
        clicked: null,
        key: 2,
        hint: "Unlimited energy. Never drains out"
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
      }
    ],
    selectedCeleb: {},
    phoneImages: [
      {
        name: "Apple-iPhone-Xs-Max",
        image: AppleXs,
        match: null,
        finallySelected: false,
        clicked: null,
        key: 5,
        subTitle: "Motion-stabilization camera"
      },
      {
        name: "Huawei-P20-Pro",
        image: HuaweiP20,
        match: null,
        finallySelected: false,
        clicked: null,
        key: 3,
        subTitle: "Wide-Angle Camera"
      },
      {
        name: "Micromax-Infinity-N11",
        image: MicromaxInfinity,
        match: null,
        finallySelected: false,
        clicked: null,
        key: 1,
        subTitle: "Made-in-India"
      },
      {
        name: "Moto-Z2-Force",
        image: MotoZ2,
        match: null,
        finallySelected: false,
        clicked: null,
        key: 4,
        subTitle: "Unbreakable screen"
      },
      {
        name: "Oppo-F3-Plus",
        image: OppoF3,
        match: null,
        finallySelected: false,
        clicked: null,
        key: 7,
        subTitle: "16MP+8MP dual front camera"
      },
      {
        name: "Samgsung-Galaxy-A9-Pro",
        image: SamgsungA9,
        match: null,
        finallySelected: false,
        clicked: null,
        key: 2,
        subTitle: "5000 Mah battery"
      },
      {
        name: "Samgsung-Galaxy-S9+",
        image: SamgsungS9,
        match: null,
        finallySelected: false,
        clicked: null,
        key: 6,
        subTitle: "Stereo speakers"
      },
      {
        name: "Xiaomi-mi-mix-3",
        image: Xiaomi,
        match: null,
        finallySelected: false,
        clicked: null,
        key: 0,
        subTitle: "6.39 inches Screen"
      }
    ],
    selectedPhone: null
  };
  handleSelectedCelebrity = (celeb, i) => {
    let updatedStateImages = cloneDeep(this.state.celebImages);
    updatedStateImages.forEach(item => {
      if (item.clicked) {
        item.clicked = null;
      }
    });
    let updatedSelectedCeleb = updatedStateImages.filter(
      item => item.key === i
    );
    console.log(updatedSelectedCeleb, celeb, i);
    let updatedSelectedCelebObj = {};
    updatedSelectedCeleb.forEach(item => {
      updatedSelectedCelebObj.image = item.image;
      updatedSelectedCelebObj.clicked = item.key === i ? true : null;
      updatedSelectedCelebObj.match = celeb.match;
      updatedSelectedCelebObj.name = item.name;
      updatedSelectedCelebObj.key = celeb.key;
      updatedSelectedCelebObj.hint = item.hint;
    });

    updatedStateImages[i] = updatedSelectedCelebObj;
    this.setState({ selectedCeleb: updatedSelectedCelebObj });
    this.setState({ celebImages: updatedStateImages }, () =>
      this.addSelectedPhoneFlag()
    );
  };
  addSelectedPhoneFlag = () => {
    let updatedPhoneImages = cloneDeep(this.state.phoneImages);
    updatedPhoneImages.forEach(item => {
      if (!isEmpty(this.state.selectedPhone)) {
        if (item.key === this.state.selectedPhone.key) {
          item.finallySelected = true;
        }
      }
    });
    this.setState({ phoneImages: updatedPhoneImages });
  };
  handleSelectedPhone = (phone, i) => {
    let updatedPhoneImages = cloneDeep(this.state.phoneImages);
    updatedPhoneImages.forEach(item => {
      if (!phone.finallySelected) {
        if (item.clicked) {
          item.clicked = null;
        }
      }
    });
    updatedPhoneImages.forEach(item => {
      if (
        isEqual(
          item.match ? item.match.key : null,
          this.state.selectedCeleb ? this.state.selectedCeleb.key : null
        )
      ) {
        item.match = null;
      }
    });

    let updatedSelectedPhone = updatedPhoneImages.filter(
      item => item.key === phone.key
    );
    // console.log(updatedSelectedPhone, phone, i);
    // console.log(i + "out of" + 8);
    let updatedSelectedPhoneObj = {};
    updatedSelectedPhone.forEach(item => {
      updatedSelectedPhoneObj.image = item.image;
      updatedSelectedPhoneObj.clicked = true;
      updatedSelectedPhoneObj.match = this.state.selectedCeleb;
      updatedSelectedPhoneObj.name = item.name;
      updatedSelectedPhoneObj.key = phone.key;
      updatedSelectedPhoneObj.subTitle = item.subTitle;
      updatedSelectedPhoneObj.finallySelected = phone.finallySelected;
    });

    updatedPhoneImages[i] = updatedSelectedPhoneObj;

    this.setState({ phoneImages: updatedPhoneImages }, () =>
      this.addSelectedPhoneForCeleb()
    );
    this.setState({ selectedPhone: updatedSelectedPhoneObj });
  };
  addSelectedPhoneForCeleb = () => {
    let updatedCelebImages = cloneDeep(this.state.celebImages);
    updatedCelebImages.forEach(item => {
      if (item.key === this.state.selectedCeleb.key) {
        item.match = this.state.selectedPhone;
      } else if (
        isEqual(
          item.match ? item.match.key : null,
          this.state.selectedPhone.key
        )
      ) {
        item.match = null;
      }
    });
    this.setState({ celebImages: updatedCelebImages }, () =>
      this.finallySubmit()
    );
  };
  finallySubmit = () => {
    if (!this.state.finallySubmit) {
      this.state.celebImages.forEach(item => {
        if (!isEmpty(item.match)) {
          this.setState({ finallySubmit: true });
        } else {
          this.setState({ finallySubmit: false });
        }
      });
    }
  };
  handleSubmit = () => {
    if (this.state.finallySubmit) {
      this.checkCorrectAnswers();
    } else {
      alert("Match all celebrities with at least one phone");
    }
  };
  checkCorrectAnswers = () => {
    let answerCheck = [];
    this.state.phoneImages.forEach(item => {
      if (item.key === item.match.key) {
        answerCheck.push(true);
      }
    });
    this.setState({ answerCheck, showResult: true });
  };

  render() {
    // console.log(this.state);
    return (
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div>Presents</div>
          <div className={styles.heading}>#CelebValentine</div>
          {!this.state.showResult && (
            <div className={styles.subheading}>
              <p align="center">
                Choose the perfect gift for your favourite
                <br />
                celebrity and stand a
                <br />
                chance to win Amazon vouchers.
              </p>
            </div>
          )}
          {!this.state.showResult && (
            <SliderCeleb
              handleSelectedCelebrity={(celeb, i) =>
                this.handleSelectedCelebrity(celeb, i)
              }
              images={this.state.celebImages}
            />
          )}
          {!this.state.showResult && (
            <div>
              {isEmpty(this.state.selectedCeleb) ? null : (
                <p
                  align="center"
                  style={{ fontWeight: "bold", padding: "0", margin: "3px" }}
                >
                  {this.state.selectedCeleb.name}
                </p>
              )}
            </div>
          )}
          {!this.state.showResult && (
            <div>
              {isEmpty(this.state.selectedCeleb) ? null : (
                <p
                  align="center"
                  style={{ padding: "0", margin: "3px", color: "orange" }}
                >
                  Hint
                </p>
              )}
            </div>
          )}
          {!this.state.showResult && (
            <div>
              {isEmpty(this.state.selectedCeleb) ? null : (
                <p align="center" style={{ padding: "0", margin: "3px" }}>
                  {this.state.selectedCeleb.hint}
                </p>
              )}
            </div>
          )}
          {!this.state.showResult && (
            <SliderPhone
              handleSelectedPhone={(phone, i) =>
                this.handleSelectedPhone(phone, i)
              }
              images={this.state.phoneImages}
            />
          )}
          {!this.state.showResult && (
            <div onClick={this.handleSubmit} className={styles.buttonContainer}>
              <div
                className={
                  this.state.finallySubmit ? styles.button : styles.disableBtn
                }
              >
                Submit
              </div>
            </div>
          )}

          {this.state.showResult && (
            <div
              style={{
                backgroundColor: "orange",
                color: "white",
                fontSize: 20,
                padding: 3
              }}
            >
              You got {this.state.answerCheck.length} out of 8 correct answers.
            </div>
          )}
          {this.state.showResult && (
            <div style={{ textAlign: "center" }}>
              <p>
                Share it with your friends using <br />
                the <span style={{ fontWeight: "bold" }}>#CelebValentine</span>
              </p>
            </div>
          )}
          {this.state.showResult && (
            <div>
              {/* <img style={{ padding: 5 }} src={insta} alt="facebook" /> */}
              <FacebookShareButton
                style={{ display: "initial" }}
                url="https://www.91mobiles.com/"
                quote={`I got ${
                  this.state.answerCheck.length
                } out of 8 in #91mobiles #CelebValentine contest. Beat my score and stand a chance to win Amazon vouchers.`}
              >
                <img style={{ padding: 5 }} src={fb} alt="facebook" />{" "}
              </FacebookShareButton>
              <TwitterShareButton
                style={{ display: "initial" }}
                url="https://www.91mobiles.com/"
                title={`I got ${
                  this.state.answerCheck.length
                } out of 8 in @91mobiles #CelebValentine contest. Beat my score and stand a chance to win Amazon vouchers.`}
              >
                <img style={{ padding: 5 }} src={twitter} alt="facebook" />
              </TwitterShareButton>
            </div>
          )}
          {this.state.showResult && (
            <div style={{ textAlign: "center" }}>
              <p>
                and stand a chance to win <br />
                amazon vouchers.
              </p>
            </div>
          )}
          {this.state.showResult && (
            <div style={{ textAlign: "center" }}>
              <img src={amazon} style={{ width: "90%" }} alt="amazon" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
