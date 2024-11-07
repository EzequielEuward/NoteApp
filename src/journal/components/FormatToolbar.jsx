import { useState } from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import StyleIcon from '@mui/icons-material/Style';
import SaveIcon from '@mui/icons-material/Save';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from 'react-redux';

export const FormatToolbar = ({
  fileInputRef,
  onFileInputChange,
  setBold,
  setItalic,
  setStrikethrough,
  setNormal,
  increaseFontSize,
  decreaseFontSize,
  fontStyle,
  setTagDialogOpen,
  onSaveNote,
  onDelete,
  isSaving,
}) => {
  const dispatch = useDispatch();

  return (
    <Box mb={1} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" borderBottom={1} borderColor="divider" pb={1}>
      <Box display="flex" gap={1}>
        <IconButton onClick={() => fileInputRef.current.click()} color="primary" disabled={isSaving} sx={{ borderRadius: 0 }}>
          <FileUploadIcon />
        </IconButton>
        <input type="file" multiple ref={fileInputRef} onChange={onFileInputChange} style={{ display: 'none' }} />

        <IconButton onClick={setBold} sx={getButtonStyle(fontStyle, 'bold')}>
          <FormatBoldIcon />
        </IconButton>
        <IconButton onClick={setItalic} sx={getButtonStyle(fontStyle, 'italic')}>
          <FormatItalicIcon />
        </IconButton>
        <IconButton onClick={setStrikethrough} sx={getButtonStyle(fontStyle, 'line-through')}>
          <FormatStrikethroughIcon />
        </IconButton>
        <IconButton onClick={setNormal} sx={getButtonStyle(fontStyle, 'normal')}>
          <Typography variant="body2" sx={{ fontWeight: 'normal' }}>N</Typography>
        </IconButton>

        <IconButton onClick={() => setTagDialogOpen(true)} color="primary" sx={{ borderRadius: 0 }}>
          <StyleIcon />
        </IconButton>

        <IconButton onClick={increaseFontSize} color="primary" sx={{ borderRadius: 0 }}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={decreaseFontSize} color="primary" sx={{ borderRadius: 0 }}>
          <RemoveIcon />
        </IconButton>
      </Box>

      <Box display="flex" gap={1} flexDirection={{ xs: 'column', sm: 'row' }}>
        <Button onClick={onDelete} color="error" sx={{ borderRadius: 0 }}>
          <DeleteOutlineOutlinedIcon />
          Borrar
        </Button>
        <Button onClick={onSaveNote} disabled={isSaving} color="primary" sx={{ padding: 1 }}>
          <SaveIcon sx={{ fontSize: 24, mr: 1 }} />
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

const getButtonStyle = (fontStyle, style) => ({
  color: fontStyle === style ? 'primary.main' : 'inherit',
  borderRadius: 0,
  backgroundColor: fontStyle === style ? 'rgba(25, 118, 210, 0.2)' : 'transparent',
});

export default FormatToolbar;
