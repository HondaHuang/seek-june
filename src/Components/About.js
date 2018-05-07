import React from 'react';
// import image1 from '../images/image1.jpg'

class About extends React.Component {
    render() {
        return (
        
            
            <div class="gallery">
            <div className="aboutus">
            <h2 class="stats"> About Us</h2>
            <h3>We love helping people in times of disaster. <br/> It's what we do best</h3>
            </div>

                <div class="thumbnail">
                <img src={require('../images/realtime.png')} alt='' width='70' height='70'/>
                    <h4>REAL TIME</h4>
                    <p>We update our shelter in real time </p>
                </div>
                <div class="thumbnail">
                <img src={require('../images/form.png')} alt='' width='70' height='70'/>
                    <h4>CONSOLIDATED FORMS</h4>
                    <p>We combine both checkin and register forms </p>
                </div>
                <div class="thumbnail">
                <img src={require('../images/search.png')} alt='' width='70' height='70'/>
                    <h4>SEAMLESS SEARCH</h4>
                    <p>Our search is combined with Google API</p>
                </div>
                <div class="thumbnail">
                <img src={require('../images/computer.png')} alt='' width='70' height='70'/>
                    <h4>Responsive</h4>
                    <p>Our website is reponsive</p>
                </div>
                <br/>
                <div className="contact">
                <h2 class="stats">Contact Us</h2>
                <h4> 25TH ST NY, NEW YORK 10010</h4>
                 <h4>   123.456.789  </h4>
                 <h4>  INFO@SHELTERSNYC.COM  </h4>
                </div>
            
                
        
            </div>
            
        )
    }
}

export default About;