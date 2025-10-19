import React from "react";
import Grid from "@mui/material/Grid";
import Img1 from "../assets/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash3.jpg";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import ProductInfo from "../Component/ProductInfo";
import FeaturedCard from "./FeaturedCard";
import img1 from '../assets/maria-orlova-XmhAN9TYD50-unsplash.jpg'
import img2 from '../assets/amirhossein-soltani-Y-L2l4rQkko-unsplash.webp'
import img3 from '../assets/jana-heinemann-xJUuJ2jmZFY-unsplash.webp'
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { add } from '../Store/CartSlice';


export default function LampShop() {
    const dispatch = useDispatch();
    const products = [
        { id: 1, img: Img1, name: 'Elegant Lamp', price: '$ 129.00 USD',
            para: 'Mauris cursus mattis molestie a iaculis at erat pellentesqueadipiscing. Netus et malesuada fames ac turpis egestas integer eget.'
        }
    ];
    const addToCart = (product) => {
        dispatch(add(product))
    };

    const featureInfo = [
        {
            xs: 12, sm: 8, md: 4, img: img1, title: 'Black Chair', price: '$ 199.00 USD', isNew: false,
            // path: '/lampShop'
        },
        {
            xs: 12, sm: 8, md: 4, img: img2, title: 'Black Chair', price: '$ 199.00 USD', isNew: false,
            // path: '/lampShop'
        },
        { 
            xs: 12, sm: 8, md: 4, img: img3, title: 'Black Chair', price: '$ 199.00 USD', isNew: false,
            // path: '/lampShop'
        }
    ]


    return (
        <>
            <div className="lamp">
                <Navbar navColor={{ xs: "var(--txt2-clr)", md: "var(--txt1-clr)" }} />
                <Grid container spacing={0} className="lampHero">
                    {products.map((product,idx) =>(
                        <>
                            <Grid item size={{ xs: 12, md: 6 }} className="lampInner-box1">
                                <img src={product.img} alt="Lamp" className="lamp-img" />
                            </Grid>
                            <Grid item size={{ xs: 12, md: 6 }} key={idx} className="lampInner-box2">
                                <div className="lampInner-box2-inner">
                                    <h2 className="lamp-heading">{product.name}</h2>
                                    <p className="lamp-price">{product.price}</p>
                                    <p className="lamp-para">{product.para}</p>
                                    <div className="btn-box">
                                        <NavLink className="btn" style={{ paddingLeft: "2.5em", paddingRight: "2.5em" }} >
                                            {idx + 1}
                                        </NavLink>
                                        <NavLink className="btn" onClick={() => addToCart(product)}>Add to card</NavLink>
                                    </div>
                                    <ProductInfo width={{ xs: "100%", md: "50.6%" }} />
                                </div>
                            </Grid>
                        </>
                    ))}
                </Grid> 
            </div>
            <div className="lamp-discription">
                <Grid container spacing={2} className="lamp-discription-inner" sx={{ my: {xs: 0 , md: 5} }}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <h2 className="discription-heading">Discription</h2>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }} sx={{ pl: {xs: 0 , md: 4} }}>
                        <div className="disctiption-inner-box">
                            <p className="discription-para">
                                Mauris cursus mattis molestie a iaculis at erat pellentesque
                                adipiscing. Netus et malesuada fames ac turpis egestas integer
                                eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel
                                fringilla est ullamcorper eget nulla facilisi etiam. Velit
                                dui id ornare arcu odio ut. Felis donec et odio
                                pellentesque diam volutpat commodo sed egestas. Auctor eu augue
                                ut lectus arcu bibendum at varius. Rhoncus mattis rhoncus urna
                                neque viverra justo nec ultrices.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="lamp-related">
                <h2 className="related-heading">Related</h2>
                <FeaturedCard featuredInfo={featureInfo} />
            </div>
            <Footer />
        </>
    );
}
