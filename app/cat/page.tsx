import { GoodButton } from "@/components/good_button";
import { connection } from "next/server";
import { fetchImage } from "../fetch_image";
import { CatImage } from "../cat_image";


export default async function Cat() {
  await connection();
  const image=await fetchImage();
  console.log("Cat:画像を取得しました",image);
  return (

    <div className="flex flex-col items-center justify-center gap-4 h-screen ">
      <GoodButton/>

      <CatImage url={image.url} />
    </div>
  );
}
