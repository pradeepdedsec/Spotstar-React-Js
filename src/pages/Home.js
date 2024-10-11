import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/home.css'
import {  useAuth } from '../App'

const Home = () => {

  let {currentUser} =useAuth();

  const [username,setUsername]=useState("");

  useEffect(()=>{
    setUsername(currentUser);
  },[currentUser])

  

  return (
    <>
    <div className='spotstar-home'>

        <div className='spot-total'>
            <div>
              <h1>Welcome, {username}</h1>
              <p>Choose your  favorite spot and get ready to explore!</p>
            </div>
            <div className='spot-home-div1'>
                <Link to={"/MusicHome"}><img  className='dynamic-img' src={require("../media/images/home/Music.png")} alt="music" /></Link>
                <Link to={"/VideoHome"}><img className='dynamic-img' src={require("../media/images/home/Movies.png")} alt="video" /></Link>
            </div>
        </div>

        
        
    </div>
    </>
    
  )
}

export default Home