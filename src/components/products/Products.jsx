import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './product/Product';
import useStyles from './styles';

const products = [
  {
    id: 1,
    name: 'shoes',
    description: 'Running Shoes.',
    price: '£5',
    image:
      'https://marks.scene7.com/is/image/marksp/290913_BQ3204-002_PROD_2_BLACK?wid=1488&hei=1800&fit=fit,1&bgColor=0,0,0,0&op_sharpen=1&resMode=sharp2&fmt=jpg&qlt=85,0',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook.',
    price: '£10',
    image:
      'https://www.humac.dk/sites/default/files/styles/large/public/product-images/2020-05/WWEN_MacBook_Pro_13in_2ports_space_gray_PDP_US_1_2.jpg?itok=D2WSO-I-',
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
