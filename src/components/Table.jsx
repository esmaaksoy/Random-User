import React from 'react'

const Table = ({name,email,phone,dob}) => {
  return (
    <tr>
      <td>{name?.first}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{dob?.age}</td>
    </tr>
  )
}

export default Table
