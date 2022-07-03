import React from "react";
import Card from "./Card";
const ContentGrid = () => {
    return ( <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-blue-200">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div> );
}
 
export default ContentGrid;