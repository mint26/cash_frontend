import React, { useState } from "react";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HouseIcon from "@material-ui/icons/House";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { getProjectedValues } from "../redux/personalInformationAction";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    height: "100%",
  },
  title: {
    fontSize: 18,
  },
  label: {
    padding: theme.spacing(1, 0, 0, 0),
    fontSize: 14,
  },
  moveright: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function HousingCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [initialValues] = useState({
    housePrice: 0,
    targetAge: 0,
    houseInterestRate: 0,
    loanLength: 0,
    downPayment: 0,
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: (values) => {
      dispatch(getProjectedValues(values));
    },
  });

  const { values, handleChange, handleSubmit } = formik;
  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            House specific
          </Typography>
        }
        avatar={<HouseIcon />}
        classes={{
          title: classes.title,
        }}
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                className={classes.label}
                color="textSecondary"
                gutterBottom
              >
                <label htmlFor="housePrice">House</label>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="housePrice"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.housePrice}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.label}
                color="textSecondary"
                gutterBottom
              >
                <label htmlFor="targetAge">Age to buy house</label>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="targetAge"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.targetAge}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.label}
                color="textSecondary"
                gutterBottom
              >
                <label htmlFor="houseInterestRate">House interest rate</label>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="houseInterestRate"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.houseInterestRate}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.label}
                color="textSecondary"
                gutterBottom
              >
                <label htmlFor="downPayment">Down payment</label>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="downPayment"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.downPayment}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.label}
                color="textSecondary"
                gutterBottom
              >
                <label htmlFor="loanLength">Loan Length</label>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="loanLength"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.loanLength}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
