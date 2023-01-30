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

export const SidebarData = [
  {
    title: "casino",
    path: '/',
    icon: <img src={casino}></img>,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ExpandMoreIcon />,

    subNav: [
      {
        title: "picks for you",
        path: "/picksforyou",
        icon: <img src={picksforyou} />,
      },
      {
        title: "Favorites",
        path: "/favourite",
        icon: <img src={Vector} />,
      },
      {
        title: "recent",
        path: "/recent",
        icon: <img src={recent} />,
      },
      {
        title: "Sizzld Games",
        path: "/",
        icon: <img src={Rocket} />,
        iconClosed: <ExpandMoreIcon />,
        iconOpened: <ExpandMoreIcon />,
      },
      {
        title: "Slot ",
        path: "/slot",
        icon: <img src={Hotgames} />,
      },
      {
        title: "Hotgames ",
        path: "/hotgame",
        icon: <img src={Hotgames} />,
      },
      {
        title: "new Releases",
        path: "/newrelease",
        icon: <img src={newRelessees} />,
      },
      {
        title: "High Volatility",
        path: "highvolatility",
        icon: <img src={highvolatility} />,
      },
      {
        title: "Feature Buy-in",
        path: "/featurebuyin",
        icon: <img src={star} />,
      },
      {
        title: "Table Games",
        path: "/TableGame",
        icon: <img src={tablegames} />,
      },
    ],
  },
  {
    title: "Sports ",
    path: '/Sports',
    icon: <img src={sports} style={{ marginLeft: "-5px" }}></img>,
  },
  {
    title: "lottery ",
    path: "/loatry",
    icon: <img src={lotery} style={{ marginLeft: "-5px" }}></img>,
  },
  {
    title: "Affiliate",
    path: '/Affiliate',
    icon: <img src={affilate} style={{ marginLeft: "-5px" }}></img>,
  },
  {
    title: "probably fair ",
    path: '/probablyfair',
    icon: <img src={fair} style={{ marginLeft: "-5px" }}></img>,
  },
  {
    title: "vip Club",
    path: '/vipclub',
    icon: <img src={vipClub} style={{ marginLeft: "-5px" }}></img>,
  },
  {
    title: "forum ",
    path: '/forum',
    icon: <img src={fourm} style={{ marginLeft: "-5px" }}></img>,
  },
  {
    title: "blog ",
    path: '/blog ',
    icon: <img src={blog} style={{ marginLeft: "-5px" }}></img>,
  },
  {
    title: "head phones",
    path: '/headphones',
    icon: <img src={headphones} style={{ marginLeft: "-5px" }}></img>,
  },
  {
    title: "languages",
    path: '/languages',
    icon: (
      <img
        src={languages}
        style={{ marginLeft: "-5px", paddingBottom: "20px" }}
      ></img>
    ),
  },
  {
    title: "Sponsorships",
    path: '/Sponsorships',
    icon: <img src={sponsership} style={{ marginLeft: "-5px" }}></img>,
  },
];
