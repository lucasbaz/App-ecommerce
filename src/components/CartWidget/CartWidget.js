import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './CartWidget.css';
import { Box } from '@mui/material';
const CardWidget = () => {
    return (
        <Box className='boxStyles'>
            <div>
                <span>4 </span>
                <ShoppingBasketIcon></ShoppingBasketIcon>
            </div>
        </Box>
        
    )
}

export default CardWidget