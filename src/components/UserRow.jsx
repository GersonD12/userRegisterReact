 export const UserRow = ({id, username,email,password,handlerRemoveUser,handlerUserSelectedForm}) => {

    const onRemoveUser= (id)=>{
        handlerRemoveUser(id);
    }
    return (
        <>
            <tr>
                <th>{id}</th>
                <th>{username}</th>
                <th>{email}</th>
                <th>
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
                </th>
                <th>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() =>onRemoveUser(id)}
                        >
                        Remuve
                    </button>
                </th>
            </tr>

        </>
    )
}