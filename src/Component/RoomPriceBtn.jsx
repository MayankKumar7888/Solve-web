import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function RoomPriceBtn(props) {
  return (
    <>
       <div className="roomPrice-btn">
            <img src={props.imgSrc} alt={props.title} />
            <div className="roomPrice-details">
                <h3 className="roomPrice-title">{props.title}</h3>
                <p className="roomPrice-price">{props.price}</p>
            </div>
            <TrendingFlatIcon className='rightArrow-icon' />
        </div>
    </>
  )
}
