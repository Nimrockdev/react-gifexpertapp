import React from 'react'
import { useFechtGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setimages] = useState([]);
    const {data:images, loading} = useFechtGifs(category);

    return (
        <>
            <h3 className= " animate__animated animate__fadeIn">{category}</h3>
            {/* {loading ? 'Cargando...' : 'Cargado'} */}
            {loading && <p className= "animate__animated animate__flash">Loading</p>}
            <div className= "card-grid ">
                
                    {   //Usamos desustructuracion
                        images.map( img => (
                            <GifGridItem 
                                key = {img.id}
                                {...img}
                            />
                        ))
                    }
                
            </div>
        </>
    )

}
