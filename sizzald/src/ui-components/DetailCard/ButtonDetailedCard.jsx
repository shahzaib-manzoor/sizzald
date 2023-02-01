import { Button } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import IconButton from "@mui/material/IconButton";

function ButtonDetailedCard({ color, margin }) {
  return (
    <Button
      sx={{
        background: color,
        borderRadius: "50px",
        boxShadow: "0px 4px 4px 0px rgba(5, 5, 5, 0.25)",
        // marginTop: { sx: "10px", lg: "10px", xl: "30px" },
        padding: "5px 10px",
        height: "37px",
      }}
      variant="contained"
    >
      See more
      <IconButton sx={{ background: "white", marginLeft: "12px" }}>
        <CallMadeIcon sx={{ fontSize: "10px" }} />
      </IconButton>
    </Button>
  );
}

export default ButtonDetailedCard;
