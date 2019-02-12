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
                    width: "200",
                    height: "150",
                    opacity: "0.8",
                    backgroundColor: "darkGrey"
                  }
                : null
            }
          >
            <div className={styles.celebCard}>
              <div
                className={
                  celeb.clicked && !isEmpty(celeb.match)
                    ? styles.displayOverlayTextForCeleb
                    : styles.displayNone
                }
              >
                <p align="center">
                  Matched with{" "}
                  {celeb.finallySelected
                    ? celeb.match.name
                    : celeb.clicked && !isEmpty(celeb.match)
                    ? celeb.match.name
                    : "none"}
                </p>
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
