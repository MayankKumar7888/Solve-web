import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import ImgPill from '../Component/imgPill';
import Img1 from '../assets/hemanth-nirujogi-Ghxq6VXEgOM-unsplash.jpg';
import Img2 from '../assets/federico-giampieri-bYh_d5zDEAc-unsplash.jpg';
import Img3 from '../assets/laura-davidson-1vIHVh9OaVI-unsplash.jpg';
import Img4 from '../assets/vincent-wachowiak-8gCmEBVl6aI-unsplash.webp';
import Img5 from '../assets/simon-humler-Gx3Hm1NtktQ-unsplash.webp';
import Img6 from '../assets/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg';
import Img7 from '../assets/kirill-1LYTR3hkc4g-unsplash.jpg';
import Img8 from '../assets/pexels-anna-nekrashevich-8989344.webp';
import Img9 from '../assets/jean-philippe-delberghe-feijc-nqWKM-unsplash.webp';
import Img10 from '../assets/tu-tu-QZGQO3NvsLo-unsplash.jpg';
import Img11 from '../assets/pexels-whynugrohou-3097112.webp';
import Img12 from '../assets/nathan-van-egmond-0IwypLLbHiA-unsplash.jpg';
import Img13 from '../assets/jeremy-sallee-YpVpVb0RedQ-unsplash.webp';
import Img14 from '../assets/pexels-heyho-6032225.webp';
import Img15 from '../assets/pexels-lysenkow-2258083.webp';

export default function LookBook() {
  const [overlayImg, setOverlayImg] = useState(null);
  const [imgHeading, setImgHeading] = useState('');
  const [imgText, setImgText] = useState('');

  const handleImageClick = (img, heading, text) => {
    setOverlayImg(img);
    setImgHeading(heading);
    setImgText(text);
  };

  const imageDetails = {
    [Img1]: { heading: 'Urban Essence', text: 'Modern urban style with minimal tones.' },
    [Img2]: { heading: 'Evening Glow', text: 'Elegant evening vibes with soft texture.' },
    [Img3]: { heading: 'Rustic Charm', text: 'Natural light embrace with rustic finish.' },
    [Img4]: { heading: 'Contrast Motion', text: 'Casual comfort redefined through contrasts.' },
    [Img5]: { heading: 'Layered Sophistication', text: 'Sophisticated layering for effortless grace.' },
    [Img6]: { heading: 'Industrial Spirit', text: 'Industrial-inspired look with clean edges.' },
    [Img7]: { heading: 'Modern Grace', text: 'Soft aesthetics blended with modern elegance.' },
    [Img8]: { heading: 'Editorial Focus', text: 'Editorial fashion with chic highlights.' },
    [Img9]: { heading: 'Serene Detail', text: 'Refined shades capturing serene detail.' },
    [Img10]: { heading: 'Playful Tone', text: 'Playful textures with vibrant balance.' },
    [Img11]: { heading: 'Street Pulse', text: 'Street-style energy with timeless touch.' },
    [Img12]: { heading: 'Calm Bloom', text: 'Calm hues evoking relaxed sophistication.' },
    [Img13]: { heading: 'Creative Flow', text: 'Dynamic shot expressing creative motion.' },
    [Img14]: { heading: 'Contrast Lines', text: 'Minimal streetwear designed for contrast.' },
    [Img15]: { heading: 'Classic Edge', text: 'Classic palette balanced with confidence.' }
  };

  return (
    <>
      <div className='lookbook'>
        <Navbar navColor="var(--txt1-clr)" />
        <div className='lookbook-inner'>
          <div className='box1'>
            <ImgPill img={Img1} onClick={() => handleImageClick(Img1, imageDetails[Img1].heading, imageDetails[Img1].text)} />
            <ImgPill img={Img2} onClick={() => handleImageClick(Img2, imageDetails[Img2].heading, imageDetails[Img2].text)} />
          </div>
          <div className='box2'>
            <ImgPill img={Img3} onClick={() => handleImageClick(Img3, imageDetails[Img3].heading, imageDetails[Img3].text)} />
            <ImgPill img={Img4} onClick={() => handleImageClick(Img4, imageDetails[Img4].heading, imageDetails[Img4].text)} />
            <ImgPill img={Img5} onClick={() => handleImageClick(Img5, imageDetails[Img5].heading, imageDetails[Img5].text)} />
          </div>
          <div className='box3'>
            <ImgPill img={Img6} onClick={() => handleImageClick(Img6, imageDetails[Img6].heading, imageDetails[Img6].text)} />
            <ImgPill img={Img7} onClick={() => handleImageClick(Img7, imageDetails[Img7].heading, imageDetails[Img7].text)} />
          </div>
          <div className='box4'>
            <ImgPill img={Img8} onClick={() => handleImageClick(Img8, imageDetails[Img8].heading, imageDetails[Img8].text)} />
            <ImgPill img={Img9} onClick={() => handleImageClick(Img9, imageDetails[Img9].heading, imageDetails[Img9].text)} />
            <ImgPill img={Img10} onClick={() => handleImageClick(Img10, imageDetails[Img10].heading, imageDetails[Img10].text)} />
          </div>
          <div className='box5'>
            <ImgPill img={Img11} onClick={() => handleImageClick(Img11, imageDetails[Img11].heading, imageDetails[Img11].text)} />
            <ImgPill img={Img12} onClick={() => handleImageClick(Img12, imageDetails[Img12].heading, imageDetails[Img12].text)} />
          </div>
          <div className='box6'>
            <ImgPill img={Img13} onClick={() => handleImageClick(Img13, imageDetails[Img13].heading, imageDetails[Img13].text)} />
            <ImgPill img={Img14} onClick={() => handleImageClick(Img14, imageDetails[Img14].heading, imageDetails[Img14].text)} />
            <ImgPill img={Img15} onClick={() => handleImageClick(Img15, imageDetails[Img15].heading, imageDetails[Img15].text)} />
          </div>
        </div>

        {overlayImg && (
          <div className="center-overlay" onClick={() => setOverlayImg(null)}>
            <div className="center-content" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setOverlayImg(null)}>Close</button>
              <h2 className="overlay-heading">{imgHeading}</h2>
              <ImgPill className="img-overlay" img={overlayImg} />
              <p className="overlay-text">{imgText}</p>
              <button className="action-btn">Get Product</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
