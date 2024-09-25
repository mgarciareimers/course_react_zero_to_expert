import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

const ImageGallery = ({ urls }) => {
    return (
        <ImageList sx={{ width: '100%', height: 500 }} cols={ 4 } rowHeight={ 200 }>
          {
            urls.map((image) => (
              <ImageListItem key={ image }>
                <img
                  srcSet={ `${ image }?w=164&h=164&fit=crop&auto=format&dpr=2` }
                  src={ `${ image } ?w=164&h=164&fit=crop&auto=format` }
                  alt='Note image'
                  loading='lazy'
                />
              </ImageListItem>
            ))
          }
        </ImageList>
    );
}

export default ImageGallery;