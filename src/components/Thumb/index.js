import React from 'react';


//Styles
import {Image} from './Thumb.Styles';



const Thumb = ({image,clickable})=>(


    <div>
        <Image src={image} alt='movie-thumb' />
    </div>
);

export default Thumb;