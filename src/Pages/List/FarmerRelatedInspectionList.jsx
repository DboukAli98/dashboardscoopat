import React from 'react';
import RelatedFarmerInspectionDatatable from '../../Components/Datatable/RelatedFarmerInspectionDatatable';
import './list.scss';


const FarmerRelatedInspectionList = ({text}) => {
    const farmerId = text;

  return (
    <div className="list">
          
          <div className="listContainer">
           
            <RelatedFarmerInspectionDatatable params ={farmerId}/>
          </div>
        </div>
  );
}

export default FarmerRelatedInspectionList