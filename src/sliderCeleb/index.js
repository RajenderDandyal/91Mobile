import React, {Component} from 'react'
import styles from "../styles.module.css";

export default class SliderCeleb extends Component {

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