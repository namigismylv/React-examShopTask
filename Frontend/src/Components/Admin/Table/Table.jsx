import React from "react";
import TableItem from "../TableItem/TableItem";
import './Table.css'

const Table = ({data}) => {
  return (
    <>
      <table class="table table-dark table-striped mt-5 mb-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((dataItem,index)=>{
                return(

                    <TableItem dataItem={dataItem} key={index}/> 
                )
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default Table;
