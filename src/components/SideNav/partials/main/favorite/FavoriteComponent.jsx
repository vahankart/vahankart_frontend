import Favorites from "./Favorites"
import ProductCard from './ProductCard'
import CardRow from './Row'
import Botton from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import CancelIcon from '@mui/icons-material/Cancel'


const Product = ()=>{
    return(
        <ProductCard>
            <CardRow upper>
                <span style={{ 
                    position: 'relative',
                    top: '20px',
                    left: '20px'
                }}>
                    <img src="https://picsum.photos/500/300?random=1" width="70px" height="70px" alt="product"/>
                </span>
                <span style={{ 
                    position: 'relative',
                    top: '10px',
                    left: '40px',
                    textAlign: 'start'
                }}>
                    <h5  style={{ margin: '10px 0px 0px 0px', fontSize: '20px'}}>Product Name</h5>
                    <p  style={{ margin: '0px', color: '#686868', fontSize: '16px'}}>Size - XS</p>
                    <p style={{ margin: '0px', color: '#E51515', fontSize: '14px'}}>$ 10,000</p>
                </span>
            </CardRow>
            <CardRow lower>
                <Stack direction="row" spacing={2}>
                    <Botton variant="contained" style={{height: '40px', width: '170px', color: 'white', backgroundColor: '#E51515'}}>BUY NOW</Botton>
                    <Botton startIcon={<CancelIcon />} style={{height: '40px', color: '#E51515', backgroundColor: '##FFFFFF'}}>REMOVE</Botton>
                </Stack>
            </CardRow>
        </ProductCard>
    )
}

const FavoritesComponent = ()=>{
    return(
        <>
            <h1>My Orders</h1>
            <Favorites>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Favorites>
        </>
    )
}


export default FavoritesComponent