import React from 'react';
import styles from './css/contactpage.css';

class ContactPage extends React.Component{

  render() {
    var contactStyle = styles.contactText;
    if(this.props.width < 1000){
      contactStyle = styles.contactTextSmall;
    }
    return (
      <div id="contact_page" className={styles.page}>
        <div className={contactStyle}>
        <div className={styles.addressBox}>
        LCH Consulting Associates<br />
        539 West Cedarville Road<br />
        Pottstown, PA 19465
        </div>

          <a href="tel:(484)880-4819">484-880-4819 office</a><br />
          484-229-0881 fax
        </div>
      </div>
    );
  }
}

export default ContactPage;
