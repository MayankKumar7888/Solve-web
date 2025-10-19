import img1 from '../assets/circle1.webp'
import img2 from '../assets/circle2.webp'
import img3 from '../assets/circle3.jpg'
import img4 from '../assets/circle4.webp'
import img5 from '../assets/circle5.webp'
import img6 from '../assets/circle6.jpg'
import CardMedia from '@mui/material/CardMedia'

export default function Images(){
    return(
        <>
           <div className="images">
                <h2 className="images-heading">sølve</h2>
                <CardMedia className='images-img1' component="img" image={img1} alt="Your alternate text" sx={{ display: { xs: 'none', sm: 'none' , md: 'flex'}}} />
                <CardMedia className='images-img2' component="img" image={img2} alt="Your alternate text" sx={{ display: { xs: 'none', sm: 'none' , md: 'flex'}}} />
                <CardMedia className='images-img3' component="img" image={img3} alt="Your alternate text" sx={{ display: { xs: 'none', sm: 'none' , md: 'flex'}}} />
                <CardMedia className='images-img4' component="img" image={img4} alt="Your alternate text" sx={{ display: { xs: 'none', sm: 'none' , md: 'flex'}}} />
                <CardMedia className='images-img5' component="img" image={img5} alt="Your alternate text" sx={{ display: { xs: 'none', sm: 'none' , md: 'flex'}}} />
                <CardMedia className='images-img6' component="img" image={img6} alt="Your alternate text" sx={{ display: { xs: 'none', sm: 'none' , md: 'flex'}}} />
           </div>
        </>
    )
}