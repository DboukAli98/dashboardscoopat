import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import axios from "axios";

const columns = [
  { field: "farmerCode", headerName: "Code", width: 130 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "region", headerName: "Section", width: 130 },
  {
    field: "birthDate",
    headerName: "BirthDate",
    type: "number",
    width: 66,
  },
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

const Datatable = () => {
  const [farmers, setFarmers] = useState([]);
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

  const getFarmers = async () => {
    setLoaded(false);
    const response = await axios.get(
      "https://localhost:7066/api/Farmer/GetAllFarmers"
    );
    if ((await response).status === 200) {
      const data = (await response).data;
      setFarmers(data);
      setLoaded(true);

      console.log(farmers);
    } else {
      setLoaded(true);
      console.log("Error " + response.statusText);
    }
  };

  useEffect(() => {
    getFarmers();
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

      {farmers && (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.farmerId}
            rows={farmers}
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

export default Datatable;
