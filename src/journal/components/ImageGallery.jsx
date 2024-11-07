import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Button,
  Box,
  Typography,
  ImageList,
  ImageListItem,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

export const ImageGallery = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);1
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 16px',
        overflow: 'hidden', // Oculta la barra de desplazamiento
      }}
    >
      <ImageList
        sx={{
          width: '100%',
          gap: 16,
          overflow: 'hidden', // Asegura que no haya desbordamiento
        }}
        cols={4}
        rowHeight={200}
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <ImageListItem key={index}>
              <Button onClick={() => handleClickOpen(image)} style={{ padding: 0 }}>
                <img
                  src={image}
                  alt="Imagen de la galería"
                  loading="lazy"
                  style={{
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 10,
                  }}
                />
              </Button>
            </ImageListItem>
          ))
        ) : (
          <Typography>No hay imágenes disponibles</Typography>
        )}
      </ImageList>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent style={{ position: 'relative', padding: 0 }}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagen seleccionada"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }} 
            />
          )}
          <IconButton
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transition: 'opacity 0.3s',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ImageGallery;
