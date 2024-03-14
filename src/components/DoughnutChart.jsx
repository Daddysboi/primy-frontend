import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";

import { primaryColors } from "../assets/Colors";

const StyledDoughnut = styled.div`
  margin-top: -5rem;
`;

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = "rgb(0, 0, 156)";
Chart.defaults.plugins.legend.position = "right";
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.title.text = "Doughnut Chart";
Chart.defaults.plugins.legend.title.font = "Helvetica Neue";

const DoughnutChart = ({ data }) => {
  const chartData = {
    labels: ["Boys", "Girls"],
    datasets: [
      {
        data,
        backgroundColor: [
          `${primaryColors.Green}`,
          `${primaryColors.LightPurple}`,
        ],
        borderWidth: 1,
        radius: "60%",
      },
    ],
  };

  return (
    <StyledDoughnut>
      <Doughnut data={chartData} />
    </StyledDoughnut>
  );
};

export default DoughnutChart;
