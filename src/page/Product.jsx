import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Product = () => {
  const [products, setProducts] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: isMobile ? 'center' : 'space-around',
        gap: '30px',
        padding: isMobile ? '20px' : '50px',
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{
            width: isMobile ? '100%' : '30%',
            maxWidth: '350px',
            boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '6px 6px 15px rgba(0,0,0,0.3)',
            },
          }}
        >
          <CardActionArea component={Link} to={`/ProductDetail/${product.id}`}>
            <CardMedia
              component="img"
              height="150"
              image={product.image}
              alt={product.title}
              sx={{ objectFit: 'contain', padding: '10px' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.title.length > 30 ? product.title.slice(0, 30) + '...' : product.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Product;