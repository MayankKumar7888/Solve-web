import Stores from '../Component/Stores'
import img1 from '../assets/darshan-patel-DfzzpBRZCT0-unsplash.jpg'
import img2 from '../assets/tomas-anton-escobar-RhObAyRa1uQ-unsplash.jpg'

export default function OurStores(){
    const store = [
        {
            xs: 12, md: 6,
            title: 'Hamburg',
            img: img1,
            subtitle1: 'Sølve Store,',
            subtitle2: '22765 Hamburg'
        },
        {
            xs: 12, md: 6,
            title: 'Lisbon',
            img: img2,
            subtitle1: 'Sølve Store, ',
            subtitle2: '1049 Lisbon'
        }
    ]
    return(
        <>
           <div className="OurStores">
                <h2 className="OurStores-heading">Our Stores</h2>
                <Stores stores={ store } />
            </div>
        </>
    )
}