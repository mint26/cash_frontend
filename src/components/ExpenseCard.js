import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CustomTable from "./Table";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

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

export default function ExpenseCard() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [initialValues] = useState({
    newExpenseName: "",
    newExpenseAmount: 0,
  });
  const dataRows = items
    ? items.map((item, index) => {
        return (
          <TableRow key={`listItem${index}`}>
            <TableCell>
              <Typography>{item.name}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{item.amount}</Typography>
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
        <Typography>Amount</Typography>
      </TableCell>
    </TableRow>
  );
  const formik = useFormik({
    enableReinitialize: false,
    initialValues: initialValues,
  });

  let { values, handleChange } = formik;
  const addExpense = () => {
    const newItem = {
      name: values.newExpenseName,
      amount: values.newExpenseAmount,
    };
    let newItems = [...items, newItem];
    setItems(newItems);
    values.newExpenseName = "";
    values.newExpenseAmount = 0;
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
            Expense
          </Typography>
        }
        avatar={<ShoppingBasketIcon />}
      />
      <CardContent>
        <Grid container>
          <TextField
            className={classes.txtField}
            variant="outlined"
            label="Source of income"
            name="newExpenseName"
            type="text"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            value={values.newExpenseName}
          />
          <TextField
            className={classes.txtField}
            variant="outlined"
            label="Amount"
            name="newExpenseAmount"
            type="number"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            value={values.newExpenseAmount}
          />
          <Button
            onClick={addExpense}
            variant="contained"
            size="small"
            color="primary"
          >
            <AddIcon className={classes.icon} />
          </Button>
          <CustomTable
            hasPagination={false}
            dataRows={dataRows}
            dataHeader={dataHeader}
          ></CustomTable>
        </Grid>
      </CardContent>
    </Card>
  );
}
