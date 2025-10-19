import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

export default function ProductInfo(props) {
    const drawerWidth = props.width;
    const { window, navColor } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ color: navColor }}>
            <Typography onClick={handleDrawerToggle} sx={{ my: 2, textAlign: "center", color: navColor }}>Close</Typography>
            <Divider />
            <div className="detail-box">
                <h3 className="detail-heading">Detail</h3>
                <p className="detail-para">
                    Mauris cursus mattis molestie a iaculis at erat pellentesque
                    adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A
                    diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est
                    ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare
                    arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo
                    sed egestas.
                </p>
                <ul className="detail-list">
                    <li>Proin fermentum leo vel orci porta non pulvinar</li>
                    <li>Diam phasellus vestibulum</li>
                    <li>Quisque egestas diam in arcu cursus</li>
                </ul>
                <Divider />
            </div>
            <div className="delivery-box">
                <h3 className="delivery-heading">Delivery</h3>
                <p className="delivery-para">
                    Mauris cursus mattis molestie a iaculis at erat pellentesque
                    adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A
                    diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est
                    ullamcorper eget nulla facilisi etiam.
                </p>
                <Divider />
            </div>
            <div className="return-box">
                <h3 className="return-heading">Returns</h3>
                <p className="return-para">
                    Mauris cursus mattis molestie a iaculis at erat pellentesque
                    adipiscing. Netus et malesuada fames ac turpis egestas integer eget.
                </p>
            </div>
        </Box>
    );

    const [value, setValue] = React.useState(2);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box className="tabBtn-box" sx={{ borderTop: 1, borderBottom: 1, borderColor: "divider" }}>
        <Tabs className="tabBtn-box-inner" value={value}onChange={handleChange} aria-label="tabs button box">
          <Tab className="tabBtn-label" label="Detail" aria-label="open drawer" onClick={handleDrawerToggle}/>
          <Tab className="tabBtn-label" label="Delivery" aria-label="open drawer" onClick={handleDrawerToggle}/>
          <Tab className="tabBtn-label" label="Returns" aria-label="open drawer" onClick={handleDrawerToggle}/>
        </Tabs>
      </Box>

      <nav>
        <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}
          sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, color: navColor } }} anchor="right" >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
