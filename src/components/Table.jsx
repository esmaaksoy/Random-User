import React from 'react'

const Table = ({firstname,email,phone,age}) => {
  return (
    <tr className="body-tr">
      <td>{firstname}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{age}</td>
    </tr>
  )
}

export default Table
