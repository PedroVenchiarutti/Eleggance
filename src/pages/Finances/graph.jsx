import React, { PureComponent } from "react";
import Finances from "./finances";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

let data = [
  {
    name: "Dia 1",
    VendasHoje: 40,
    VendasOntem: 0,
    amt: 50,
  },
];

for (var dia = 1; dia <= 5; dia++) {
  data.push({ name: "Dia 2", VendasHoje: 25, VendasOntem: 15, amt: 10 });
}

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="VendasHoje"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="VendasOntem" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
