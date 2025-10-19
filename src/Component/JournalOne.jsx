import React from "react";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import Img1 from "../assets/jason-wang-NxAwryAbtIw-unsplash.jpg";
import Divider from "@mui/material/Divider";
import JournalDesign from "../Component/JournalDesign";
import Img2 from "../assets/darren-ahmed-arceo-jqyXMfuCBqs-unsplash.jpg";
import Room1Help from "../Component/Room1Help";
import Footer from "../Component/Footer";

export default function JournalOne() {
  const DesignInfo = [
    {
      xs: 12,
      sm: 6,
      md: 3,
      title: "Category",
      subtitle: "Trends",
    },
    {
      xs: 12,
      sm: 6,
      md: 3,
      title: "Date",
      subtitle: "July 21, 2022",
    },
    {
      xs: 12,
      sm: 6,
      md: 3,
      title: "Read",
      subtitle: "12 Min",
    },
    {
      xs: 12,
      sm: 6,
      md: 3,
      title: "Author",
      subtitle: "Jakob Grønberg",
    },
  ];
  return (
    <>
      <div className="journal1">
        <Navbar navColor="var(--txt1-clr)" />

        <div className="journal1-box1">
          <Grid container>
            {DesignInfo.map((info) => (
              <Grid className="journal1-box1-inner" item size={{ xs: info.xs, md: info.md }}>
                <h3 className="journal1-box1-heading">{info.title}</h3>
                <h6 className="journal1-box1-subheading">{info.subtitle}</h6>
              </Grid>
            ))}
          </Grid>
        </div>

        <div className="journal1-box2">
          <h2 className="journal1-box2-heading">
            <span>Interior</span>
            <br /> <span>Design</span> <br />
            <span>Trends</span> <span>2022</span>
          </h2>
        </div>

        <img className="journal1-box3" src={Img1} alt="Design" />

        <Grid container className="journal1-box4">
          <Grid className="journal1-box4-inner" item size={{ xs: 12, md: 10 }} >
            <div className="journal1-box4-inner-box1">
              <p className="journal1-box4-inner-box1-para">
                Mauris cursus mattis molestie a iaculis at erat pellentesque
                adipiscing. Netus et malesuada fames ac turpis egestas integer
                eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel
                fringilla est ullamcorper eget nulla facilisi etiam. Velit
                egestas dui id ornare arcu odio ut. Felis donec et odio
                pellentesque diam volutpat commodo sed egestas.
              </p>
              <p className="journal1-box4-inner-box1-para">
                Turpis egestas integer eget aliquet nibh praesent tristique. Et
                malesuada fames ac turpis. Etiam dignissim diam quis enim
                lobortis scelerisque fermentum dui faucibus. Dictum fusce ut
                placerat orci nulla pellentesque dignissim. Lectus magna
                fringilla urna porttitor rhoncus dolor purus non enim. Purus in
                massa tempor nec feugiat.
              </p>
              <p className="journal1-box4-inner-box1-para">
                Nec feugiat in fermentum posuere. Lacus viverra vitae congue eu
                consequat ac. Tellus molestie nunc non blandit massa. Pharetra
                pharetra massa massa ultricies mi quis. Nisi vitae suscipit
                tellus mauris a diam maecenas sed enim. Congue nisi vitae
                suscipit tellus mauris a. Mauris augue neque gravida in
                fermentum et sollicitudin ac orci.
              </p>
              <p className="journal1-box4-inner-box1-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Turpis massa sed elementum tempus egestas sed sed risus. Elit
                eget gravida cum sociis. Scelerisque eu ultrices vitae auctor eu
                augue ut lectus arcu. Vulputate eu scelerisque felis imperdiet
                proin. Lobortis elementum nibh tellus molestie. Eget aliquet
                nibh praesent tristique magna sit amet purus. Risus nullam eget
                felis eget nunc lobortis. Dolor sit amet consectetur adipiscing
                elit duis. Eros in cursus turpis massa tincidunt dui ut ornare.
                Morbi tristique senectus et netus et. Urna duis convallis
                convallis tellus id. Magna sit amet purus gravida quis blandit
                turpis cursus. Eu scelerisque felis imperdiet proin fermentum
                leo. Sed id semper risus in hendrerit gravida rutrum. Integer
                quis auctor elit sed vulputate mi. Aliquam etiam erat velit
                scelerisque in dictum non consectetur. Sagittis aliquam
                malesuada bibendum arcu vitae.
              </p>
              <h4 className="journal1-box4-inner-box1-heading">Lorem Ipsum</h4>
              <p className="journal1-box4-inner-box1-para">
                Turpis egestas integer eget aliquet nibh praesent tristique. Et
                malesuada fames ac turpis. Etiam dignissim diam quis enim
                lobortis scelerisque fermentum dui faucibus. Dictum fusce ut
                placerat orci nulla pellentesque dignissim. Lectus magna
                fringilla urna porttitor rhoncus dolor purus non enim. Purus in
                massa tempor nec feugiat.
              </p>
              <p className="journal1-box4-inner-box1-para">
                Nec feugiat in fermentum posuere. Lacus viverra vitae congue eu
                consequat ac. Tellus molestie nunc non blandit massa. Pharetra
                pharetra massa massa ultricies mi quis. Nisi vitae suscipit
                tellus mauris a diam maecenas sed enim. Congue nisi vitae
                suscipit tellus mauris a. Mauris augue neque gravida in
                fermentum et sollicitudin ac orci.
              </p>
            </div>

            <div className="divider-box">
              <Divider className="divider" />
            </div>

            <div className="journal1-box4-inner-box2">
              <h2 className="journal1-box4-inner-box2-heading">
                Have no fear of perfection - you’ll never reach it.
              </h2>
              <p className="journal1-box4-inner-box2-subheading">Salvador Dali</p>
            </div>

            <div className="divider-box">
              <Divider className="divider" />
            </div>

            <div className="journal1-box4-inner-box3">
              <h4 className="journal1-box4-inner-box3-heading">Lorem Ipsum</h4>
              <p className="journal1-box4-inner-box3-para">
                Turpis egestas integer eget aliquet nibh praesent tristique. Et
                malesuada fames ac turpis. Etiam dignissim diam quis enim
                lobortis scelerisque fermentum dui faucibus. Dictum fusce ut
                placerat orci nulla pellentesque dignissim. Lectus magna
                fringilla urna porttitor rhoncus dolor purus non enim. Purus in
                massa tempor nec feugiat.
              </p>
              <p className="journal1-box4-inner-box3-para">
                Nec feugiat in fermentum posuere. Lacus viverra vitae congue eu
                consequat ac. Tellus molestie nunc non blandit massa. Pharetra
                pharetra massa massa ultricies mi quis. Nisi vitae suscipit
                tellus mauris a diam maecenas sed enim. Congue nisi vitae
                suscipit tellus mauris a. Mauris augue neque gravida in
                fermentum et sollicitudin ac orci.
              </p>
            </div>
          </Grid>
        </Grid>
        <JournalDesign
          trends={"Trends"}
          date={"July 21, 2022"}
          title={
            <>
              <span>Minimal</span> <span>Interior</span>
            </>
          }
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nisi est sit amet facilisis magna. Odio tempor orci dapibus ultrices in iaculis."
          }
          imgSrc={Img2}
        />
        <Divider sx={{ mt: 5 }} />
        <Room1Help />
        <Footer />
      </div>
    </>
  );
}
