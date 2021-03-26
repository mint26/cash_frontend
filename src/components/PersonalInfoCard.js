import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { getProjectedValues } from "../redux/inputDataAction";

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
  const data = useSelector((state) => state.DataReducer.inputData);
  const personalInfoData = data.personalInformation;
  const [personalInfo, setPersonalInfo] = useState(personalInfoData);

  const handleChange = (e, fieldName) => {
    let info = {};
    info[fieldName] = e.target.value;
    let newPersonalInfo = Object.assign({}, personalInfo, info);
    setPersonalInfo(newPersonalInfo);
  };
  const handleOnBlur = () => {
    let updatedData = Object.assign({}, data, {
      personalInformation: personalInfo,
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
            Personal Information
          </Typography>
        }
        avatar={<PermIdentityIcon />}
        classes={{
          title: classes.title,
        }}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography
              className={classes.label}
              color="textSecondary"
              gutterBottom
            >
              <label htmlFor="startingAge">Starting Age</label>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="startingAge"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e, "startingAge")}
              onBlur={handleOnBlur}
              value={personalInfo.startingAge}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              className={classes.label}
              color="textSecondary"
              gutterBottom
            >
              <label htmlFor="startingSaving">Starting Saving</label>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="startingSaving"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e, "startingSaving")}
              onBlur={handleOnBlur}
              value={personalInfo.startingSaving}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              className={classes.label}
              color="textSecondary"
              gutterBottom
            >
              <label htmlFor="retirementAge">Retirement Age</label>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="retirementAge"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e, "retirementAge")}
              onBlur={handleOnBlur}
              value={personalInfo.retirementAge}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              className={classes.label}
              color="textSecondary"
              gutterBottom
            >
              <label htmlFor="lifeExpectancy">Life Expectancy</label>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="lifeExpectancy"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e, "lifeExpectancy")}
              onBlur={handleOnBlur}
              value={personalInfo.lifeExpectancy}
            />
          </Grid>
          <Grid item xs={8}>
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
          <Grid item xs={4}>
            <TextField
              id="investmentPercentage"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e, "investmentPercentage")}
              onBlur={handleOnBlur}
              value={personalInfo.investmentPercentage}
            />
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};

export default PersonalInfoCard;
