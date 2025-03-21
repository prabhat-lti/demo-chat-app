import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

const CustomizedAxisTick = ({ x, y, stroke, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dy={16}
      textAnchor="end"
      fill="#666"
      transform="rotate(-90)"
    >
      {dayjs(payload.value).format("DD/MM/YYYY")}
    </text>
  </g>
);

const CustomizedLabel = ({ x, y, stroke, value }) => (
  <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
    {value}
  </text>
);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "1px 8px 1px 8px",
          borderRadius: "5px",
          fontSize: "14px",
        }}
      >
        <p>{`Shipments: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const CpfChart = () => {
  const cpfData = [
    { eventWeeks: "01/02/2024", forecasted_shipments: 4000 },
    { eventWeeks: "02/02/2024", forecasted_shipments: 3000 },
    { eventWeeks: "03/02/2024", forecasted_shipments: 2000 },
    { eventWeeks: "04/02/2024", forecasted_shipments: 2780 },
    { eventWeeks: "05/02/2024", forecasted_shipments: 1890 },
    { eventWeeks: "06/02/2024", forecasted_shipments: 2390 },
    { eventWeeks: "07/02/2024", forecasted_shipments: 3490 },
  ];

  return (
    <div style={{ height: "400px" }}>
      <h1>CPF Chart</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={cpfData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="eventWeeks"
            height={60}
            tick={<CustomizedAxisTick />}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend
            payload={[
              {
                value: "",
                type: "",
                id: "eventWeeks",
                color: "#8884d8",
              },
            ]}
          /> */}
          <Line
            type="monotone"
            dataKey="forecasted_shipments"
            stroke="#8884d8"
            label={<CustomizedLabel />}
          />
        </LineChart>
      </ResponsiveContainer>

      <div
        style={{
          display: "flex",
          //   justifyContent: "space-between",
          paddingTop: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div style={{ textAlign: "left", marginRight: "20px" }}>
          <span>
            <strong>Forecasted Shipments</strong>
          </span>
        </div>
        <div style={{ textAlign: "right" }}>
          <span>
            <strong>DD/MM/YYYY - </strong>Event Weeks
          </span>
        </div>
      </div>
    </div>
  );
};

export default CpfChart;
