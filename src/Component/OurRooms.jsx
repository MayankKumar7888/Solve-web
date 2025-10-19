import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import RoomDetail from '../Component/RoomDetail'
import img1 from '../assets/nathan-van-egmond-0IwypLLbHiA-unsplash.jpg'
import img2 from '../assets/tu-tu-QZGQO3NvsLo-unsplash.jpg'
import img3 from '../assets/maria-orlova-XmhAN9TYD50-unsplash.jpg'
import { NavLink } from 'react-router-dom';

export default function ourRooms(){
    const roomDetail = [
        { xs: 12, sm: 8, md: 4, img: img1, title: "Oslo" },
        { xs: 12, sm: 8, md: 4, img: img2, title: "NEw York" },
        { xs: 12, sm: 8, md: 4, img: img3, title: "Lisbon" }
    ]
    return(
        <>
           <div className="ourRooms">
                <h2 className="ourRooms-heading">Rooms</h2>
                <NavLink className='ourRooms-see-all' to="/rooms">see all <TrendingFlatIcon className='rightArrow-icon' /></NavLink>
                <RoomDetail roomsDetail={roomDetail} />
            </div>
        </>
    )
}

