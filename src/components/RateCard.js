import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  controlLabel: {
    fontSize: 14,
    fontFamily: theme.fontFamily,
    color: theme.palette.secondary,
  },
  icon: {
    fontSize: 50,
  },
}));

export default function RateCard() {
  const classes = useStyles();
  const [initialValues] = useState({
    inflationRate: 0,
    housePriceIndex: 0,
    investmentRate: 0,
    bankInterestRate: 0,
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
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Rates</FormLabel>
          <FormGroup>
            <FormControlLabel
              classes={{
                label: classes.controlLabel,
              }}
              control={
                <Checkbox
                  checked={values.inflationRate}
                  onChange={handleChange}
                  name="inflationRate"
                />
              }
              label="Inflation Rate"
            />
            <FormControlLabel
              classes={{
                label: classes.controlLabel,
              }}
              control={
                <Checkbox
                  checked={values.housePriceIndex}
                  onChange={handleChange}
                  name="housePriceIndex"
                />
              }
              label="Housing Price Index"
            />
            <FormControlLabel
              classes={{
                label: classes.controlLabel,
              }}
              control={
                <Checkbox
                  checked={values.investmentRate}
                  onChange={handleChange}
                  name="investmentRate"
                />
              }
              label="Investment Rate"
            />
            <FormControlLabel
              classes={{
                label: classes.controlLabel,
              }}
              control={
                <Checkbox
                  checked={values.bankInterestRate}
                  onChange={handleChange}
                  name="bankInterestRate"
                />
              }
              label="Bank Interest Rate"
            />
          </FormGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}
