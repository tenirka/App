import React from "react";
import { Navbar, Container } from "react-bootstrap";
import cook from "./images/cook.jpg";
// import {
//   FacebookShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   TelegramShareButton,
//   WhatsappShareButton,
//   PinterestShareButton,
//   VKShareButton,
//   OKShareButton,
//   FacebookShareCount,
//   VKShareCount,
//   OKShareCount,
//   TumblrShareCount,
//   FacebookIcon,
//   TwitterIcon,
//   TelegramIcon,
//   WhatsappIcon,
//   LinkedinIcon,
//   PinterestIcon,
//   VKIcon,
//   OKIcon
// } from 'react-share';

class Footer extends React.Component {
  render() {
    return (
      <Navbar
        expand="lg"
        sticky="bottom"
        style={{
          background: "#242424",
          paddingTop: "1.875rem",
          borderBottom: "1px solid #242424",
          position: "relative",
          height: "180px",
          justifyContent: "space-between"
        }}
      >
        <Container style={{ margin: "5px", width: "400px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap"
            }}
          >
            <div style={{ margin: "20px" }}>
              <img
                src={cook}
                alt=""
                style={{ width: "90px", height: "90px", borderRadius: "50%" }}
              />
            </div>
            <div style={{ margin: "5px" }}>
              <p style={{ color: "rgb(129, 131, 126)", fontFamily: "serif" }}>
                Here you will find many new culinary ideas, become the author
                ofyour own Culinary Book, meet like-minded friends and you can
                chat about everything in the world!
              </p>
            </div>
          </div>
        </Container>
        <div style={{ margin: "5px", width: "400px", marginTop: "100px" }}>
          <p
            style={{
              color: "rgb(129, 131, 126)",
              fontFamily: "serif",
              fontSize: "10px"
            }}
          >
            © 2019 ООО «Home-cooking.ru» — delicious recipes. All rights
            reserved
          </p>
        </div>
      </Navbar>
    );
  }
}

export default Footer;