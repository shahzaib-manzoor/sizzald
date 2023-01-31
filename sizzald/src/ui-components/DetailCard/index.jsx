import Box from "@mui/material/Box";
import DetailCard from "./DetailCard";
import Feedback from "./Feedback";

const DetailedCard = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "block",
          lg: "flex",
          xl: "flex",
        },
        gap: "20px",
        padding: "30px 28px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" ,height:'581px'},
          margin: "10px 0px",
        }}
      >
        <DetailCard />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" },
          margin: "10px 0px",
        }}
      >
        <Feedback />
      </Box>
    </Box>
  );
};

export default DetailedCard;
