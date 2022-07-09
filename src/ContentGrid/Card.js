import React from "react";
import CardHeader from "./CardHeader";
import Phrase from "./Phrase";
const Card = () => {
    return ( 
    <div className="w-100 h-80 p-4 rounded-lg drop-shadow-lg bg-blue-50">
        <CardHeader/>
        <Phrase />
        
    </div> )
}
 
export default Card;