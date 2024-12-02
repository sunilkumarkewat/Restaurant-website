import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          p:2,
          textAlign:'center',
          "& h4": {
            fontWeight:"bold",
            my:2,
            fontSize:"2rem"
          },
          "& p": {
            textAlign:'justify',
          },
          "@media (max-width:600px)" :{
            mt:0
          }
        }}>
           <Typography variant='h4'>
            WELCOME TO MY RESTAURANT
           </Typography>
           <p>
           Welcome to Savor Haven’s official website, your one-stop destination for everything food and flavor! Our website is designed to provide a seamless experience, blending functionality with elegance to reflect the charm of our restaurant.

Explore our dynamic menu, featuring a rich variety of globally inspired dishes, from hearty entrees to decadent desserts. Each dish is showcased with vivid imagery and detailed descriptions to whet your appetite. For convenience, our interactive reservation system lets you book your table instantly—perfect for planning a romantic date night or a family gathering.

Hungry but staying in? Use our online ordering feature for quick delivery or pickup, bringing the essence of our kitchen straight to your door. Don’t forget to check out our daily specials and exclusive offers, updated regularly to give you something new to savor.
           </p>
           <br/>
           <p>
           Dive into our gallery, where you can explore photos of our signature dishes, cozy ambiance, and recent events. Interested in what others are saying? Visit the testimonials section to read reviews from our satisfied guests—or share your own dining experience.

Looking for inspiration? Our blog covers everything from behind-the-scenes insights into our kitchen to recipes and cooking tips from our chefs. Stay in the loop by subscribing to our newsletter, where you’ll receive updates on events, promotions, and new menu additions.

Whether you're dining in or exploring from afar, our website is designed to keep you connected to the flavors of Savor Haven. Visit SavorHaven.com today and embark on a virtual culinary journey!
           </p>
        </Box>
    </Layout>
  )
}

export default About