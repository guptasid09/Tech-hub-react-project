import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillFacebook,AiFillYoutube} from 'react-icons/ai'

const Home = () => {
  return (
    <>
     <div className='home' id="home">
        <main>
            <h1>KLG CLASSES</h1>
            <p>Solution to all your problems</p>

        </main>


    </div>
    <div className="home2">
        <img src={vg} alt='graphics'/>
        <div>
            
            <p>We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children and make them smartest.</p>

        </div>


    </div>
<div className='home3' id="about"> 
<div>
<h1>Who are we?</h1>
<p>We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children and make them smartest. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum placeat consequatur id et, nostrum nisi sed nam molestiae. Fugiat ipsa iusto neque excepturi, velit incidunt error voluptate dignissimos eius.</p>
</div>
</div>

<div className= 'home4' id="brands">
<div>
    <h1>Brands</h1>
   <article>
    <div style={
        { animationDelay: "0.3s",}}>
    <AiFillAmazonCircle />
    <p>Amazon</p>
    </div>
    <div style={
        { animationDelay: "0.5s",}}>
        <AiFillGoogleCircle />
        <p>Google</p>
    </div>
    <div style={
        { animationDelay: "0.7s",}}>
        <AiFillFacebook />
        <p>Facebook</p>
    </div>
    <div style={
        { animationDelay: "1s",}}>
        <AiFillYoutube />
        <p>Youtube</p>
    </div>

   </article>



</div>

</div>
 
    </>
   
  );
}

export default Home;