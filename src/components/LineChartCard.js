import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    width: "100%",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 18,
  },
}));

export default function LineChartCard() {
  const data = useSelector((state) => state.DataReducer.data);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <CardHeader
          avatar={<AssessmentIcon />}
          title={
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Projected Values
            </Typography>
          }
          classes={{
            title: classes.title,
          }}
        />
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            width={500}
            height={400}
            data={data.values}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="expected_val" stroke="#ff7300" />
            <Line type="monotone" dataKey="target_val" stroke="#008000" />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
