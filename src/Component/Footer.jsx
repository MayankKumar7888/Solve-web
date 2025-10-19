import Divider from '@mui/material/Divider';
import FooterLinks from '../Component/FooterLinks'

export default function Footer(){

    const footerLink =[
        { 
            label: "Sølve", xs: 12, sm: 6, md: 3, 
            pages: [
                { label: "Home", path: "/" }, 
                { label: "Rooms", path: "/rooms" }, 
                { label: "Journal", path: "/journal" }, 
                { label: "Contact", path: "/contact" }, 
            ] 
        },
        {   label: "Shop",  xs: 12, sm: 6, md: 3, 
            pages: [
                { label: "Home", path: "/" },
                { label: "Rooms", path: "/rooms" },
                { label: "LookBook", path: "/lookbook" },
                { label: "Faq", path: "/faq" },
            ] 
        },
        {   label: "Webflow",  xs: 12, sm: 6, md: 3, 
            pages: [
                { label: "Styleguide", path: "/styleguide" },
                { label: "Licensing", path: "/licensing" },
                { label: "Changelog", path: "/changelog" },
            ] 
        },
        {   label: "Social",  xs: 12, sm: 6, md: 3, 
            pages: [
                { label: "Instagram", path: "/instagram" },
                { label: "Facebook", path: "/facebook" },
                { label: "TikTok", path: "/tiktok" },
            ] 
        }
]


    return(
        <>
            <Divider />
            <div className='footerLink'>
                <FooterLinks footerLinks={footerLink} />
                <p className='footer-line'>© 2022 Made by Pawel Gola. Powered by Webflow.</p>
            </div>
        </>
    );
}