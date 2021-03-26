import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CustomTable from "./Table";
import Button from "@material-ui/core/Button";
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
  icon: {
    fontSize: 25,
  },
  txtField: {
    margin: theme.spacing(0, 2, 0, 0),
  },
}));

export default function IncomeCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataReducer.inputData);
  const incomeData = data.incomes.slice();
  let [items, setItems] = useState(incomeData);

  const handleOnBlur = () => {
    let updatedData = Object.assign({}, data, {
      incomes: [...items],
    });
    dispatch(getProjectedValues(updatedData));
  };

  const handleChange = (e, index, fieldName) => {
    let newItems = items.slice();
    newItems[index][fieldName] = e.target.value;
    setItems(newItems);
  };
  const dataRows = items
    ? items.map((item, index) => {
        return (
          <TableRow key={`listItem${index}`}>
            <TableCell>
              <TextField
                className={classes.txtField}
                variant="standard"
                name="newIncomeName"
                type="text"
                onChange={(e) => handleChange(e, index, "newIncomeName")}
                onBlur={handleOnBlur}
                value={item.newIncomeName}
              />
            </TableCell>
            <TableCell>
              <TextField
                className={classes.txtField}
                variant="standard"
                name={`"newAgeFrom"${index}`}
                type="number"
                onChange={(e) => handleChange(e, index, "newAgeFrom")}
                onBlur={handleOnBlur}
                value={item.newAgeFrom}
              />
            </TableCell>
            <TableCell>
              <TextField
                className={classes.txtField}
                variant="standard"
                name="newAgeTo"
                type="number"
                onChange={(e) => handleChange(e, index, "newAgeTo")}
                onBlur={handleOnBlur}
                value={item.newAgeTo}
              />
            </TableCell>
            <TableCell>
              <TextField
                className={classes.txtField}
                variant="standard"
                name="newIncomeAmount"
                type="number"
                onChange={(e) => handleChange(e, index, "newIncomeAmount")}
                onBlur={handleOnBlur}
                value={item.newIncomeAmount}
              />
            </TableCell>
            <TableCell>
              <TextField
                className={classes.txtField}
                variant="standard"
                name="newIncomeRate"
                type="number"
                onChange={(e) => handleChange(e, index, "newIncomeRate")}
                onBlur={handleOnBlur}
                value={item.newIncomeRate}
              />
            </TableCell>
            <TableCell>
              <TextField
                className={classes.txtField}
                variant="standard"
                name="newBonus"
                type="number"
                onChange={(e) => handleChange(e, index, "newBonus")}
                onBlur={handleOnBlur}
                value={item.newBonus}
              />
            </TableCell>
          </TableRow>
        );
      })
    : [];
  const dataHeader = (
    <TableRow>
      <TableCell>
        <Typography>Source of Income</Typography>
      </TableCell>
      <TableCell>
        <Typography>Age From</Typography>
      </TableCell>
      <TableCell>
        <Typography>Age To</Typography>
      </TableCell>
      <TableCell>
        <Typography>Monthly Amount</Typography>
      </TableCell>
      <TableCell>
        <Typography>Bonus (Months)</Typography>
      </TableCell>
      <TableCell>
        <Typography>Annual Rate of increase</Typography>
      </TableCell>
    </TableRow>
  );

  const addIncome = () => {
    const newItem = {
      newIncomeName: "",
      newIncomeAmount: 0,
      newAgeFrom: 20,
      newAgeTo: 30,
      newRate: 3,
      newBonus: 0,
    };
    let newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Income
          </Typography>
        }
        avatar={<AttachMoneyIcon />}
      />
      <CardContent>
        <Grid container>
          <CustomTable
            hasPagination={false}
            dataRows={dataRows}
            dataHeader={dataHeader}
          ></CustomTable>
          <Button
            onClick={addIncome}
            variant="contained"
            size="small"
            color="primary"
          >
            <AddIcon className={classes.icon} />
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}
