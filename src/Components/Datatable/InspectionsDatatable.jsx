import React, { useEffect,useState } from 'react';
import "./datatable.scss";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import axios from "axios";
import base_url from "../../Utils/Constants/Constants";


const columns = [
  { field: "dateOfInspection", headerName: "Date Of Inspection", width: 130 , valueFormatter: ({value}) => value.substring(0,10)},
  {
    field: "employee",
    headerName: "Inspector",
    width: 150,
    valueFormatter: ({ value }) => value.firstname + " " + value.lastname,
  },
  {
    field: "farmer",
    headerName: "Farmer",
    width: 130,
    valueFormatter: ({ value }) => value.firstName + " " + value.lastName,
  },
  {
    field:"farm",
    headerName:"Farm Code",
    width:200,
    renderCell:(params) => {
        return<div>{params.row.farm.farmCode}</div>
    }
  },
  {
    field: "farmer2",
    headerName: "Section",
    width: 130,
    renderCell: (params) => {
      return <div>{params.row.farmer.region}</div>;
    },
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

const InspectionsDatatable = () => {

  const [inspections , setInspections] = useState();
  const [loaded, setLoaded] = useState(false);

  const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to={"/inspections/"+params.row.inspectionId} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
            </div>
          );
        },
      },
  ];

  const GetAlInspections = async () => {
    const url = base_url + "/api/Inspections/GetAllInspections";
    const response = await axios.get(url);
    if(response.status === 200){
      setInspections(response.data);
      setLoaded(true);
    }else{
      setLoaded(true);
      console.log("Error ! " + response.statusText);
    }

  };

  useEffect(() => {

    GetAlInspections();
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
          
        />
        <p className="loading">Loading</p>
      </div>
    )}

    {inspections && (
      <div style={{ height: 400, width: "100%" }}>
         <div className="listTitle">Inspections</div>
        <DataGrid
          getRowId={(row) => row.inspectionId}
          rows={inspections}
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
}

export default InspectionsDatatable