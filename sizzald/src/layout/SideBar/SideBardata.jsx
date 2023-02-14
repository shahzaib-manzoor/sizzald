import ArrowForward from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import picksforyou from "../../assets/picksforyou.svg";
import Rocket from "../../assets/Rocket.svg";
import slots from "../../assets/slot.png";
import favourites from "../../assets/favourites.svg";
import Vector from "../../assets/Vector.svg";
import casino from "../../assets/casino.svg";
import recent from "../../assets/recent.svg";
import Hotgames from "../../assets/Hotgames.svg";
import highvolatility from "../../assets/highvolatility.svg";
import star from "../../assets/star.svg";
import newRelessees from "../../assets/newRelessees.svg";
import tablegames from "../../assets/tablegames.svg";
import sports from "../../assets/sports.svg";
import lotery from "../../assets/lotery.svg";
import affilate from "../../assets/affilate.svg";
import fair from "../../assets/fair.png";
import vipClub from "../../assets/vipClub.svg";
import fourm from "../../assets/fourm.svg";
import blog from "../../assets/blog.svg";
import headphones from "../../assets/headphones.svg";
import languages from "../../assets/languages.svg";
import sponsership from "../../assets/sponsership.svg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import liveCasino from "../../assets/liveCasino.png";
import promotion from '../../assets/promotion.png'

export const SidebarData = [
  {
    title: "casino",
    path: '/',
    icon: casino,
    iconClosed: <ExpandLessIcon />,
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
        icon: favourites,
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
        icon: slots,
      },
      {
        title: "Live Casino",
        path: "/livecasino",
        icon: liveCasino,
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
    title: "Promotions",
    path: '/promotions',
    icon: promotion,
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
    hover:true,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ArrowForwardIosIcon sx={{fontSize:"15px"}}/>,
    subNav: [
      {
        title: "English",
        path: "/picksforyou",
        // icon:picksforyou,
      },]
  },
  {
    title: "Sponsorships",
    path: '/sponserships',
    icon: sponsership,
    iconClosed: <ExpandLessIcon />,
    iconOpened: <ExpandMoreIcon />,
    subNav: [
      {
        title: "AFA",
        path: "/sponserships/afa",
        // icon:picksforyou,
      },
      {
        title: "Cloud 9",
        path: "/sponserships/cloud9",
        // icon:picksforyou,
      },
      {
        title: "David Luiz",
        path: "/sponserships/davidLuiz",
        // icon:picksforyou,
      },
    
    ]
  },
];