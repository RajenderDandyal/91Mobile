import React, {Component} from 'react'
import styles from "../styles.module.css";

export default class SliderPhone extends Component {
  state = {
    selected: null
  };
  handleSelectedPhone = (phone, i) => {
    this.setState({selected: phone})
    this.props.handleSelectedPhone(phone, i)
  };

  render() {
    console.log(this.props)
    return (
        <div className={styles.phoneSlider}>
          {
            this.props.images.map((phone, i) => (
                <div onClick={() => this.handleSelectedPhone(phone, i)} key={i} className={styles.phoneSlide}
                    style={phone.clicked ? {width: "160", height: "280", opacity:"0.5", backgroundColor:"darkGrey"} : null}
                >
                  {/*phone card*/}
                  <div className={styles.phoneCard}>
                    <div className={phone.clicked ? styles.displayOverlayText : styles.displayNone}>
                      <p>hello</p>
                    </div>
                    <div style={{height: "20%", width: "100%"}}>
                      <p align="center" style={{fontSize: "10px"}}>{phone.name}</p>
                    </div>
                    <div style={{width: "100%", height: "80%"}}>
                      <img src={phone.image} alt={"celeb"} height="100%" width="100%"/>
                    </div>
                    <div style={{height: "20%", width: "100%"}}>
                      <p align="center" style={{fontSize: "10px"}}>{phone.subTitle}</p>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
    );
  }
}