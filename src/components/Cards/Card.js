import { Button } from '@mui/material';
//import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ButtonToolbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const CardItem = () => {
    return (
        <div className='boxStyle'>
            <div>
                <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/932/712/products/wapsbo11-792913a21ae907f05416077122463096-240-0.jpg" />
            </div>
            <p>Titulo</p>
            <span> price $$ </span> 
            <Button variant="contained" > details </Button>
        </div>
       // <Card style={{ width: '18rem' }}>
        //<Card.Img variant="top" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/932/712/products/wapsbo11-792913a21ae907f05416077122463096-240-0.jpg" />
        //<Card.Body>
         //   <Card.Title>Card Title</Card.Title>
         //   <Card.Text>
          //      Price u$d
          //  </Card.Text>
          //  <Button variant="primary">details</Button>
        //</Card.Body>
        //</Card>
    )
}

export default CardItem