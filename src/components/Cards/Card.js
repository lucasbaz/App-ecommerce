import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ButtonToolbar } from 'react-bootstrap';
const CardItem = () => {
    return (
        <div>
            <div>
                <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/932/712/products/wapsbo11-792913a21ae907f05416077122463096-240-0.jpg" />
            </div>
            <p>Titulo</p>
            <span> price $$ </span> 
            <Button variant="contained" > details </Button>
        </div>
    )
}

export default CardItem