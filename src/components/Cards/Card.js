import { Button, CardActionArea } from '@mui/material';
//import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ButtonToolbar } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Card.css';

const CardItem = ({title, price, image}) => {
    return (
        <Card className='boxStyle' sx={{minWidht: 275 }} >
            <CardActionArea>
            <CardContent>
                    <CardActions>
                        <div>
                            <div className='image'>
                                <img src={`${image}`}/>
                            </div>
                            <p>{title}</p>
                            <span> $ {price} </span>
                            <br></br>
                            <br></br>
                            <Button variant="contained" > Detalle </Button>
                        </div>
                    </CardActions>
            </CardContent>
            </CardActionArea>
        </Card>

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