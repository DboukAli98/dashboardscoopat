import React, { useEffect, useState } from "react";
import "./tables.scss";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import { Audio } from "react-loader-spinner";
import axios from "axios";
import base_url from "../../Utils/Constants/Constants";

const columns = [
  { field: "farmerCode", headerName: "Code", width: 150 },
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

const Tables = () => {
  const [farmers, setFarmers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getFarmers = async () => {
    setLoaded(false);
    const response = await axios.get(
      base_url + "/api/Farmer/GetAllFarmers"

    );
    if ((await response).status === 200) {
      const data = (await response).data;
      setFarmers(data);
      setLoaded(true);
      setError(false);
      console.log(farmers);
    }else {
      setLoaded(true);
      setError(true);
      console.log("Error " + response.statusText);

    }
  };

  useEffect(() => {
    getFarmers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="table">
      {loaded === false &&  (
        <div className="loader">
          <Audio
            className="loader"
            height="30"
            width="30"
            radius="9"
            color="#26547c"
            ariaLabel="loading"
            
          />
          <p className="loading">Loading</p>
        </div>
      )}

      {error === true && loaded === false&& (
        <div className="errorContainer">
          <p className="errorTxt">Failed To Load Farmers</p>
        </div>
      )}

      {farmers && (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.farmerId}
            rows={farmers}
            columns={columns}
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

export default Tables;
