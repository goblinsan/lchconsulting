import React from 'react';
import styles from './css/staffpage.css';

class StaffPage extends React.Component{

  render() {
    var staffStyle = styles.staffText;
    if(this.props.width < 1000){
      staffStyle = styles.staffTextSmall;
    }
    return (
      <div id="staff_page" className={styles.page}>
        <div className={staffStyle}>
        <h1>Our Staff.</h1>
        <ul className="media-list">
          <li className="media">
            <div className="media-left">
              <img className="media-object" src="/images/workerIcon.png" alt="worker avatar" />
            </div>
            <div className="media-body">
              <h4 className="media-heading">L. Christopher Heilner</h4>
              Founded LCH Consulting Associates in 2000 while still attending Salisbury State University. He graduated with a BS in Environmental Health Sciences and has been stack testing ever since. Chris is 30, married and lives in Elverson, Pennsylvania.
            </div>
          </li>
          <li className="media">
            <div className="media-left">
              <img className="media-object" src="/images/workerIcon.png" alt="worker avatar" />
            </div>
            <div className="media-body">
              <h4 className="media-heading">Brian J. Haffler</h4>
              The right hand man on every stack test LCH is involved with. Brian has been stack testing since 2004. Brian routinely handles all of the needs up on the stack. Brian is 30 and lives in Elverson, Pennsylvania.
            </div>
          </li>
          <li className="media">
            <div className="media-left">
              <img className="media-object" src="/images/workerIcon.png" alt="worker avatar" />
            </div>
            <div className="media-body">
              <h4 className="media-heading">Steven T. Lavsa</h4>
              Senior field technician with LCH Consulting since December of 2008. Steve gained his Bachelor of Science in Environmental Sciences from the University of Pittsburgh in 2005. Steve has recently successfully completed his Qualified Source Testing Individual tests and is Method 9 certified for visible emissions. Steve is a valuable member of the test team who primarily focuses on gaseous instrumental testing, but if proficient in all areas of source testing.
            </div>
          </li>
          <li className="media">
            <div className="media-left">
              <img className="media-object" src="/images/workerIcon.png" alt="worker avatar" />
            </div>
            <div className="media-body">
              <h4 className="media-heading">Philip C. Burg</h4>
              Senior project manager with LCH Consulting since September of 2008. Phil gained his Bachelor of Science in Environmental Science, California State College, California, Pennsylvania. Mr. Burg has 30 years experience in conducting source emission testing at hundreds of facilities. He is equally knowledgeable with instrumental, wet chemical, and isokinetic test methods. For 17 years, he has served as a project manager or team leader, managing projects from protocol preparation to final report submittal.
            </div>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default StaffPage;
