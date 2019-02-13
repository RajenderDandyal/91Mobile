import React, { Component } from "react";
import styles from "../styles.module.css";
import isEmpty from "lodash/isEmpty";

export default class SliderCeleb extends Component {
  handleSelectedCelebrity = (celeb, i) => {
    this.props.handleSelectedCelebrity(celeb, i);
  };

  render() {
    console.log(this.props);
    return (
      <div className={styles.celebSlider}>
        {this.props.images.map((celeb, i) => (
          <div
            onClick={() => this.handleSelectedCelebrity(celeb, i)}
            key={i}
            id="scroll"
            className={styles.celebSlide}
            style={
              celeb.clicked
                ? {
                    width: "230",
                    height: "160",
                    opacity: "0.8"
                    // backgroundColor: "darkGrey"
                  }
                : !isEmpty(celeb.match)
                ? {
                    opacity: "0.8"
                  }
                : null
            }
          >
            <div className={styles.celebCard}>
              <div
                className={
                  !isEmpty(celeb.match)
                    ? styles.displayOverlayTextForCeleb
                    : styles.displayNone
                }
              ><div><p align="center" style={{color:'black',backgroundColor:'lightgray',opacity:0.6,padding:'4px'}}>
                  Matched with{" "}
                  {celeb.finallySelected
                    ? celeb.match.name
                    : !isEmpty(celeb.match)
                    ? celeb.match.name
                    : "none"}
                </p></div>
                {/*<p align="center">{phone.clicked && !isEmpty(phone.match) ?phone.match.name : "none"}</p>*/}
              </div>
              <div style={{ backgroundColor: "lightgray", padding: 5 }}>
                {celeb.clicked ? (
                  <img
                    src={celeb.image}
                    alt={"celeb"}
                    height="200"
                    width="150"
                  />
                ) : (
                  <img
                    src={celeb.image}
                    alt={"celeb"}
                    height="160"
                    width="120"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
