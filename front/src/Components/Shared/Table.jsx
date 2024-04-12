import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
//! ---------------------Import Statments------------------------------------

const Table = ({ rows, columns, heading, rowHeight = 52 }) => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Paper
        sx={{
          padding: "1rem 4rem",
          margin: "auto",
          borderRadius: "1rem",
          width: "100%",
          overflow: "hiddem",
          height: "100%",
          boxShadow: "none",
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{
            margig: "2rem",
            textTransform: "uppercase",
          }}
          variant="h4"
        >
          {heading}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          sx={{
            border: "none",
            ".table-header": {
              bgcolor: "#6B298C",
              color: "white",
            },
            height: "80%",
          }}
        />
      </Paper>
    </Container>
  );
};

export default Table;
