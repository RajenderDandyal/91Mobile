import React, {Component} from 'react'
import styles from "../styles.module.css";
import Badshah from "../assets/celeb/Badshah.png"
import Deepika from "../assets/celeb/Deepika.png"
import DiljitSingh from "../assets/celeb/Diljit-Singh.png"
import Ramdev from "../assets/celeb/Ramdev.png"
import RanveerSingh from "../assets/celeb/ranveer-singh.png"
import SRK from "../assets/celeb/SRK.png"
import Sunny from "../assets/celeb/Sunny.png"
import Virat from "../assets/celeb/virat.png"

export default class SliderCeleb extends Component {
  state = {
    images: [
      DiljitSingh,
      Ramdev,
      RanveerSingh,
      SRK,
      Sunny,
      Virat,
      Badshah,
      Deepika,
    ],
    currentIndex: 0,
    translateValue: 0
  };
  handleSelectedCelebrity = (celeb,i) => {
    this.props.handleSelectedCelebrity(celeb,i)
  };

  render() {
    console.log(this.props)
    return (
        <div className={styles.celebSlider} >
          {
            this.props.images.map((celeb, i) => (
                <div onClick={() => this.handleSelectedCelebrity(celeb, i)} key={i} className={styles.slide1}
                     style={celeb.clicked ? {width:"150", height:"150"}:null }>
                  {celeb.clicked ? <img src={celeb.image} alt={"celeb"} height="140" width="140"/> :
                      <img src={celeb.image} alt={"celeb"} height="100" width="100"/>}

                </div>
            ))
          }
        </div>
    );
  }
}