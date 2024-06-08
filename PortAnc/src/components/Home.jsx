import "./Home.css"
import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

const Home = () => {

    const resumePath = "./resume.pdf"


    const handleDownload = () => {

        window.location.href = resumePath;
    }
    return (
        <div className="hero">
            <div className="image-flex">
                <img src="../Anchal.png" alt="" />
            </div>
            <div className="flex-for">
                 <h1>Hi,<span>Im Anchal Bhandari</span><br></br>
                 IT graduate and Web Developer</h1>
                 <div className="socials">
            <Social/>
           </div>
                </div>

          
           

        </div>
    )
}

export default Home