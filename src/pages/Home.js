import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
//import Button from "../components/StyledHero";

export default function Home() {
  return (
    <React.Fragment>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subtitle="delux rooms starting at Rs 999"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <br></br>
      {/* <Button>hello</Button> */}
    </React.Fragment>
  );
}
