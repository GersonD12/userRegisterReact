import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"

export const UserRoutes = ({ login, handlerLogout }) => {
    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    } = useUsers();
    return (
        <>
            <Navbar login={login} handlerLogout={handlerLogout}></ Navbar>
            <Routes>
                {/* hija de una ruta que ya tendra el / */}

                <Route path="users" element={<UsersPage
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    visibleForm={visibleForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                ></UsersPage>} />
                <Route path="users/register" element={<RegisterPage
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm}
                >
                </RegisterPage>} />
                <Route path="users/edit/:id" element={<RegisterPage
                    users={users}
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm}
                >
                </RegisterPage>} />
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}