import React from 'react'

const product = () => {
    const [Parts, setParts]= useState([])
  useEffect(()=>{
  axios.get('http://localhost:3000/getParts')
    .then(Parts=> setParts(Parts.data))
    .catch(err=> console.log(err))
  },[])

  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-50'>
      <table className='table'>
        <thead>
          <tr>
            <th>
              Part_no
            </th>
            <th>
              Description
            </th>
            <th>
              MRP_per_unit
            </th>
            <th>
              After_7per_discount
            </th>
          </tr>
        </thead>
        <tbody>{
          Parts.map(part =>{
            return <tr>
              <td>{part.Part_no}</td>
              <td>{part.Description}</td>
              <td>{part.MRP_per_unit}</td>
              <td>{part.After_7per_discount}</td>
            </tr>
          })}
        </tbody>
      </table>
      <img src='/asset/nature2.webp'/>
      </div>
    </div>
  )
}

export default product
