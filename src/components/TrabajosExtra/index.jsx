import React, { useState } from 'react'
import { api_trabajos } from '../../helpers/data'
import { useTrabajos } from '../../hooks/useTrabajos'
import Spinner from '../Spinner/index'
import Pagination from '../Paginate/index'
import Header from './Header'
import GetTrabajos from './GetTrabajos'
import Filter from '../Filter/index'

export default function TrabajosExtra () {
  const { trabajos, setTrabajos, consulta, setConsulta, page, setPage, url, setUrl, loading } = useTrabajos()
  const [currentPage] = useState(1)
  const [datosPerPage, setDatosPerPage] = useState(10)

  //Get Current Contrato Page
  const indexOfLastContrato = page * datosPerPage
  const indexOfFirstContrato = indexOfLastContrato - datosPerPage
  const currentTrabajos = trabajos.slice(indexOfFirstContrato, indexOfLastContrato)

  //Filter Data
  // const filterQuery = (dataQuery) => setTrabajos(dataQuery) //
  const consultaQuery = (consultaq) => setConsulta(consultaq) //
  const updateUrl = (api_url) => setUrl(api_url)

  //change page
  const max = Math.ceil( trabajos.length / datosPerPage )
  const paginate = (pageNumber) => setPage( pageNumber < 1 ? 1 : pageNumber > max ? max : pageNumber )

  const optionHandler = (event) => {
    parseInt(event.target.value) === 0 ? setDatosPerPage(trabajos.length) : setDatosPerPage(parseInt(event.target.value))
  }

  return(
    <>
      <div className='mx-4'>
        {loading ? <Spinner/> : <div> </div>}
        <table className='table table-striped table-bordered text-secondary mt-3'>
          <thead> <Header /> 
            <tr className='bg-blue-table'>
              <th>{loading ? null : <Filter query='recibido' datos={ trabajos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_trabajos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='zona' datos={ trabajos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_trabajos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='proyecto' datos={ trabajos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_trabajos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='contratista' datos={ trabajos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_trabajos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='especialidad' datos={ trabajos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_trabajos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='estatus' datos={ trabajos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_trabajos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='archivo' datos={ trabajos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_trabajos} consulta={consulta}/> }</th>
            </tr>
          </thead>
          <tbody>
            <GetTrabajos trabajos={currentTrabajos} />
          </tbody>
        </table>
      </div>

      <section className='row mx-5 my-5'>
        <div className='col-md-5'>
          <select  className='form-select' style={{width: '5rem'}} onClick={optionHandler}>
            <option value='0'>All</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>

        <div className='col-md-2 align-self-center'>
          <Pagination  dataPerPage={datosPerPage} totalData={trabajos.length} currentPage={page} paginate={paginate}/>            
        </div>
              
        <div className='col-md-5'>
          <p className='text-end'>Results {currentPage} - {Math.ceil( trabajos.length / datosPerPage )} of {Math.ceil( trabajos.length / datosPerPage )}</p>
        </div>
      </section>
    </>
  )
}