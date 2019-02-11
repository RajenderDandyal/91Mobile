import React, {Component} from 'react'
import styles from "../styles.module.css";

export default class SliderPhone extends Component {

  handleSelectedCelebrity = (celeb,i) => {
    this.props.handleSelectedCelebrity(celeb,i)
  };

  render() {
    console.log(this.props)
    return (
        <div className={styles.phoneSlider} >
          {
            this.props.images.map((phone, i) => (
                <div onClick={() => this.handleSelectedCelebrity(phone, i)} key={i} className={styles.phoneSlide}
                     style={phone.clicked ? {width:"150", height:"150"}:null }>
                  <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#eee", height:"100%", width:"160px"}}>
                    <div style={{height:"20%", width:"100%"}}>
                      <p align="center" style={{fontSize:"10px"}}>{phone.name}</p>
                    </div>
                    <div style={{width:"100%", height:"80%"}}>
                      {phone.clicked ? <img src={phone.image} alt={"celeb"} height="80%" width="100%"/> :
                          <img src={phone.image} alt={"celeb"} height="100%" width="100%"/>}
                    </div>
                    <div  style={{height:"20%", width:"100%"}}>
                      <p align="center" style={{fontSize:"10px"}}>{phone.subTitle}</p>
                    </div>
                  </div>


                </div>
            ))
          }
        </div>
    );
  }
}