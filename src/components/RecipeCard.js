import { Box, CardMedia, Button, Modal, styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ColorButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#99cba9',
  },
}));

const RecipeCard = ({ recipe }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

  return (
    <Box>
      <Card id={recipe.title}
            sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              width: 220,
              margin: 1,
            }} 
            >
        <Button onClick={handleOpen}>
        <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                height:200,
                }}>
          <CardMedia
            component="img"
            sx={{ width: 170, height: 225, mt:1, }}
            image={`${recipe.thumb}`}
            alt="Recipe poster"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column',   }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Box sx={{
                  width: 180,
                  display: 'flex',
                  ml: 8,
                  mr: 8,
                }}>
                <Typography variant="caption" color="#644D3E">
                  {recipe.title}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Box>
        </Button>
      </Card>
      <Modal open={open} onClose={handleClose}>
          <Box sx={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                width: 500, 
                height: 250,
          }}>
            <CardMedia
                component="img"
                sx={{ width: 200, height: 225, mt:1, }}
                image={`${recipe.thumb}`}
                alt="Recipe poster"
            />
            <Box sx={{ display: 'flex', 
                  flexDirection: 'column',
                  width: 300,
                  mt: 0,
                  ml: 3,
                  mr: 2,
                }}>
                <Typography variant="body1" color="#644D3E">
                  {recipe.title}
                </Typography>
                <br />
                <Typography variant="body2" color="#644D3E">
                  Estimasi waktu : {recipe.times}
                </Typography>
                <Typography variant="body2" color="#644D3E">
                  Porsi : {recipe.portion}
                </Typography>
                <Typography variant="body2" color="#644D3E">
                  Level : {recipe.dificulty}
                </Typography>
                  <br />
                <ColorButton href={`/detail/${recipe.key}`}
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: '#b3dec1' }}
                  >
                    Masak yuk!
                </ColorButton>
            </Box>
          </Box>
      </Modal>
    </Box>
  );
}

export default RecipeCard;