import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import PersonalInfoCard from "../components/PersonalInfoCard";
import LineChartCard from "../components/LineChartCard";
import IncomeCard from "../components/IncomeCard";
import ExpenseCard from "../components/ExpenseCard";
import RateCard from "../components/RateCard";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  row: {
    margin: theme.spacing(2),
  },
});

class Dashboard extends Component {
  render() {
    const { classes, updatePersonalInformation } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={3} className={classes.row}>
            <>
              <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                <RateCard />
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
                <PersonalInfoCard onSubmitStep={updatePersonalInformation} />
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
                <LineChartCard />
              </Grid>
            </>
          </Grid>
          <Grid container item xs={12} spacing={3} className={classes.row}>
            <>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <IncomeCard />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <ExpenseCard />
              </Grid>
            </>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
