import { useEffect } from "react";
import { useState } from "react";

const useSize = () => {

const [window_size,setWindow_size]=useState({
    height:undefined,
    width:undefined,
})

useEffect(()=>{
    const handleSize=()=>{
        setWindow_size({
            height:window.innerHeight,
            width:window.innerWidth,
        })
    }


window.addEventListener('resize',handleSize);
handleSize();

return()=>window.removeEventListener('resize',handleSize);
},[])

return window_size;
};

export default useSize;