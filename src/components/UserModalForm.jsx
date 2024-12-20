import { UserForms } from "./UserForm"

export const UserModalForm = ({ userSelected, initialUserForm, handlerAddUser, handlerCloseForm }) => {
    return (<div className=" abrir-modal animacion fadeIn ">
        <div className="modal" style={{ display: "block" }} tabIndex={-1}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {userSelected.id > 0 ? 'Editar' : 'Crear'}
                        </h5>
                    </div>
                    <div className="modal-body">
                        {/* Formulario de ingreso de nuevo usuario, pero es literalmente los espacios */}
                        {/* Contiene en el UerForms el boton de cerrar el modal porque si estubiera aqui afuera, dependiendo 100% del modal quedaria abajo el boton y no se viera bien */}
                        <UserForms
                            initialUserForm={initialUserForm}
                            userSelected={userSelected}
                            handlerAddUser={handlerAddUser}
                            handlerCloseForm={handlerCloseForm}
                        ></UserForms>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}