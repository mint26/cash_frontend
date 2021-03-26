import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { getProjectedValues } from "../redux/inputDataAction";

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
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataReducer.inputData);
  const ratesData = data.rates;
  const [rates, setRates] = useState(ratesData);

  const handleChange = (e, fieldName) => {
    let info = {};
    info[fieldName] = e.target.value;
    let newRates = Object.assign({}, rates, info);
    setRates(newRates);
  };
  const handleOnBlur = () => {
    let updatedData = Object.assign({}, data, {
      rates: rates,
    });
    dispatch(getProjectedValues(updatedData));
  };
  return (
    <>
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
            onChange={(e) => handleChange(e, "inflationRate")}
            onBlur={handleOnBlur}
            InputLabelProps={{
              shrink: true,
            }}
            value={rates.inflationRate}
            step="0.01"
          />
          <TextField
            className={classes.txtField}
            variant="outlined"
            label="Housing Price Index"
            name="housePriceIndex"
            type="text"
            onChange={(e) => handleChange(e, "housePriceIndex")}
            onBlur={handleOnBlur}
            InputLabelProps={{
              shrink: true,
            }}
            value={rates.housePriceIndex}
          />
          <TextField
            className={classes.txtField}
            variant="outlined"
            label="Investment Rate"
            name="investmentRate"
            type="text"
            onChange={(e) => handleChange(e, "investmentRate")}
            onBlur={handleOnBlur}
            InputLabelProps={{
              shrink: true,
            }}
            value={rates.investmentRate}
          />
          <TextField
            className={classes.txtField}
            variant="outlined"
            label="Bank Interest Rate"
            name="bankInterestRate"
            type="text"
            onChange={(e) => handleChange(e, "bankInterestRate")}
            onBlur={handleOnBlur}
            InputLabelProps={{
              shrink: true,
            }}
            value={rates.bankInterestRate}
          />
        </Grid>
      </CardContent>
    </>
  );
}
