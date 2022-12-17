//custom hooks is used for splitting logic inorder not to repeat the logic

import {useEffect} from "react";

function useGetDataHook(a, b, c, d) {
    useEffect( ()=>{
        a && getData()
    }, [a]);

    const getData = () => {
        b("hello", c);
        d([1,2,3]);
    };
    return "Bobby" // Bobby is called immediately before useGetDataHook cos custom hook has useEffect timer
};

export default useGetDataHook;