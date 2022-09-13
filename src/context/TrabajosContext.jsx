import React, { useState } from 'react'
import { api_trabajos } from '../helpers/data'
const Context = React.createContext({})

export function TrabajosContextProvider ({children}) {
  const [trabajos, setTrabajos] = useState([])
  const [page, setPage] = useState(1)
  const [url, setUrl] = useState(api_trabajos)
  const [consulta, setConsulta] = useState(['recibido', '', 'zona', '', 'proyecto', '', 'contratista', '', 'especialidad', '', 'estatus', '', 'archivo', ''])
    return (
        <Context.Provider value={{trabajos, setTrabajos, consulta, setConsulta, page, setPage, url, setUrl}} >
            {children}
        </Context.Provider>
    )
}

export default Context