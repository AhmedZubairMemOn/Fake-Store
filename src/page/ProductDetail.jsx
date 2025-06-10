import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        marginTop: '80px',
        marginBottom: '80px',
        padding: isMobile ? '10px' : '40px',
        textAlign: 'center',
      }}
    >
      <Card
        sx={{
          width: isMobile ? '100%' : '400px',
          maxWidth: '100%',
          boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '6px 6px 15px rgba(0,0,0,0.3)',
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            src={product?.image}
            alt={product?.title}
            style={{ objectFit: 'contain', padding: '20px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product?.description}
            </Typography>
            <Typography sx={{ paddingTop: '10px' }}>
              ⭐ Rating: {product?.rating?.rate}
            </Typography>
            <Typography>💲 Price: ${product?.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductDetail;