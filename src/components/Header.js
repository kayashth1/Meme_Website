import React from "react"
import "./style.css"
import img from "../Images/trollface_PNG48.png"
export default function Header() {
    return (
        <header className="header">
            <img className="header--image" alt="header-img" src={img} />
            <h2 className="header--title">Meme Website</h2>
            <h4 className="header--project">Yash Shrivastva</h4>
        </header>
    )
}