import React from "react";
import Navbar from "../Component/Navbar";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Room1Help from "../Component/Room1Help";
import Footer from "../Component/Footer";

export default function Faq() {
  return (
    <>
      <div className="faq">
        <Navbar navColor="var(--txt1-clr)" />
        <div className="faq-inner">
          <p className="faq-subheading">FAQ</p>
          <h2 className="faq-heading">Any Question</h2>
        </div>
        <Grid container className="faq-box">
          <Grid item size={{ xs: 12, md: 10 }}>
            <Divider />
            <div>
              <Accordion defaultExpanded className="accordion-box">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span" className="accordion-heading">How can I change or cancel my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordion-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Fermentum dui faucibus in ornare quam viverra orci
                    sagittis. Nisi est sit amet facilisis magna. Odio tempor
                    orci dapibus ultrices in iaculis. Sit amet cursus sit amet.
                    Turpis egestas sed tempus urna et. Enim tortor at auctor
                    urna nunc. Feugiat in fermentum posuere urna nec.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordion-box">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span" className="accordion-heading">Do I have to order online?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordion-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Fermentum dui faucibus in ornare quam viverra orci
                    sagittis. Nisi est sit amet facilisis magna. Odio tempor
                    orci dapibus ultrices in iaculis. Sit amet cursus sit amet.
                    Turpis egestas sed tempus urna et. Enim tortor at auctor
                    urna nunc. Feugiat in fermentum posuere urna nec.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordion-box">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span" className="accordion-heading">How can I change delivery address?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordion-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Fermentum dui faucibus in ornare quam viverra orci
                    sagittis. Nisi est sit amet facilisis magna. Odio tempor
                    orci dapibus ultrices in iaculis. Sit amet cursus sit amet.
                    Turpis egestas sed tempus urna et. Enim tortor at auctor
                    urna nunc. Feugiat in fermentum posuere urna nec.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordion-box">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span" className="accordion-heading">What is the return policy?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordion-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Fermentum dui faucibus in ornare quam viverra orci
                    sagittis. Nisi est sit amet facilisis magna. Odio tempor
                    orci dapibus ultrices in iaculis. Sit amet cursus sit amet.
                    Turpis egestas sed tempus urna et. Enim tortor at auctor
                    urna nunc. Feugiat in fermentum posuere urna nec.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
        <Room1Help />
        <Footer />
      </div>
    </>
  );
}
