import React from "react";
import Avatar from "../Avatar/Avatar";

const CardHeader = () => {
    return ( 
        <div className="h-28 mb-4 flex flex-row gap-4">
            <Avatar />
            <div className="flex flex-col justify-center items-start">
                <div className="text-2xl"><a href="">@shanselman</a></div>
                <div className="text-xl"><a href="">Seattle, WA</a></div>
            </div>
        </div>
     );
}
 
export default CardHeader;