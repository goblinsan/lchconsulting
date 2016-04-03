import React from 'react';
import styles from './css/servicespage.css';

class ServicesPage extends React.Component{

  render() {
    var serviceStyle = styles.services;
    var doubleStyle = styles.double;
    var indyStyle = styles.industries;
    if(this.props.width < 1000){
      serviceStyle = styles.servicesSmall;
      doubleStyle = styles.doubleSmall;
      indyStyle = styles.industriesSmall;
    }
    return (
      <div id="services_page" className={styles.page}>
        <div className={serviceStyle}>
          <h2>Our services include but are not limited to:</h2>
          <ul className={styles.double}>
            <li>Isokinetic Source Sampling</li>
            <li>Gaseous Pollutant Sampling</li>
            <li>Relative Accuracy Test Audits (RATA)</li>
            <li>Regulatory Compliance Test Programs</li>
            <li>Onsite Gas Chromatography</li>
            <li>Visual Emission Readings</li>
            <li>Dioxin/Furan, PCB, SVOC, VOST, Hex Chrome Sampling</li>
            <li>Mercury and Multi Metals Sampling</li>
            <li>Combustion Tuning</li>
          </ul>
        </div>
        <div className={indyStyle}>
          <div className="panel panel-info">
          <div className="panel-heading">
            LCH Consulting Associates serves all business and industry involved with air emissions. Some industries served include the following:
          </div>
          <ul>
            <li>Electric Utilities</li>
            <li>Petroleum Refining</li>
            <li>Portland Cement</li>
            <li>Municipal Waste Incinerators</li>
            <li>Chemical Production</li>
            <li>Boiler Houses</li>
            <li>Foundries and Steel Mills</li>
            <li>Pulp and Paper</li>
            <li>Specialty Manufactures</li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesPage;
