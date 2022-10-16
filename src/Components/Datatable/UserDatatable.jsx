import axios from "axios";
import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";

const columns = [
  { field: "firstname", headerName: "Firstname", width: 200 },
  { field: "lastname", headerName: "Lastname", width: 150 },
  { field: "createdAt", headerName: "Date Of Creation", width: 130 },
  { field: "idType", headerName: "Identity Type", width: 130 },
  { field: "idNumber", headerName: "Identity Number", width: 130 },
  { field: "contact", headerName: "Phone", width: 130 },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbar
        csvOptions={{
          fileName: "FarmersData",
          delimiter: ";",
          utf8WithBom: true,
        }}
      />
    </GridToolbarContainer>
  );
}

const UserDatatable = () => {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];

  const getUsers = async () => {
    setLoaded(false);
    const response = await axios.get(
      "https://localhost:7066/api/Authentication/GetAllInspectors"
    );
    if (response.status === 200) {
      const data = response.data;
      setUsers(data);
      setLoaded(true);
      console.log(users);
    } else {
      setLoaded(true);
      console.log("Error " + response.status);
    }
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="datatable">
      {loaded === false && (
        <div className="loader">
          <Audio
            height="30"
            width="30"
            radius="9"
            color="#26547c"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
          <p className="loading">Loading</p>
        </div>
      )}

      {users && (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={users}
            columns={columns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            components={{ Toolbar: CustomToolbar }}
          />
        </div>
      )}
    </div>
  );
};

export default UserDatatable;
