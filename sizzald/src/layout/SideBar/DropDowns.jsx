import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SubMenu = ({ item }) => {
  const refe = useRef()
  const [gameNav, setGameNav] = useState(false);
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
console.log(refe)
const gameHandler = (title) => { 
  console.log('sjsj')
  if(title === 'Sizzld Games'){
    console.log('sizzld')
    setGameNav(true)
  }
  else{
    console.log('not sizzld')
    refe.current.style.background = 'white'
  }
 }
  return (
    <>
     
    <Box  sx={{ mt: '10px', height: 'auto',}}>
    
      <Link
        style={{ color: 'white' ,textDecoration:'none'}}
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <Box 
          sx={{
            // background: 'rgba(95, 95, 111, 0.6)',
            display: 'flex',
            justifyContent: 'space-between',  
            alignItems:'center',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '5px',
            },
            height: '46px',
            paddingTop:'7px',
            paddingBottom:'7px'
           
            
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center',marginLeft:'15px', }}>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:2}}>

            {item.icon}
            <Typography noWrap sx={{ color: '#BDBDBD', textTransform: 'capitalize' ,fontSize:'16px',fontWeight:400,textDecoration:"none",}}>
              {item.title}
            </Typography>
            </Box>


            
          </Box>

          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </Box>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
          <div  onMouseEnter={()=>gameHandler(item.title)}
          onMouseOut={()=>setGameNav(false)}
          >
            <Link  style={{ color: 'white',marginTop:"20px",textDecoration:'none' }} to={item.path} key={`key${index}`} >
               
               {console.log(item)}
              <Box
              ref={refe}
               
                sx={{
                  paddingLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  
                  // position:'relative',
                  // marginBottom:"20px",
                  
                  '&:hover':{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '5px',
                  }  ,
                  height:'60px'
                }}
              >
                {/* <Box sx={{position:'absolute',right:"40px"}}>
                  <Typography>thhdhhf</Typography>
                </Box> */}
                {item.icon}
                <Typography
                  sx={{ fontSize:'16px',fontWeight:400, textTransform: 'capitalize' }}
                >
                  {item.title}
                </Typography>
                {item.iconOpened && <Box sx={{}}>{item.iconOpened}</Box>}
              </Box>
              
            </Link>
            </div>
          );

        })}
        
    </Box>
  
   
    </>

  );
};

export default SubMenu;
