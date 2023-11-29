// src/components/NewsAndUpdate.jsx

import React from 'react';

const NewsAndUpdate = () => {
  return (
    <div className="home-page" style={{backgroundColor: 'rgb(50,150,255'}}>
      <header>
      </header>
      <main>
        <section>
        <center>
          <h1>News & Updates</h1>
          
          
          <a href="#" class="image logo center"><img src='data:image/png;base64,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' alt="" /></a>
          </center>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpat.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpa  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpa  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpa  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod justo nec odio gravida, auctor gravida augue volutpa
          </p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Tresure Hunt Event Upcoming!</li>
            <li>Winners from 2023 Innovation Challenge</li>
            <li>Club Merch</li>
          </ul>
        </section>
      </main>
      <footer>
    
      </footer>
    </div>
  );
};

export default NewsAndUpdate;