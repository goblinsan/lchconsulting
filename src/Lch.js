import React from 'react';
import update from 'react-addons-update';
import config from './config.json';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import CemPage from './CemPage';
import ContactPage from './ContactPage';
import StaffPage from './StaffPage';
import styles from './css/lch.css';

class Lch extends React.Component{
  constructor() {
    super();
    this.state = {width: $(window).width(), height: $(window).height()};
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount(){
    this.setState({width: $(window).width(), height: $(window).height()});
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    var newState = update(this.state, {
      width: {$set: $(window).width()},
      height: {$set: $(window).height()}
    });

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <img className={styles.logo} src="/images/tinyLogo.png" />
        <NavBar />
        <HomePage width={this.state.width} height={this.state.height} />
        <ServicesPage width={this.state.width} height={this.state.height} />
        <CemPage width={this.state.width} height={this.state.height} />
        <StaffPage width={this.state.width} height={this.state.height} />
        <ContactPage width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}

export default Lch
