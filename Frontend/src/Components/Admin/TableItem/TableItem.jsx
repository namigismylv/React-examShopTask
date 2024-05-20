import axios from "axios";
import React, { useContext } from "react";
import MainContext from "../../../Context/Context";

const TableItem = ({ dataItem }) => {
  const { data, setData } = useContext(MainContext);
  
  return (
    <>
      <tr>
        <th scope="row">{dataItem._id}</th>
        <td>
          <img src={dataItem.image} width="70px" alt="" />
        </td>
        <td>{dataItem.title}</td>
        <td>{dataItem.desc}</td>
        <td>${dataItem.price}</td>
        <td>
          <button className="btn btn-danger" onClick={()=>{
            axios.delete(`http://localhost:5000/home/${dataItem._id}`).then(res => {
              setData([...res.data])
              
            });
          }}>delete</button>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
