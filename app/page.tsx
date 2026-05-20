"use client;"

import { fetchImage } from "./fetch_image";
import { connection } from "next/server";


export default async function Home() {
  await connection();
  const image=await fetchImage();
  console.log("Home:画像を取得しました",image);
  return (

    <div className="flex flex-col items-center justify-center gap-4 h-screen text-[80px]">
      <a href="/cat" className="hover:text-blue-500">Cat</a>
      <a href="/3narabe" className="hover:text-blue-500">3narabe</a>
    </div>
  );
}
