import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FeaturedCard from './FeaturedCard';
import img1 from '../assets/jean-philippe-delberghe-feijc-nqWKM-unsplash.webp'
import img2 from '../assets/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg'
import img3 from '../assets/vincent-wachowiak-8gCmEBVl6aI-unsplash.webp'
import img4 from '../assets/maria-orlova-XmhAN9TYD50-unsplash.jpg'
import img5 from '../assets/pexels-lysenkow-2258083.webp'
import img6 from '../assets/dana-ward-sNQ63RBFvWc-unsplash.webp'
import img7 from '../assets/amirhossein-soltani-Y-L2l4rQkko-unsplash.webp'
import img8 from '../assets/jana-heinemann-xJUuJ2jmZFY-unsplash.webp'
import img9 from '../assets/natalia-y-NMtyjqXdi0k-unsplash.jpg'
import img10 from '../assets/rosemary-media-WPxAdzhvSAo-unsplash.webp'
import img11 from '../assets/rosemary-media-Lf9o5HrvCdI-unsplash.webp'
import img12 from '../assets/chris-kursikowski-wi6BNsaQbaI-unsplash.jpg'
import img13 from '../assets/_gazecapture-IKy7c9fwj2Y-unsplash.webp'
import img14 from '../assets/asr-design-studio-bzMGormuNLI-unsplash.webp'
import img15 from '../assets/tatyana-vega-oo6TvgJG_DQ-unsplash.webp'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ShopItems() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const featureInfo1 = [
      {
        xs: 12, sm: 8, md: 4,
        img: img4,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false,
        path: '/lampShop'
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img7,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false,
        path: '/lampShop'
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img8,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false,
        path: '/lampShop'
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img6,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img14,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: true
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img15,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false
      }
    ]

    const featureInfo2 = [
      {
        xs: 12, sm: 8, md: 4,
        img: img2,
        title: 'Elegant Lamp',
        price: '$ 129.00 USD',
        isNew: false
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img9,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: true
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img10,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img11,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img12,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img13,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: true
      }
    ]

    const featureInfo3 = [
      {
        xs: 12, sm: 8, md: 4,
        title: 'Modern Chair',
        img: img1,
        price: '$ 249.00 USD',
        isNew: true
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img3,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false
      },
      {
        xs: 12, sm: 8, md: 4,
        img: img5,
        title: 'Black Chair',
        price: '$ 199.00 USD',
        isNew: false
      }
    ]

  return (
    <Box className="navTabs">
      <Box className="navTab-inner" sx={{ borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='navTab-label' label="Sofa" {...a11yProps(0)} />
          <Tab className='navTab-label' label="Lamp" {...a11yProps(1)} />
          <Tab className='navTab-label' label="Chair" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel className="navTab-box" value={value} index={0}>
        <FeaturedCard featuredInfo={featureInfo1} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FeaturedCard featuredInfo={featureInfo2} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <FeaturedCard featuredInfo={featureInfo3} />
      </CustomTabPanel>
    </Box>
  );
}
