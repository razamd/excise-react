import React, { Component } from 'react'

const User = ({ user, onEdit,onDelete }) => {
    return (
        <tr>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <button type="button" className="btn btn-danger"
                    onClick={() => onDelete(user._id)}

                >
                    Delete
                 </button>
                <button type="button" className="btn btn-default"
                    onClick={() => onEdit(user)}>
                    Edit
               </button>
            </td>
        </tr>      
        
    )

}
export default User
