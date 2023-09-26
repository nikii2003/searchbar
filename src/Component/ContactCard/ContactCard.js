import React from "react";
import "./ContactCard.css"
function ContactCard( {name , mobile}){
    return(
        <div className="contact-card">
            <h1>{name}</h1>
            <h3>{mobile}</h3>
        </div>
    )
}
export default ContactCard