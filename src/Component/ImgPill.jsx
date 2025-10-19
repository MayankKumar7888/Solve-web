import React from 'react'

export default function ImgPill({ img, onClick, para }) {
  return (
    <div className='img-pill-box' onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <img src={img} className="img-pill" fetchpriority="high" alt="lookbook product" />
      {para && <p className="img-description">{para}</p>}
    </div>
  );
}


