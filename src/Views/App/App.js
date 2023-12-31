    import  React, { useEffect, useState }  from "react";
import "./App.css"
import { phonebook } from "./../../Util/Data"
import ContactCard from "../../Component/ContactCard/ContactCard";
function App(){
    const[contacts, setContacts]=useState(phonebook); 
    const [searchTerm, setSearchTerm] =useState('') ;
    
    useEffect(()=>{
const filteredContacts= phonebook.filter((contact)=>{
    const name =contact.name.toLocaleLowerCase();
    const mobile =contact.mobile.toString();
 const query =searchTerm.toLocaleLowerCase();
    return (
        name.includes(query) || mobile.includes(query)
       
    )

})
setContacts(filteredContacts);
}

    ,[searchTerm])
    return(
        <>
        <h1 className="heading">Contact List</h1>
        <input type=" text" placeholder="search" className="searchbar" value={searchTerm}
        onChange={(e)=>{
            setSearchTerm(e.target.value)
        }}/>
     <div>
       {contacts.map((contact, index)=>{
     
            const {name, mobile} = contact;    
            return <ContactCard key={index} name={name} mobile={mobile}/>
    })}
   
     </div>
        </>
    )
}
export default App
