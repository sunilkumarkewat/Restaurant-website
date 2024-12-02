import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10 ,ml:10, "& h4":{fontWeight:'bold',mb:2}}}>
          <Typography variant="h4" >
            Contact My Restaurant
          </Typography>
          <p>
          Our Contact Us page makes it easy to connect with Savor Haven for any inquiries or reservations. Reach out to 
          us via our phone number or email for prompt assistance. Use our integrated contact form to share feedback, ask questions, 
          or make special requests. We’re here to ensure your dining experience is exceptional—let us know how we can help!
          </p>

        </Box>
        <Box  sx={{my:10 ,ml:10}}>
          <h3>Contact Details</h3>
          <SupportAgentIcon sx={{color:'red',pt:1}} />1800-0000-0000 (toll-free)
          <br/>
          <EmailIcon sx={{color:'skyblue',pt:1}} />help@gmail.com
          <br/>
          <CallIcon sx={{color:'green',pt:1}} />1234567890
        </Box>
    </Layout>
  )
}

export default Contact