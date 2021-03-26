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
import Grid from "@material-ui/core/Grid";

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
  console.log("getting data", data);
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
            data={data.data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="age" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="income" stroke="#ff7300" />
            <Line type="monotone" dataKey="expense" stroke="#008000" />
          </ComposedChart>
        </ResponsiveContainer>
        <Grid container>
          <Grid item xs={12}>
            <Typography>
              {`First age when you net assets reach 0 is ${data.zero_savings_age}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {`You can increase your expenses by ${data.potential_max_expenses}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {`You can reduce your income by ${data.maximum_income_reduction}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {`Your earliest retirement age is ${data.recommended_retirement_age}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {`Your lowest investment rate is ${data.minimum_investment_rate}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {`Your lowest investment allocation is ${data.minimum_investment_percentage}`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
