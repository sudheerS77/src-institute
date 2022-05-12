import React from 'react'
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery'


const GalleryComponent = ({name, galleryImages}) => {
  return (
    <div>
        <div className="mx-6 lg:mx-44 mt-10">
            <h1 className="text-lg md:text-xl font-light text-gray-400 pb-5">{name}</h1>
          <Gallery>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5"
              style={{ }}>
              {
                galleryImages.map((data) => (
                  <Item
                    original={data.image}
                    thumbnail={data.image}
                    width={data.width}
                    height={data.height}
                  >{
                      ({ref, open}) => (
                        <div className="shadow-2xl">
                            <img ref={ref} onClick={open} src={data.image} className="w-full h-full rounded-sm" />
                        </div>
                    )}
                  </Item>
                ))
              }        
            </div>
          </Gallery>  
        </div>      
    </div>
  )
}

export default GalleryComponent