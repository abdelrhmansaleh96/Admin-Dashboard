import React from "react";
import "./List.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatable";
import { Button } from "@mui/material";

function List() {
  const actionColumn = [
    {
      field: "action",
      header: "Action",
      width: 200,
      renderCell: (row) => {
        return (
          <div className="cellAction">
            <Button
              variant="outlined"
              color="primary"
              size="small"
              sx={{
                padding: "3px 3px",
                minWidth: "48px",
              }}
            >
              View
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="small"
              sx={{
                padding: "3px 3px",
                minWidth: "48px",
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="list">
      <div className="datatable">
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick={true}
        />
      </div>
    </div>
  );
}

export default List;
