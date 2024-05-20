import React, { useContext, useEffect } from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import MainContext from '../../../Context/Context';
import { Helmet } from 'react-helmet';
const Add = () => {
  const {data,setData}=useContext(MainContext)
  return (
    <>
      <Helmet>
        <title>
          Add
        </title>
      </Helmet>
       <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ image: '', title: '' ,desc:"",price:"" }}
       
       onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:5000/home",{...values}).then((res)=>{
          setData(res.data)
          })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="image"
             placeholder='image'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
           {errors.image && touched.image && errors.image}
           <input
             type="text"
             name="title"
             placeholder='title'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           {errors.title && touched.title && errors.title}
           <input
             type="text"
             name="desc"
             placeholder='description'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.desc}
           />
           {errors.desc && touched.desc && errors.desc}
           <input
             type="number"
             name="price"
             placeholder='price'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik> 
    </>
  )
}

export default Add
