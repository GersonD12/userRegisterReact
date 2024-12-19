import { NavLink } from "react-router-dom";

 export const UserRow = ({id, username,email,password,handlerRemoveUser,handlerUserSelectedForm}) => {

    const onRemoveUser= (id)=>{
        handlerRemoveUser(id);
    }
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-secundary btn-sm"
                        onClick={()=>handlerUserSelectedForm(
                            {
                                id,
                                username,
                                email
                            }
                        )}
                        >
                        Update
                    </button>
                </td>
                <td><NavLink className={'btn btn-secondary btn-sm'}
                    to={'/users/edit/'+id}
                    >
                        Update rute</NavLink> </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() =>onRemoveUser(id)}
                        >
                        Remuve
                    </button>
                </td>
            </tr>

        </>
    )
}