"use client";
import Image from "next/image";
import { useState } from "react";
import { fetchImage } from "./fetch_image";

type CatImageProps={
    url:string;
};

export function CatImage({url}:CatImageProps){
    const [imageUrl,setImageUrl]=useState(url);
    const refreshImage = async() =>{
        setImageUrl("");
        const image= await fetchImage();
        setImageUrl(image.url);
    }
    return(
        <div className="flex flex-col gap-4 items-center justify-center">
            <button onClick={refreshImage} className="bg-black hover:bg-yellow-300 text-white font-bold py-4 px-8 hover:text-black">GET OTHER CAT</button>
            <div className="h-60 w-60 line">
                {imageUrl && <Image src={imageUrl} alt="Cat" width={300} height={300} />}
            </div>
            
        </div>
    );
}