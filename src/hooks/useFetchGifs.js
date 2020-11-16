import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFechtGifs= (category) => {

    const [state, setState] = useState(
        {
            data: [],
            loading:true
        }
    );

    useEffect(()=>{
     
        
            //getGifs(category).then(imgs => setimages(imgs));
            getGifs(category).then(imgs =>{
                setState({
                    data: imgs,
                    loading: false
                });
            });
    

    },[category]);


    return state;

}