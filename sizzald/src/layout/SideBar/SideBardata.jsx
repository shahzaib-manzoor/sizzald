import ArrowForward from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import playingcard from "../../assets/playingcard.svg";
import picksforyou from "../../assets/picksforyou.svg";
import Rocket from "../../assets/Rocket.svg";
// import favourites from '../../assets/favourites.svg';
import Vector from "../../assets/Vector.svg";
import casino from "../../assets/casino.svg";
import recent from "../../assets/recent.svg";
// import sizzeled from '../../assets/sizzeled.svg';
// import slots from '../../assets/slots.svg';
import Hotgames from "../../assets/Hotgames.svg";
import highvolatility from "../../assets/highvolatility.svg";
import star from "../../assets/star.svg";
import newRelessees from "../../assets/newRelessees.svg";
import tablegames from "../../assets/tablegames.svg";
import sports from "../../assets/sports.svg";
import lotery from "../../assets/lotery.svg";
import affilate from "../../assets/affilate.svg";
import fair from "../../assets/fair.svg";
import vipClub from "../../assets/vipClub.svg";
import fourm from "../../assets/fourm.svg";
import blog from "../../assets/blog.svg";
import headphones from "../../assets/headphones.svg";
import languages from "../../assets/languages.svg";
import sponsership from "../../assets/sponsership.svg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const SidebarData = [
  {
    title: "casino",
    path: '/',
    icon: casino,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ExpandMoreIcon />,

    subNav: [
      {
        title: "picks for you",
        path: "/picksforyou",
        icon:picksforyou,
      },
      {
        title: "Favorites",
        path: "/favourite",
        icon: star,
      },
      {
        title: "recent",
        path: "/recent",
        icon: recent,
      },
      {
        title: "Sizzld Games",
        path: "/sizzldGames",
        icon: Rocket,
        iconClosed: <ArrowForwardIosIcon sx={{fontSize:"15px"}}/>,
        iconOpened: <ArrowForwardIosIcon  sx={{fontSize:"15px"}}/>
      },
      {
        title: "Slot ",
        path: "/slot",
        icon: Hotgames,
      },
      {
        title: "Hotgames ",
        path: "/hotgame",
        icon: Hotgames,
      },
      {
        title: "new Releases",
        path: "/newrelease",
        icon: newRelessees,
      },
      {
        title: "High Volatility",
        path: "highvolatility",
        icon: highvolatility,
      },
      {
        title: "Feature Buy-in",
        path: "/featurebuyin",
        icon: star,
      },
      {
        title: "Table Games",
        path: "/TableGame",
        icon: tablegames,
      },
    ],
  },
  {
    title: "Sports ",
    path: '/Sports',
    icon: sports,
  },
  {
    title: "lottery ",
    path: "/loatry",
    icon: lotery,
  },
  {
    title: "Affiliate",
    path: '/affilate',
    icon: affilate,
  },
  {
    title: "probably fair ",
    path: '/probablyfair',
    icon: fair,
  },
  {
    title: "vip Club",
    path: '/vipclub',
    icon: vipClub,
  },
  {
    title: "forum ",
    path: '/forum',
    icon: fourm,
  },
  {
    title: "blog ",
    path: '/blog ',
    icon: blog,
  },
  {
    title: "head phones",
    path: '/headphones',
    icon: headphones,
  },
  {
    title: "languages",
    path: '/languages',
    icon: (
     
       languages
      
      
    ),
  },
  {
    title: "Sponsorships",
    path: '/Sponsorships',
    icon: sponsership,
  },
];