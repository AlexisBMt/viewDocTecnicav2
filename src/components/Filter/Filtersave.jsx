// import React, { useState } from 'react'
// import { api_url } from '../../helpers/data' 

// export default function Filter ( {query, datos, consultaQuery, filterQuery, consulta} ) {
//  const filtro = []
//   datos.map( dato => {
//     filtro.push(dato[query])
//   })
//   const dataArr = new Set(filtro);
//   let result = [...dataArr]
//   const [filter] = useState(result)
//   const [flag, setFlag] = useState(false)

//   const handlerClick = (event) => {
//     if(event.target.value === 'None'){
//       let bandera = false
//       consulta[consulta.indexOf(query) + 1] = ''
//       for(let i = 0; i < consulta.length-1; i++){
//         if( (i % 2) === 0 && consulta[i+1] !== '' ){
//           bandera = true
//         }
//       }
//       consultaQuery(consulta)
//       if(!bandera){
//         fetch(`${api_url}`)
//           .then(res => res.json())
//           .then(data => filterQuery(data))
//       }else{
//         let search = '' 
//         for(let i = 0; i < consulta.length-1; i++){
//           if( (i % 2) === 0 && consulta[i+1] !== '' ){
//             search += `${consulta[i]},${consulta[i+1]},`
//           }
//         }
//         fetch(`${api_url}/q=${search}`)
//         .then(res => res.json())
//         .then(data => filterQuery(data))
//         consultaQuery(consulta)  
//       } 
//       setFlag(bandera)
//     }

//     if(event.target.value !== 'None'){
//       let search = '' 
//       consulta[consulta.indexOf(query) + 1] = event.target.value;
//       for(let i = 0; i < consulta.length-1; i++){
//         if( (i % 2) === 0 && consulta[i+1] !== '' ){
//           search += `${consulta[i]},${consulta[i+1]},`
//           setFlag(true)
//         }
//       }
//       // console.log(consulta)
//       fetch(`${api_url}/q=${search}`)
//         .then(res => res.json())
//         .then(data => filterQuery(data))
//       consultaQuery(consulta)  
//     }
//   }
  
//   return(
//     <div>
//       <select className='form-select form-select-sm mb-3' id='select' onClick={handlerClick}>
//         <option value='None'>None</option>
//         {filter.map(element => (
//           query === 'subcontrata' ? <option value={element}  key={Math.random() * (1000 - 1) + 1}>{element === 0 ? 'NO' : 'SI'}</option> 
//           : query === 'estatus' ? <option value={element}  key={Math.random() * (1000 - 1) + 1}>{element}</option> 
//           : <option value={element}  key={Math.random() * (1000 - 1) + 1}>{element}</option> 
//         ))}
//       </select>
//       {flag ? <button className='btn btn-danger' value='None' onClick={handlerClick}>{consulta[consulta.indexOf(query) + 1]}</button> : <div></div>}      
//     </div>
//   )
// }