import React from 'react';
import styles from './css/homepage.css';

class HomePage extends React.Component{

  render() {
    var homeStyle = styles.homeText;
    var callTodayStyle = styles.callToday;
    if(this.props.width < 1000){
      homeStyle = styles.homeTextSmall;
      callTodayStyle = styles.callTodaySmall;
    }
    return (
      <div id="home_page" className={styles.page}>
        <div className={styles.lchName}>
        </div>
        <div id="homeText" className={homeStyle}>
        <h2>Excellence.</h2>
        <p>
        <b>LCH Consulting Associates </b>
        is a professional firm dedicated to providing excellent service in the field of air quality issues.
        LCH draws upon a unique pool of experienced, qualified, professional air pollution experts to run efficient, precise test programs.
        </p><br></br>
        <h2>Precision and Efficiency.</h2>
        <p>
        Our precision and efficiency means we get the program finished on time, while taking full advantage of optimized process conditions.
        </p><br></br>
        <div className={callTodayStyle}>Call LCH Today: <a href="tel:(484)880-4819">484-880-4819</a></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
