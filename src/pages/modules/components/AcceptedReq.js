import React from 'react';
import { Box, Card,  CardMedia, Button, Typography } from '@mui/material';

export default function AcceptedReq() {
  return (
    <Box>
      <Card sx={{ borderRadius: '15px', height: '230px', width: '450px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: '180px', borderRadius: '10px' }}
            image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
            alt="Generic placeholder image"
          />
          <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
            <Typography variant="h6" component="div">Danny McLoan</Typography>
            <Typography variant="subtitle1" color="text.secondary">Senior Journalist</Typography>

            <Box sx={{ display: 'flex', backgroundColor: '#efefef', borderRadius: '5px', p: 1, mt: 1 }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Articles</Typography>
                <Typography variant="body1">41</Typography>
              </Box>
              <Box sx={{ px: 2 }}>
                <Typography variant="body2" color="text.secondary">Followers</Typography>
                <Typography variant="body1">976</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Rating</Typography>
                <Typography variant="body1">8.5</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', pt: 1 }}>
              <Button variant="outlined" sx={{ flexGrow: 1, marginRight: 1 }}>Chat</Button>
              <Button sx={{ flexGrow: 1 }}>Follow</Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
