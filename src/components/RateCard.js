import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  txtField: {
    margin: theme.spacing(2, 0),
  },
  icon: {
    fontSize: 50,
  },
}));

export default function RateCard() {
  const classes = useStyles();
  const [initialValues] = useState({
    inflationRate: 2.52,
    housePriceIndex: 5.96,
    investmentRate: 4.2,
    bankInterestRate: 1.2,
  });
  const formik = useFormik({
    enableReinitialize: false,
    initialValues: initialValues,
  });

  let { values, handleChange } = formik;
  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Rates
          </Typography>
        }
        avatar={<TrendingUpIcon />}
      />
      <CardContent>
        <Grid container>
          <TextField
            className={classes.txtField}
            variant="outlined"
            label="Inflation Rate"
            name="inflationRate"
            type="text"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            value={values.inflationRate}
            step="0.01"
          />
          <TextField
            className={classes.txtField}
            variant="outlined"
            label="Housing Price Index"
            name="housePriceIndex"
            type="text"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            value={values.housePriceIndex}
          />
          <TextField
            className={classes.txtField}
            variant="outlined"
            label="Investment Rate"
            name="investmentRate"
            type="text"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            value={values.investmentRate}
          />
          <TextField
            className={classes.txtField}
            variant="outlined"
            label="Bank Interest Rate"
            name="bankInterestRate"
            type="text"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            value={values.bankInterestRate}
          />
        </Grid>
      </CardContent>
    </Card>
  );
}
