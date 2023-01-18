import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
 
export default function ActionAreaCard(props) {
  return (
    <Card  sx={{ maxWidth: 345,display:'  flex' }}>
      <CardActionArea>
        <CardMedia
       
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent sx={{
         position: 'absolute',
        bottom: 0,
} 
        }>
          <Typography className='text-white text-9xl text-  clH5' gutterBottom >
            Lizard
          </Typography>
          {/* <Typography className='text-white' variant="body2"  >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}