export default function({ trabajos }) {
  return (
    <>
      {trabajos.map(trab => (
          <tr key={Math.random() * (1000 - 1) + 1}>
            <td>{trab.recibido}</td>
            <td>{trab.zona}</td>
            <td>{trab.proyecto}</td>
            <td>{trab.contratista === 'NULL' ? trab.contratista_name : trab.contratista}</td>
            <td>{trab.especialidad}</td>
            <td>{trab.estatus}</td>
            <td>{trab.archivo}</td>
          </tr>
      ))}
    </>
  )
}