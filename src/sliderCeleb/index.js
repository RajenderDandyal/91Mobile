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

export default class Slider extends Component {
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
  handleSelectedCelebrity = (celeb)=>{
    celeb.clicked = true;
    this.props.handleSelectedCelebrity(celeb)
  };

  render() {
    return (
        <div className={styles.celebSlider}>

            {
              this.props.images.map((celeb, i) => (
                  <div onClick={()=>this.handleSelectedCelebrity(celeb)} key={i} className={styles.slide1}>
                    <img src={celeb.image} alt={"celeb"} height="100" width="100"/>
                  </div>
              ))
            }

        </div>
    );
  }
}