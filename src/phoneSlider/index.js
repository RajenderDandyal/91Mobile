import React, { Component } from "react";
import styles from "../styles.module.css";
import isEmpty from "lodash/isEmpty";

export default class SliderPhone extends Component {
  state = {
    selected: null
  };
  handleSelectedPhone = (phone, i) => {
    this.setState({ selected: phone });
    this.props.handleSelectedPhone(phone, i);
  };

  render() {
    //console.log(this.props);
    return (
      <div className={styles.phoneSlider}>
        {this.props.images.map((phone, i) => (
          <div
            onClick={() => this.handleSelectedPhone(phone, i)}
            key={i}
            className={styles.phoneSlide}
            style={
              phone.finallySelected
                ? {
                    width: "160",
                    height: "280",
                    opacity: "0.8",
                    backgroundColor: "darkGrey"
                  }
                : phone.clicked && !isEmpty(phone.match)
                ? {
                    width: "160",
                    height: "280",
                    opacity: "0.5",
                    backgroundColor: "darkGrey"
                  }
                : null
            }
          >
            {/*phone card*/}
            <div className={styles.phoneCard}>
              <div
                className={
                  phone.finallySelected && !isEmpty(phone.match)
                    ? styles.displayOverlayText
                    : phone.clicked && !isEmpty(phone.match)
                    ? styles.displayOverlayText
                    : styles.displayNone
                }
              >
                <p align="center">
                  Matched with{" "}
                  {phone.finallySelected
                    ? !isEmpty(phone.match)
                      ? phone.match.name
                      : ""
                    : phone.clicked && !isEmpty(phone.match)
                    ? phone.match.name
                    : "none"}
                </p>
                {/*<p align="center">{phone.clicked && !isEmpty(phone.match) ?phone.match.name : "none"}</p>*/}
              </div>
              <div style={{ height: "20%", width: "100%" }}>
                <p align="center" style={{ fontSize: "10px" }}>
                  {phone.subTitle}
                </p>
              </div>
              <div style={{ width: "100%", height: "80%" }}>
                <img
                  src={phone.image}
                  alt={"celeb"}
                  height="100%"
                  width="100%"
                />
              </div>
              <div style={{ height: "20%", width: "100%" }}>
                <p align="center" style={{ fontSize: "10px" }}>
                  {phone.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
