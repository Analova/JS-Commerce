import React from "react";
import {Grid} from "@material-ui/core"
import Product from "./Product/Product"

import useStyles from "./styles"
const products=[
    {id:1,name:"Shoes",description:"Running shoes", price:"68", image:"https://ae01.alicdn.com/kf/HTB1VuKkHFXXXXaraXXXq6xXFXXXD/Hot-2018-Spring-Autumn-Lace-Up-Men-s-Canvas-Shoes-Big-Size-Man-Buckle-Casual-Ankle.jpg"},
    {id:2,name:"MacBook",description:"Apple macbook", price:"2300", image:"https://images.idgesg.net/images/article/2018/11/macbook-air-2108-hero2-100779122-orig.jpeg"},
]


const Products=()=> {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4} >
          {products.map((product)=>(
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product}/>
         </Grid>
     ))}
    </Grid>
    </main>
   
  );
}

export default Products;