import { Container, Grid } from '@mui/material';
import CardItem from '../Cards/Card';
const CardList = ({title}) => {
    return (
        <div>
            <h2>{title}</h2>
            <Grid container>
                <Grid item md={3}>
                    <CardItem stockItem={5} title="One Blue" price={5500} image="https://d3ugyf2ht6aenh.cloudfront.net/stores/932/712/products/wapsbo11-792913a21ae907f05416077122463096-240-0.jpg"></CardItem>
                </Grid>
                <Grid item md={3}>
                    <CardItem stockItem={8} title="Black" price={5500} image="https://d3ugyf2ht6aenh.cloudfront.net/stores/932/712/products/wapsnb11-fd36de6be48d4753b916210076165211-240-0.jpg"></CardItem>
                </Grid>
                <Grid item md={3}>
                    <CardItem stockItem={2} title="Red Fire" price={5500} image="https://d3ugyf2ht6aenh.cloudfront.net/stores/932/712/products/wapsrf11-8acfc236d2f69dff6016210067282035-240-0.jpg"></CardItem>
                </Grid>
                <Grid item md={3}>
                    <CardItem stockItem={1} title="Cherry" price={5500} image="https://d3ugyf2ht6aenh.cloudfront.net/stores/932/712/products/111-01130a576da007052216247264138443-240-0.jpg"></CardItem>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardList