import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../assets/lineChart.css";

const Chart = ({ data, width, height }) => (
  <ResponsiveContainer width={width} height={height}>
    <LineChart data={data} margin={{ top: 8, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;

const LineChartdata = [
  { name: "Week 1", uv: 400, pv: 2400, amt: 2400 },
  { name: "Week 2", uv: 800, pv: 2600, amt: 2500 },
  { name: "Week 3", uv: 500, pv: 2300, amt: 2200 },
  { name: "Week 4", uv: 700, pv: 2100, amt: 2500 },
  { name: "Week 5", uv: 300, pv: 2800, amt: 2700 },
  { name: "Week 6", uv: 400, pv: 2800, amt: 2700 },
  { name: "Week 7", uv: 500, pv: 2800, amt: 2700 },
  { name: "Week 8", uv: 650, pv: 2800, amt: 2700 },
];
