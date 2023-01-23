import Box from "@mui/material/Box";
import DetailCard from "./DetailCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const DetailedCard = () => {
  return (
    <Grid sx={{ border: "none", background: "none" }} container spacing={2}>
      <Grid item xs={6}>
        <Item>
          {" "}
          <DetailCard />{" "}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
};

export default DetailedCard;
