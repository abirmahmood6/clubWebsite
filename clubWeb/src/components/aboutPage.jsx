// src/components/HomePage.jsx

import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page" style={{backgroundColor: 'rgb(50,150,255'}}>
      <header>
        <h1 style={{paddingTop:'60px', textAlign:'center'}}>About Page</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <div class="container">
					<p>
						<p>Stony Brook Competitive Programming Club is a place for anyone interested in algorithms and programming. We offer lectures on algorithmic problems solving, host speakers to discuss algorithms, and provide training sessions for our ICPC teams.</p>
						
					</p>
					<div class="video-responsive">
                        <center>
                        <a href="#" class="image logo center" ><img src='https://www.freeiconspng.com/thumbs/about-us-icon/about-us-icon-15.jpg' alt="" style={{width:"150px",height:"150px"}}/></a> <br></br>
						<iframe width="50" height="50" src="https://youtu.be/AGeMqqjw3oY?si=aZjeHScPKPVRDT69" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </center>
					</div>
				</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpat.
          </p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpat.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpa  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpa  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpa  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpa
          </p>
        </section>
      </main>
      <footer>
   
      </footer>
    </div>
  );
};

export default AboutPage;