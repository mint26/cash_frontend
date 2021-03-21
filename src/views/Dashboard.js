import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HousingTab from "./Tabs/HousingTab";
import RetirementTab from "./Tabs/RetirementTab";
import MarriageTab from "./Tabs/MarriageTab";
import { TAB } from "../consts";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    margin: theme.spacing(0, 0, 2, 0),
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: <HousingTab />, selectedTab: "housing" };
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
    }
    this.setState({
      selectedTab: newValue,
      currentTab: nextTab,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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
        {this.state.currentTab}
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
