import React from 'react';
import styles from './css/cempage.css';

class CemPage extends React.Component{

  render() {
    var cemStyle = styles.cemText;
    if(this.props.width < 1000){
      cemStyle = styles.cemTextSmall;
    }
    return (
      <div id="cem_page" className={styles.page}>
        <div className={cemStyle}>
  Continuous emission monitoring systems (CEMS) were historically used as a tool to monitor flue gas for oxygen, carbon monoxide and carbon dioxide to provide information for combustion control in industrial settings.
        </div>
      </div>
    );
  }
}

export default CemPage;
