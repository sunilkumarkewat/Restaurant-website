import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from "react-router-dom"
import Banner from "../images/back.jpg"
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
        <div className='Home' style={{backgroundImage:`url(${Banner})`}}>
          <div className='headerContainer'>
            <h1>Food Website</h1>
            <p>Best Food in India</p>
            <Link to='/menu'>
            <button>
              ORDER NOW
            </button>
            </Link>
           
          </div>
        </div>
    </Layout>
  )
}

export default Home