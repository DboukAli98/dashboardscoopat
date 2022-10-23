import axios from "axios";
import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";

const columns = [
  { field: "farmCode", headerName: "Code", width: 200 },
  { field: "totalArea", headerName: "Total Area (ha)", width: 150 },
  { field: "lattitude", headerName: "Lattitude", width: 130 },
  { field: "longtitude", headerName: "Longtitude", width: 130 },
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

const FarmDatatable = () => {
  const [farms, setFarms] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/farms/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];

  const getFarms = async () => {
    setLoaded(false);
    const response = await axios.get(
      "https://localhost:7066/api/Farm/GetAllFarms"
    );
    if (response.status === 200) {
      const data = response.data;
      setFarms(data);
      setLoaded(true);
      console.log(farms);
    } else {
      setLoaded(true);
      console.log("Error " + response.status);
    }
  };

  useEffect(() => {
    getFarms();
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

      {farms && (
        <div style={{ height: 400, width: "100%" }}>
          <div className="outAction">
            <Link to="/users/new" style={{ textDecoration: "none" }}>
              <div className="viewButton">Add New Farm</div>
            </Link>
          </div>
          <div className="listTitle">Farms</div>
          <DataGrid
            getRowId={(row) => row.farmId}
            rows={farms}
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

export default FarmDatatable;
