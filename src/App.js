import React, { useState, useEffect } from 'react';

import INTERACTIONS from './data/interactions.json';
import COLOR from './data/color.json';

import Iteration from './components/Iteration';


function App() {

  const [output, setOutput] = useState();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");


  const conversion = (date1,date2) => {

    let dateFirst = date1;
    let dateSecond = date2;
  

    const output = {
    
      "total": 0,
      "dates": [],
      "types": []
     };

     let indexName = 0;

     INTERACTIONS.forEach(interac => {

      if(output.dates.indexOf(interac.date) == -1 ){
        output.dates.push(interac.date);
      }

    });

    output.dates = output.dates.sort();

    if (dateFirst == ""){dateFirst = output.dates[0];}
    if (dateSecond == "") {dateSecond = output.dates[output.dates.length-1];}
    
     INTERACTIONS.forEach(interac => {

      if ((interac.date >=  dateFirst)&&(interac.date <=  dateSecond)){

      indexName = output.types.map(type => type.name).indexOf(interac.name);

      output.total += 1;

        if( indexName == -1 ){

          output.types.push({
            "key": interac.sector_id,
            "name": interac.name,
            "number": 1,
            "percentage": 0,
            "color": COLOR[COLOR.map(c => c.name).indexOf(interac.name)].color }
          );
        }else{
          output.types[indexName].number += 1;
        }
      }

    });

    output.types.forEach(type => {

      type.percentage = Math.round((type.number/output.total)*100);

    });

    //objs.sort((a,b) => a.last_nom - b.last_nom);

    output.types = output.types.sort((a,b) => b.number - a.number);
    
    return output;
  }

  useEffect(() => { 
    const inic = conversion("","");
    setOutput(inic);
    setFrom(inic.dates[0]);
    setTo(inic.dates[inic.dates.length-1]);
  }, []);

  useEffect(() => {
    const inic = conversion(from,to);
    setOutput(inic);
  }, [from,to]);

  return (

    <>

    { !output && <p>Loading</p> }
    { output &&

     <div>

      <div className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-500 px-6 py-3 my-5 relative overflow-x-auto shadow-md sm:rounded-lg">

      <label for="from">From:</label>

      <select className="shadow-md sm:rounded-lg mx-5" name="from"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
                if(e.target.value > to ){
                  setTo(e.target.value)
                  }
                }
              } >

        {output.dates.map((d) => <option key={d} value={d}>{d}</option>)}

      </select>


      <label for="to">To:</label>

      <select className="shadow-md sm:rounded-lg mx-5" name="to"
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
                if(e.target.value < from ){
                  setFrom(e.target.value)
                  }
                }
              } >

        {output.dates.map((d) => <option key={d} value={d}>{d}</option>)}
      </select>

      </div>

      <div  className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-3 my-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <p>total: {output.total}</p> 
      </div>

      <div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Interaction
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Percentage
                    </th>
                </tr>
            </thead>
            <tbody>
                {output.types.map((t) => <Iteration key={t.key} name={t.name} number={t.number} color={t.color}   percentage={t.percentage} />)}
            </tbody>
        </table>
      </div>

      </div>


    </div>
    }
  </>);
}

export default App;