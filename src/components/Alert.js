import React from 'react';

const capitalize = (str)=>{
     return  ( str[0].toUpperCase() + str.substring(1,str.length-1).toLowerCase());
}



function Alert(props) {
  return (
   ( props.alert && props.alert.type )?(<div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show d-flex justify-content-between align-items-center`} role="alert">
   <span><strong className='mx-2'>{capitalize(props.alert.type) + "!!"}</strong>{props.alert.msg}</span>
 </div>):null
  )
}

export default Alert;
