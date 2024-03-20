import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../assets/lineChart.css";

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
