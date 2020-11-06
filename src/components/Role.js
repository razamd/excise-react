import React from 'react'

const Role = ({ role, onEdit,onDelete }) => {
    return (
        <tr>
            <td>{role._id}</td>
            <td>{role.name}</td>
            <td>{role.display_name}</td>
            <td>{role.description}</td>
            <td>
                <button type="button" className="btn btn-danger"
                    onClick={() => onDelete(role._id)}

                >
                    Delete
                 </button>
                <button type="button" className="btn btn-default"
                    onClick={() => onEdit(role)}>
                    Edit
               </button>
            </td>
        </tr>
    )

}
export default Role
