import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  tableHeaderCell: {
    fontSize: theme.fontSize,
  },
  txtField: {
    margin: theme.spacing(0, 2, 0, 0),
  },
}));

export default function ExpenseCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DataReducer.inputData);
  const expenseData = data.expenses.slice();
  let [items, setItems] = useState(expenseData);
  const handleChange = (e, index, fieldName) => {
    let newItems = items.slice();
    newItems[index][fieldName] = e.target.value;
    setItems(newItems);
  };
  const handleOnBlur = () => {
    let updatedData = Object.assign({}, data, {
      expenses: [...items],
    });
    dispatch(getProjectedValues(updatedData));
  };
  const dataRows = items
    ? items.map((item, index) => {
        return (
          <TableRow key={`listItem${index}`}>
            <TableCell>
              <TextField
                className={classes.txtField}
                variant="standard"
                name="newExpenseName"
                type="text"
                onChange={(e) => handleChange(e, index, "newExpenseName")}
                onBlur={handleOnBlur}
                value={item.newExpenseName}
              />
            </TableCell>
            <TableCell>
              <TextField
                className={classes.txtField}
                variant="standard"
                name={`"newAgeFrom"${index}`}
                type="text"
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
                type="text"
                onChange={(e) => handleChange(e, index, "newAgeTo")}
                onBlur={handleOnBlur}
                value={item.newAgeTo}
              />
            </TableCell>
            <TableCell>
              <TextField
                className={classes.txtField}
                variant="standard"
                name="newExpenseAmount"
                type="text"
                onChange={(e) => handleChange(e, index, "newExpenseAmount")}
                onBlur={handleOnBlur}
                value={item.newExpenseAmount}
              />
            </TableCell>
            <TableCell>
              <TextField
                className={classes.txtField}
                variant="standard"
                name="newRate"
                type="text"
                onChange={(e) => handleChange(e, index, "newRate")}
                onBlur={handleOnBlur}
                value={item.newRate}
              />
            </TableCell>
          </TableRow>
        );
      })
    : [];
  const dataHeader = (
    <TableRow>
      <TableCell>
        <Typography>Source of Expense</Typography>
      </TableCell>
      <TableCell>
        <Typography>Age from</Typography>
      </TableCell>
      <TableCell>
        <Typography>Age To</Typography>
      </TableCell>
      <TableCell>
        <Typography>Monthly Amount</Typography>
      </TableCell>
      <TableCell>
        <Typography>Annual Inflation Rate</Typography>
      </TableCell>
    </TableRow>
  );

  const addExpense = () => {
    const newItem = {
      newExpenseName: "",
      newExpenseAmount: 0,
      newAgeFrom: 20,
      newAgeTo: 30,
      newRate: 3,
    };
    let newItems = [...items, newItem];
    setItems(newItems);
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
            Expense
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
            onClick={addExpense}
            variant="contained"
            size="small"
            color="primary"
          >
            <AddIcon className={classes.icon} />
          </Button>
        </Grid>
      </CardContent>
    </>
  );
}
