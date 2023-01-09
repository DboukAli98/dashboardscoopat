import React from 'react';
import RelatedUserInspectionDatatable from '../../Components/Datatable/RelatedUserInspectionDatatable';
import './list.scss';


const RelatedUserInspectionList = ({text}) => {
    const userId = text;
    console.log(userId);

  return (
    <div className="list">
          
          <div className="listContainer">
           
            <RelatedUserInspectionDatatable params ={userId}/>
          </div>
        </div>
  );
}

export default RelatedUserInspectionList