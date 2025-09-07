import React from "react";

class About_us extends React.Component{
    render(){
        return(
            <main id="maincontent">
            <h1>Om oss</h1>

            <section id="info">
                <div id="me&roger">
                    My husband Roger and I Jenny run a small kennel between Örkelljunga and Munka-Ljungby. 
                    Got my first in 1989, then I was stuck. It is a wonderful dog with many personalities. 
                    Has trained and competed for many years in lifesaving in water.
                    Now our interest is dog show.
                    <br /><br />
                    Morbi bibendum libero sit amet ex sodales malesuada. Integer ac mauris ex. 
                    Quisque dictum tortor sed pharetra bibendum. Aenean sagittis aliquam erat nec sollicitudin.
                    Morbi bibendum libero sit amet ex sodales malesuada. Integer ac mauris ex. 
                    Quisque dictum tortor sed pharetra bibendum. Aenean sagittis aliquam erat nec sollicitudin.
                </div>
                <div className="image">
                    <img 
                        src="/bilder/PlaceHolderOurPhotos.jpg" 
                        height="300" 
                        alt="This a picture of our dog" 
                        title="Our dog" 
                    />
                </div>
            </section>
        </main>
        );
    }
}

export default About_us;