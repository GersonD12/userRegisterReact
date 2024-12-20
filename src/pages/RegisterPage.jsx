import { useEffect, useState } from "react"
import { UserForms } from "../components/UserForm"
import { useParams } from "react-router-dom";
export const RegisterPage = ({ users = [], handlerAddUser, initialUserForm }) => {

    const [userSelected, setUserSeleted] = useState(initialUserForm);

    const { id } = useParams();
    
    useEffect(() => {
        if (id) {
            const user = users.find(u => u.id == id) || initialUserForm;
            setUserSeleted(user);
        }

    }, [id])
    return (
        <div className="container my-4">
            <h4>{userSelected.id > 0 ? 'Editar' : 'Registrar'}</h4>
            <div className="row">
                <div className="col">
                    <UserForms
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm}
                        userSelected={userSelected}
                    >
                    </UserForms>
                </div>
            </div>
        </div>
    )
}