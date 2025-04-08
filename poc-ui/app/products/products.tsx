import getProducts from "./actions/get-products";
import Grid from '@mui/material/Grid';
import Product from "./product";

export default async function Products() {
    const products = await getProducts();
    
    return (
        <Grid container spacing={3}>
            {products.map(product => (
                <Grid key={product.id} size={{sm:6, lg:4 , xs:12}}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    );
}