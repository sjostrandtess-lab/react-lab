import React from "react";
import { NavLink, Link } from "react-router-dom";

class Replacements extends React.Component{
    render(){
        return(
            <main id="maincontent"> 
            <h1>This page is under production</h1>

            <video 
                controls 
                muted 
                loop 
                width="300" 
                alt="This a video of a dog and its owner" 
                title="Video of dog and owner">
                <source src="/video/hundPrommenad.mp4" />
                This browser does not support HTML5 video
            </video>

            <NavLink to="https://en.wikipedia.org/wiki/Newfoundland_dog">
                <h2>Det här är en absolut länk</h2>
            </NavLink>

            <div id="lists">
                <h4>Unordered List</h4>
                <ul>
                    <li>pizza deg</li>
                    <li>tomat</li>
                    <li>lök</li>
                </ul>

                <h4>Ordered List</h4>
                <ol type="A">
                    <li>eat</li>
                    <li>ost</li>
                    <li>eat</li>
                    <li>eat</li>
                </ol>
            </div>
            </main>
        );
    }
}

export default Replacements;