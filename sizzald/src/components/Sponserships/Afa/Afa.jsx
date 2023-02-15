
import { Box } from "@mui/material";
import DetailedCard from "../../../ui-components/DetailCard/index";
import Network from "../../../ui-components/Network";
import AfaComp from "./AfaComp";
export default function Afa  () {
  return (
    <Box sx={{padding:'25px'}}>
    <AfaComp/>
      <Box>
        <DetailedCard />
      </Box>
      <Network />
    </Box>
  );
};


