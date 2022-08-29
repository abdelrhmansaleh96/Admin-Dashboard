import React from "react";
import classes from "./Table.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Typography, Box } from "@mui/material";

function List() {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <div className={classes.table}>
      {" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tracking ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>

                <TableCell align="left">{row.product}</TableCell>
                <TableCell align="left">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt={row.customer}
                      src={row.img}
                      sx={{ marginRight: "5px", height: "30px", width: "30px" }}
                    />
                    <div>{row.customer}</div>
                  </Box>
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.method}</TableCell>
                <TableCell align="left">
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      borderRadius: "5px",
                      color: row.status === "Approved" ? "green" : "goldenrod",
                      backgroundColor:
                        row.status === "Approved"
                          ? "rgba(0, 128, 0, 0.151)"
                          : "rgba(189, 189, 3, 0.103)",
                    }}
                    padding="5px"
                  >
                    {" "}
                    {row.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List;
