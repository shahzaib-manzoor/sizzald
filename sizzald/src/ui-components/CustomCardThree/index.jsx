import * as style from './style';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
// import { Box } from "@mui/system";
const CustomCardThree = ({ img}) => {
  return (
    <Card
      sx={{
        width: '220px',
        background: 'rgba(43, 45, 80, 1)',
        height: '105px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        // gap:'30px'
      }}
    >
      <img src={img}></img>
    </Card>
  );
};

export default CustomCardThree;
