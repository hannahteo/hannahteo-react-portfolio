import React from 'react';
import profilePicture from "../../../static/assets/images/auth/headshot.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
        <div className="left-column" 
        style={{
            background: "url(" + profilePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        />
        <div className="right-column">
            Hi!  I'm Hannah Teo.  I live in Northern Utah and am currently a freshman in high school.
            I love reading, learning, swimming and chocolate.  
            I also love traveling the world and exploring new cultures and foods.  
            To date, my favorite cities that I've been to are Taipei and Madrid.  
            I speak Mandarin, Cantonese, Spanish and English.  
            I am interesting in pursuing a career in the medical field, but also want to either work for NASA or become a FBI agent. 
        </div>
        </div>
    );
}