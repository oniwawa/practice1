"use client";
import { useState } from "react";
export function GoodButton() {
    const [count,setCount]=useState(2);
    const handleClick=()=>{
        setCount(count+1);
        if (count>=9){
            setCount(0);
        }
    };
    return (
        <button type="button" onClick={handleClick}className="group px-8 py-4 bg-black text-white hover:bg-pink-600 transition-colors rounded-lg">
            <span className="invisible group-hover:visible mr-2">♡</span>{count}
        </button>
    );
}
export default GoodButton;