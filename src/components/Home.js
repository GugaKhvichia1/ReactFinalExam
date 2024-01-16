import React from 'react';
import Pic1 from '../pictures/Pic1.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-content">
      <div className="intro">
        <img src={Pic1} alt="Your Name" className="profile-pic" />
        <div className="info">
          <h2>Hello, you have come to my mock portfolio!</h2>
          <p>
            I am preparing this for my React final exam. In short, to tell you about myself, I want to{' '}
            <span className="highlight">know well and master Web Development</span>, but not because I like it. I just think it's{' '}
            <span className="highlight">necessary</span> and it's a bit hindering my discipline. I am a{' '}
            <span className="highlight">Solution Developer</span> at company BIT and I work on{' '}
            <span className="highlight">business applications</span>.
          </p>
          <p>Explore my projects, and feel free to reach out if you want to collaborate!</p>
        </div>
      </div>

      <div className="achievements-hobbies">
        <section className="achievements">
          <h3>Achievements in Life:</h3>
          <ul>
            <li>I have the best girlfriend in the world.</li>
            <li>Successfully completed 2 courses at BTU University.</li>
            <li>A good brother and son.</li>
            <li>Successfully passed the final exam of the subject React.</li>
          </ul>
        </section>

        <section className="hobbies">
          <h3>Hobbies and Interests:</h3>
          <ul>
            <li>Playing Story Telling games.</li>
            <li>Animes.</li>
            <li>Playing football (former football player).</li>
            <li>Common Sense Jokes.</li>
            <li>Swimming (I can't swim).</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;