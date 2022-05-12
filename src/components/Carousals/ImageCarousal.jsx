import React from 'react';

const ImageCarousal = (props) => {
    return (
        <div className="W-96 h-96">
            <img src={`${props.image}`} alt="Loading Image .... " className="w-full h-full"/>
        </div>
    )
}
export default ImageCarousal;