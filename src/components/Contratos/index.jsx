import React, { useState } from 'react'
import { useContratos } from '../../hooks/useContratos'
import Spinner from '../Spinner/index'
import Header from './Header'
import GetContratos from './GetContratos'
import Pagination from '../Paginate/index'
import Filter from '../Filter/index'
import { api_contratos } from '../../helpers/data'

export default function Contratos () {
  const { contratos, setContratos, consulta, setConsulta, page, setPage, url, setUrl, loading } = useContratos()
  const [currentPage] = useState(1)
  const [datosPerPage, setDatosPerPage] = useState(10)

  //Get Current Contrato Page
  const indexOfLastContrato = page * datosPerPage
  const indexOfFirstContrato = indexOfLastContrato - datosPerPage
  const currentContratos = contratos.slice(indexOfFirstContrato, indexOfLastContrato)

  //Filter Data
  // const filterQuery = (dataQuery) => setContratos(dataQuery) //
  const consultaQuery = (consultaq) => setConsulta(consultaq) //
  const updateUrl = (update_url) => setUrl(update_url)

  //change page
  const max = Math.ceil( contratos.length / datosPerPage )
  const paginate = (pageNumber) => setPage( pageNumber < 1 ? 1 : pageNumber > max ? max : pageNumber )

  const optionHandler = (event) => {
    parseInt(event.target.value) === 0 ? setDatosPerPage(contratos.length) : setDatosPerPage(parseInt(event.target.value))
  }

  return(
    <>
      <div className='mx-4'>
        {loading ? <Spinner/> : <div> </div>}
        <table className='table table-striped table-bordered text-secondary mt-3'> 
          <thead>
            <Header />
            <tr className='bg-blue-table'>
              <th>{loading ? null : <Filter query='recibido' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='proyecto' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='contratista' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='especialidad'datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta} /> }</th>
              <th>{loading ? null : <Filter query='contratista_objeto' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='registro_patronal' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='num_aprox_trabajadores' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='monto_obra' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='fecha_inicio' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='fecha_termino' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='subcontrata' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='comentarios' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='estatus' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
              <th>{loading ? null : <Filter query='archivo' datos={ contratos } consultaQuery={consultaQuery} updateUrl={updateUrl} url={api_contratos} consulta={consulta}/> }</th>
            </tr>
          </thead>
          <tbody>
            <GetContratos contratos={currentContratos}/>
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
          <Pagination  dataPerPage={datosPerPage} totalData={contratos.length} currentPage={page} paginate={paginate}/>            
        </div>
              
        <div className='col-md-5'>
          <p className='text-end'>Results {currentPage} - {Math.ceil( contratos.length / datosPerPage )} of {Math.ceil( contratos.length / datosPerPage )}</p>
        </div>
      </section>
    </>
  )
}