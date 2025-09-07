import React from "react";

class Home extends React.Component{
    render(){
        return (
		<main id="maincontent"> 
		<h1>Välkommen till vår kennel!</h1>
        <section id="info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a metus quis ligula rhoncus vestibulum. 
                Suspendisse potenti. Nam vulputate ex sed feugiat dapibus. In ut blandit lacus, quis luctus nisi. 
                Sed tincidunt neque sed enim bibendum, at mollis purus finibus. 
                Integer posuere eleifend tellus ut rutrum. Sed placerat justo et nisi tristique, sit amet aliquam quam fermentum. 
                Morbi bibendum libero sit amet ex sodales malesuada. Integer ac mauris ex. Quisque dictum tortor sed pharetra bibendum. 
                Aenean sagittis aliquam erat nec sollicitudin. Pellentesque ac porta dolor.
                Integer posuere eleifend tellus ut rutrum. Sed placerat justo et nisi tristique, sit amet aliquam quam fermentum. Morbi bibendum libero sit amet ex sodales malesuada. 
                Integer ac mauris ex. Quisque dictum tortor sed pharetra bibendum. Aenean sagittis aliquam erat nec sollicitudin.
            </p>
                    
        	<div className="image-gallery" id="bilder">
                <div className="main-image">
					<img
					src="/bilder/svarthund.jpg"
                    alt="This a picture of a black newfoundland dog" 
                    title="Black dog"/>
                </div>
                <div className="side-images">
                    <img 
        	            src="/bilder/skogenhund.jpg" 
                        width="150" 
                        alt="This a picture of a dog and its owner in the woods" 
                        title="Owner and dog in the woods" />
                    <img 
                        src="/bilder/brunhund.jpg" 
                        width="150" 
                        alt="This a picture of a brown newfoundland dog" 
                        title="Brown dog" />
                </div>
            	</div>
        	</section>
    	</main>);
    }
}

export default Home;