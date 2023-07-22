import React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import BackgroundImage from '../media/background_image.jpg';
import { useNavigate } from "react-router-dom"

export default function ProductHero() {

  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate(`${e}`);
  };
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={BackgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Hire for services
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Enjoy services at home with sweet bonuses
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        onClick={() => handleNavigate("/bidForm")}
        sx={{ minWidth: 200 }}
      >
        Start Hiring
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
