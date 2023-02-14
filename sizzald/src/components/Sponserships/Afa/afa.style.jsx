import afaBanner from "../../../assets/sponserships/afaBanner.svg";
import afaCelebrete from "../../../assets/sponserships/afaCelebrete.svg";
import afaPlayers from "../../../assets/sponserships/afaPlayers.svg";
import afaWelcome from "../../../assets/sponserships/afaWelcome.svg";
import afaGroup from "../../../assets/sponserships/afaGroup.svg";

const bgImg = (img) => {
  return {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
};
export const useStyle = {
  sponserContainer: {
    color: "white",
  },
  banner: {
    ...bgImg(afaBanner),
    width: "100%",
    height: "400px",
  },
  gridContent: {
    padding: "10px",
    overflow: "hidden",
  },
  boldText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "40px",
    letterSpacing: " 0.01em",
    color: "#FFFFFF",
  },
  normalText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: " 0.01em",
    color: "#FFFFFF",
  },
  gridimg1: {
    width: "100%",
    height: "100%",
    ...bgImg(afaCelebrete),
  },
  gridimg2: {
    width: "100%",
    height: "100%",
    ...bgImg(afaPlayers),
  },
  last: {
    width: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lastContent: {
    width: "80%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    ...bgImg(afaWelcome),
    content: {
      welcomeTxt: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "60px",
        lineHeight: "90px",
        color: "#FFFFFF",
      },
      cryptoTxt: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "30px",
        lineHeight: "60px",
        color: "#00FF11",
      },
      groupImgSrc:afaGroup,
      groupImg:{
        height:"100%",
        width:'100%',
      }
    },
  },
};
