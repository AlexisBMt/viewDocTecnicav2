import { useState, useContext, useEffect } from 'react'
import Context from '../context/ContratosContext'
import { getAllContratos } from '../services/fetching'
import { contratos_data } from '../helpers/data';

export function useContratos( ){
  const { contratos, setContratos, consulta, setConsulta, page, setPage, url, setUrl } = useContext(Context);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setContratos(contratos_data)
    getAllContratos(url)
      .then(result => {
        setContratos(result)
        setLoading(false)
      })
  }, [setContratos, setUrl, url]);

  return { contratos, setContratos, consulta, setConsulta, page, setPage, url, setUrl, loading }
}