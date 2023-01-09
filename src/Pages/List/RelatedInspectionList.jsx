import React from 'react';
import './list.scss';
import RelatedInspectionsDatatable from '../../Components/Datatable/RelatedInspectionsDatatable';

const RelatedInspectionList = ({text}) => {
    const farmId = text;
    console.log(farmId);
    return (
        <div className="list">
          
          <div className="listContainer">
           
            <RelatedInspectionsDatatable params ={farmId}/>
          </div>
        </div>
      );
}

export default RelatedInspectionList