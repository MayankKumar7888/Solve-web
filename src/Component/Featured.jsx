import FeaturedCard from "./FeaturedCard";
import img1 from '../assets/jean-philippe-delberghe-feijc-nqWKM-unsplash.webp'
import img2 from '../assets/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg'
import img3 from '../assets/vincent-wachowiak-8gCmEBVl6aI-unsplash.webp'


export default function Featured(){

    const featureInfo = [
      {
        xs: 12, sm: 8, md: 4,
        title: 'Modern Chair',
        img: img1,
        price: '$ 249.00 USD',
        isNew: true
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img2,
        title: 'Elegant Lamp',
        price: '$ 129.00 USD',
        isNew: false,
        path: '/lampShop'
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img3,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false
      }
    ]
    return(
        <>
          <div className="featured">
             <h2 className="featured-heading">Featured</h2>
             <FeaturedCard featuredInfo={featureInfo} />
          </div>
        </>
    )
}