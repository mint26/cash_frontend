import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HousingTab from "./Tabs/HousingTab";
import RetirementTab from "./Tabs/RetirementTab";
import MarriageTab from "./Tabs/MarriageTab";
import { TAB } from "../consts";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { getProjectedValues } from "../redux/personalInformationAction";
import { connect } from "react-redux";
import Result from "./Result";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  moveright: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: <HousingTab />,
      selectedTab: "housing",
      showModal: false,
    };
  }
  handleChange = (e, newValue) => {
    let nextTab = <HousingTab />;
    switch (newValue) {
      case TAB.RETIREMENT_TAB:
        nextTab = <RetirementTab />;
        break;
      case TAB.MARRIAGE_TAB:
        nextTab = <MarriageTab />;
        break;
      default:
        nextTab = <HousingTab />;
    }
    this.setState({
      selectedTab: newValue,
      currentTab: nextTab,
    });
  };

  showModal = () => {
    this.props.calculate().then(() => {
      this.setState({ showModal: true });
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={8}>
            <Tabs
              value={this.state.selectedTab}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleChange}
              aria-label="disabled tabs example"
              className={classes.tabs}
            >
              <Tab label="Housing" value={TAB.HOUSING_TAB} />
              <Tab label="Marriage" value={TAB.MARRIAGE_TAB} />
              <Tab label="Retirement" value={TAB.RETIREMENT_TAB} />
            </Tabs>
          </Grid>
          <Grid item xs={4} className={classes.moveright}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              type="submit"
              onClick={this.showModal}
            >
              Calculate
            </Button>
          </Grid>
        </Grid>
        <Grid container>{this.state.currentTab}</Grid>
        <Result
          showModal={this.state.showModal}
          handleClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calculate: (values) => dispatch(getProjectedValues(values)),
  };
};
export default connect(null, mapDispatchToProps)(withStyles(styles)(Dashboard));
