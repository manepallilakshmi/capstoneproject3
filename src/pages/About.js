import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Introducing "Flavors of Elegance," a culinary haven where gastronomic dreams come to life. 
        Nestled in the heart of the city, our restaurant invites you on a journey of exquisite 
        flavors and impeccable service. Our menu is a symphony of diverse tastes, carefully 
        crafted by our talented chefs who blend tradition with innovation. From savoring mouthwatering 
        appetizers to indulging in decadent desserts, every dish is a masterpiece, prepared with locally 
        sourced, fresh ingredients. Whether you're seeking a romantic dinner, a lively gathering with 
        friends, or a special celebration, "Flavors of Elegance" offers an elegant and inviting ambiance
        for all occasions. Join us to experience a delightful fusion of culinary artistry and hospitality,
        making each visit a memorable culinary adventure.
        </p>
        <br />
        <p>
        Our restaurant's design is a harmonious blend of contemporary aesthetics and timeless charm,
         creating an inviting atmosphere that complements your dining experience. We take pride in our
          commitment to sustainability, sourcing ingredients from local farmers and producers, ensuring 
          that each dish not only tantalizes your taste buds but also supports our community.
        At "Flavors of Elegance," we believe in celebrating the diversity of global cuisine. 
        Our menu features a wide array of dishes, from classic comfort foods to innovative culinary 
        creations, prepared with meticulous attention to detail. Our dedicated staff is passionate 
        about providing you with an exceptional dining journey, offering warm hospitality and 
        personalized recommendations.

        Whether you're a connoisseur of fine dining or simply seeking a delightful escape from the 
        ordinary, "Flavors of Elegance" promises an unforgettable experience. We look forward to 
        welcoming you and turning your dining moments into cherished memories. Come, savor the elegance,
         and let your senses embark on a gastronomic adventure like no other.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
