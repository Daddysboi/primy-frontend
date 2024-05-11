import styled from "styled-components";
import { Box, Button, Grid, Stack } from "@mui/material";

import IncomeAreaChart from "./IncomeAreaChart";

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.h1`
  font-weight: 600;
  font-size: 1rem;
`;

const AreaChart = ({ Heading, slot, setSlot }) => {
  return (
    <ChartWrapper>
      <Grid>
        <Grid container alignItems="center" justifyContent="space-between">
          <Text>{Heading}</Text>
          <Grid>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot("month")}
                color={slot === "month" ? "primary" : "secondary"}
                variant={slot === "month" ? "outlined" : "text"}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot("week")}
                color={slot === "week" ? "primary" : "secondary"}
                variant={slot === "week" ? "outlined" : "text"}
              >
                Week
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ pt: 1, pr: 2 }}>
          <IncomeAreaChart slot={slot} />
        </Box>
      </Grid>
    </ChartWrapper>
  );
};

export default AreaChart;
