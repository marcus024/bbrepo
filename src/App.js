import React, { useState, useEffect } from 'react';
import './App.css';

// Importing all images from 5.jpg to 29.jpg
import image5 from './Images/5.jpg';
import image7 from './Images/7.jpg';
import image8 from './Images/8.jpg';
import image9 from './Images/9.jpg';
import image10 from './Images/10.jpg';
import image11 from './Images/11.jpg';
import image12 from './Images/12.jpg';
import image13 from './Images/13.jpg';
import image14 from './Images/14.jpg';
import image15 from './Images/15.jpg';
import image16 from './Images/16.jpg';
import image17 from './Images/17.jpg';
import image18 from './Images/18.jpg';
import image19 from './Images/19.jpg';
import image20 from './Images/20.jpg';
import image21 from './Images/21.jpg';
import image22 from './Images/22.jpg';
import image23 from './Images/23.jpg';
import image24 from './Images/24.jpg';
import image25 from './Images/25.jpg';
import image26 from './Images/26.jpg';
import image27 from './Images/27.jpg';
import image28 from './Images/28.jpg';
import image29 from './Images/29.jpg';
import kissgif from './Images/kiss.gif';

function App() {
  const [showBomb, setShowBomb] = useState(false);

  const handleClick = () => {
    setShowBomb(true);
    setTimeout(() => {
      setShowBomb(false);
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      const lines = document.querySelectorAll('.line');

      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const line = lines[index];

        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

        // Check if the line is between two items
        const prevItem = timelineItems[index - 1];
        const nextItem = timelineItems[index + 1];

        if (isInViewport) {
          line.classList.add('intense');
        } else if (
          (prevItem && prevItem.getBoundingClientRect().bottom < 0) &&
          (nextItem && nextItem.getBoundingClientRect().top > window.innerHeight)
        ) {
          line.classList.add('intense');
        } else {
          line.classList.remove('intense');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to set the right state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Unique messages for each image
  const messages = [
    'I love you love for who you are and what you have',
    'Even though you always tell me about what you can offer,',
    'You gave all the things I want and I need',
    'You have sacrificed your life for me',
    'You offered me your time, effort and especially patience',
    'You made me happy all the time we met',
    'You gave me chills and sweets when I am with you',
    'Bisan la most of the time pasaway ako, but still you tried to understand',
    'You choose me over your pride',
    'I am proud of having you in my life and I thank God for that',
    'I thank Him for giving an only one Christina',
    'I thank Him for giving you as my strength during my down times',
    'I have promised na dire ko na ikaw papasakitan',
    'I will try to double or bisan triple na pag iisip before ak magdecide into something',
    'Love, I need you all the time. Without you, it is like I am empty as a whole ',
    'Dere ko kaya na mafeel ko na may kulang ha akon kun waray ka',
    'You made me realized the whole concept of life',
    'It is to be with someone who will carry away your stress, boredom, pressure, sadness and all negative thoughts',
    'Sanglit love natapod gud ako ha imo na ako la. Trust me ikaw liwat nak aasawaon',
    'Happy 15th Monthsarry My Love',
    'Pasensya na kun medyo late hehe',
    'Gintry ko akon best as developer boyfriend to make this one',
    'Para maiba naman. Hoping na maruyagan mo my love hehe',
    'Let us stick to the plan and stick together',
    'I love you, my love, and I will love you forever MUUUUAAAAH',
  ];

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick} className="bomb-button">
          Kiss Me, I mean Click Me!
        </button>
        {showBomb && (
          <div className="bomb-effect">
            💥 <span>Happy 15th Monthsarry My Love!</span> 💥
          </div>
        )}

        <p className="sweet-text">Scroll for more sweetness</p>

        <div className="timeline">
          {[
            image5, image7, image8, image9, image10,
            image11, image12, image13, image14, image15, image16,
            image17, image18, image19, image20, image21, image22,
            image23, image24, image25, image26, image27, image28, image29, kissgif
          ].map((image, index) => (
            <div className="timeline-item" key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
              <div className="line"></div>
              <div className="message">{messages[index]}</div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
