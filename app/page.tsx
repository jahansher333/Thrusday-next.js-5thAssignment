import Image from "next/image";
import Header from "./components/Header/header";
export default function Home() {
  return (
    <div className="h-screen">
      <Header></Header>
      {/* Hero */}

      <div className="flex justify-center  h-[960.57px] m-[100.01px] w-[1271.01px] h-[]573.59px]">
           {/* div1 contant */}
            <div className="flex flex-col justify-start items-start ml-[40px] w-1/2 mt-[38px]">
              {/* h1 Heading */}
               {/* <span className="text-[50px] font-serif font-light">IMPECCABLE </span>
                <span className="text-[50px] font-serif font-light">CRAFTSMANSHIP AND</span> 
                <span className="text-[50px] font-serif font-light">FINESSE</span> */}
                <h1 className="text-[37.84px] w-[472.97px] font-serif font-medium text-[#000000]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
               {/* p paragraph */}
               <p className="text-[29.24px] font-serif  tracking-[2.5%] font-medium] leading-[48.1px] w-[798.9px] text-[#787054] mt-[15px]">
               An example of intricate workmanship and detail, 
               elegant necklaces and long and short chains form a part of our desirable collection.
               </p>
             
               {/* button */}
               <button className="bg-[#A29875] text-[#ffffff] font-serif font-medium text-[25px] w-[247.67px] h-[49.2px] mt-[50px] p-[8.6px] rounded-[8.6px] gap-[8.6px] hover:scale-50  hover:ease-in">
                 Explore Now
               </button>
            </div>
              {/* div 2 image   */}
            <div className="ml-[190px] ">
               <Image src="/photo-layer.png" alt="rs-layer-wrap ⏵ rs-layer" width={421.38} height={573.59}  className="relative"   />
               <Image src="/rs-layer-wrap ⏵ rs-layer.png" alt="rs-layer-wrap ⏵ rs-layer" width={370.1} height={573.6}  className="absolute top-[250.91px] left-[990.77px]" />
            </div>
        </div>

    </div>
  );
}
