
import { Box } from "@mui/material";
import DetailedCard from "../../../ui-components/DetailCard/index";
import Network from "../../../ui-components/Network";
import Cloud9Comp from "./Cloud9Comp";
export default function Cloud9() {

  return (
    <Box sx={{padding:'25px'}}>
    <Cloud9Comp/>
      <Box>
        <DetailedCard />
      </Box>
      <Network />
    </Box>
  );
};


