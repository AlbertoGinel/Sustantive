import React from 'react'

function Iteration(props) {

  const colorB = "bg-[" + props.color + "]";

  //console.log(colorB);

  return (

  
    <tr className={"bg-white dark:bg-gray-800 border-b  dark:border-gray-700 even:bg-gray-600" }>

      <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {props.name}
      </th>
      <td className="px-6 py-4">
          {props.number}
      </td>
      <td className="px-6 py-4">
          {props.percentage}%
      </td>
    </tr>)
}

export default Iteration;


// bg-white dark:bg-gray-800 border-b  dark:border-gray-700

// <tr className={`border-b  dark:border-gray-700 ${colorB}` }>

//style={{backgroundColor: props.color}}


