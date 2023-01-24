import Box from "@mui/material/Box";
import DetailCard from "./DetailCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Feedback from "./Feedback";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const DetailedCard = () => {
  return (
    <Grid sx={{ padding: "10px 28px" }} container spacing={2}>
      <Grid item xs={6}>
        <DetailCard />
      </Grid>
      <Grid item xs={6}>
        <Feedback />
      </Grid>
    </Grid>
  );
};

export default DetailedCard;
