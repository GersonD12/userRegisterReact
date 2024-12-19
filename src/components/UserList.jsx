import { UserRow } from "./UserRow"

export const UserList = ({ users = [], handlerRemoveUser, handlerUserSelectedForm }) => {

    return (
        <>
            <p>Listado de usuarios</p>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>username</th>
                        <th>email</th>
                        <th>update</th>
                        <th>update2 route</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({id, username, email} )=> (
                            <UserRow 
                            key={id} 
                            id={id} 
                            username={username} 
                            email={email} 
                            handlerUserSelectedForm = {handlerUserSelectedForm}
                            handlerRemoveUser ={handlerRemoveUser}></UserRow>
                        ))
                    }
                </tbody>

            </table>
        </>
    )
}