import React from 'react';
import image1 from '../images/image1.jpg'

class About extends React.Component {
    render() {
        return (
        
            
            <div class="gallery">
                <div class="thumbnail">
                <h2> About Us</h2>
            <h3>We love helping people in times of disaster. It's what we do best</h3>
                    <h1 class="stats">50</h1>
                    <h4>REAL TIME</h4>
                    <p>The number of shelters that we are in contact with</p>
                </div>
                <div class="thumbnail">
                    <h1 class="stats">2300</h1>
                    <h4>EASY FORMS</h4>
                    <p>THe capacity number </p>
                </div>
                <div class="thumbnail">
                    <h1 class="stats">75%</h1>
                    <h4>SEAMLESS SEARCH</h4>
                    <p>One line description</p>
                    <h2> CONTACT US </h2>
                <h3> 25TH ST NY, NEW YORK 10010 
                    123.456.789 
                    INFO@SHELTERSNYC.COM </h3>
                </div>

            
                
        
            </div>
            
        )
    }
}

export default About;