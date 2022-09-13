import { useState, useContext, useEffect } from 'react'
import Context from '../context/TrabajosContext'
import { getAllTrabajos } from '../services/fetching'
import { trabajosExtra_data } from '../helpers/data';

export function useTrabajos (){
  const { trabajos, setTrabajos, consulta, setConsulta, page, setPage, url, setUrl } = useContext(Context);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTrabajos(trabajosExtra_data)
    getAllTrabajos(url)
      .then(result => {
        setTrabajos(result)
        setLoading(false)
      })
  }, [setTrabajos, setUrl, url]);

  return { trabajos, setTrabajos, consulta, setConsulta, page, setPage, url, setUrl, loading }
}