import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useModal } from '../../hooks/useModal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

function Examples() {
  const { open, close } = useModal(<Box sx={style}>
    <Typography variant="h6" component="h2">
      Title
    </Typography>
    <Typography sx={{ mt: 2 }}>Hello Body</Typography>
    <Grid container justifyContent="flex-end">
      <Button onClick={() => close()}>OK</Button>
    </Grid>
  </Box>);

const { open: open2, close: close2 } = useModal(<Box sx={style}>
  <Typography variant="h6" component="h2">
    Title
  </Typography>
  <Typography sx={{ mt: 2 }}>Hello Body 2</Typography>
  <Grid container justifyContent="flex-end">
    <Button onClick={() => close()}>OK</Button>
  </Grid>
</Box>);

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 12 }}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Button variant="contained" onClick={open}>
            Alert
          </Button>
          <Button variant="contained" onClick={open2}>
            Alert 2
          </Button>
          <br />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Examples;
