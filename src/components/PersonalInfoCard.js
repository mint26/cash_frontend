import React, { useState } from "react";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
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
}));

const PersonalInfoCard = ({ onSubmitStep }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [initialValues] = useState({
    startingAge: 0,
    startingSaving: 0,
    retirementAge: 0,
    lifeExpectancy: 0,
    investmentPercentage: 0,
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
            Personal Information
          </Typography>
        }
        avatar={<PermIdentityIcon />}
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
                <label htmlFor="startingAge">Starting Age</label>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="startingAge"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.startingAge}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.label}
                color="textSecondary"
                gutterBottom
              >
                <label htmlFor="startingSaving">Starting Saving</label>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="startingSaving"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.startingSaving}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.label}
                color="textSecondary"
                gutterBottom
              >
                <label htmlFor="retirementAge">Retirement Age</label>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="retirementAge"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.retirementAge}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.label}
                color="textSecondary"
                gutterBottom
              >
                <label htmlFor="lifeExpectancy">Life Expectancy</label>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="lifeExpectancy"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.lifeExpectancy}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes.label}
                color="textSecondary"
                gutterBottom
              >
                <label htmlFor="investmentPercentage">
                  Investment Percentage
                </label>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="investmentPercentage"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.investmentPercentage}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoCard;
