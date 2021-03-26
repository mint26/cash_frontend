import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HouseIcon from "@material-ui/icons/House";
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
  moveright: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function HousingCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataReducer.inputData);
  const housingInfoData = data.housingInfo;
  const [housingInfo, setHousingInfo] = useState(housingInfoData);

  const handleChange = (e, fieldName) => {
    let info = {};
    info[fieldName] = e.target.value;
    let newHousingInfo = Object.assign({}, housingInfo, info);
    setHousingInfo(newHousingInfo);
  };
  const handleOnBlur = () => {
    let updatedData = Object.assign({}, data, {
      housingInfo: housingInfo,
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
            House specific
          </Typography>
        }
        avatar={<HouseIcon />}
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
              <label htmlFor="housePrice">House</label>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="housePrice"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e, "housePrice")}
              onBlur={handleOnBlur}
              value={housingInfo.housePrice}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              className={classes.label}
              color="textSecondary"
              gutterBottom
            >
              <label htmlFor="targetAge">Age to buy house</label>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="targetAge"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e, "targetAge")}
              onBlur={handleOnBlur}
              value={housingInfo.targetAge}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              className={classes.label}
              color="textSecondary"
              gutterBottom
            >
              <label htmlFor="houseInterestRate">House interest rate</label>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="houseInterestRate"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e, "targetAge")}
              onBlur={handleOnBlur}
              value={housingInfo.houseInterestRate}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              className={classes.label}
              color="textSecondary"
              gutterBottom
            >
              <label htmlFor="downPayment">Down payment</label>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="downPayment"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e, "downPayment")}
              onBlur={handleOnBlur}
              value={housingInfo.downPayment}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              className={classes.label}
              color="textSecondary"
              gutterBottom
            >
              <label htmlFor="loanLength">Loan Length</label>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="loanLength"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e, "loanLength")}
              onBlur={handleOnBlur}
              value={housingInfo.loanLength}
            />
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
}
