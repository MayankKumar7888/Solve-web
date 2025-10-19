import React from 'react'
import Navbar from '../Component/Navbar'
import JournalDesign from '../Component/JournalDesign'
import Img1 from '../assets/jason-wang-NxAwryAbtIw-unsplash.jpg'
import Img2 from '../assets/darren-ahmed-arceo-jqyXMfuCBqs-unsplash.jpg'
import Img3 from '../assets/mark-chaves-MiDPt7D4WN8-unsplash.jpg'
import Divider from '@mui/material/Divider'
import OurStores from '../Component/OurStores'
import Footer from '../Component/Footer'

export default function Journal() {
  return (
    <>
       <div className="journal">
            <Navbar navColor="var(--txt1-clr)" />
            <div className="journal-inner">
                <h2 className="journal-heading">Journal</h2>
            </div>
            <JournalDesign
            trends={"Trends"}
            date={"July 21, 2022"}
            path={'/journalOne'}
            title={ 
                <>
                    <span>Interior</span>{' '}
                    <span>Design</span>{' '}
                    <span>Trends</span>{' '}
                    <span>2022</span>
                </>
            }
            para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nisi est sit amet facilisis magna. Odio tempor orci dapibus ultrices in iaculis.'}
            imgSrc={Img1}
            />
            <div className='divider-box'>
                <Divider className='divider' />
            </div>
            <JournalDesign
            trends={"Trends"}
            date={"July 21, 2022"}
            title={ 
                <>
                    <span>Minimal</span>{' '}
                    <span>Interior</span>
                </>
            }
            para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nisi est sit amet facilisis magna. Odio tempor orci dapibus ultrices in iaculis.'}
            imgSrc={Img2}
            />
            <div className='divider-box'>
                <Divider className='divider' />
            </div>
            <JournalDesign
            trends={"Trends"}
            date={"July 21, 2022"}
            title={ 
                <>
                    <span>Design</span>{' '}
                    <span>in</span>{' '}
                    <span>the</span>{' '}
                    <span>Future</span>
                </>
            }
            para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nisi est sit amet facilisis magna. Odio tempor orci dapibus ultrices in iaculis.'}
            imgSrc={Img3}
            />
            <Divider sx={{ mt: 5 }} />
            <OurStores />
            <Footer />
       </div>
    </>
  )
}
