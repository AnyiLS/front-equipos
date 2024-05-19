import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/Login/Login";
import Home from "../screens/Home/Home";
import Register from "../screens/Register/Register";
import RecuperarContrasena from "../screens/RecuperarContrasena/RecuperarContrasena";
import QuienesSomos from "../screens/QuienesSomos/QuienesSomos";
import Cursos from "../screens/Cursos/Cursos";
import Recursos from "../screens/Recursos/Recursos";
import Perfil from "../screens/Perfil/Perfil";
import CursosForma from "../screens/CursosForma/CursosForma";
/** Local Modules */
import React from "react";

const Router = () =>{
    const routes = [
        {
            path: "/login",  
            component : <Login/>
        },
        {
            path: "/register",  
            component : <Register/>
        },
        {
            path: "/password-recovery",  
            component : <RecuperarContrasena/>
        },
        {
            path: "/",  
            component : <Home/>,
            isPrivate: true
        },
        {
            path: "/quienes-somos",  
            component : <QuienesSomos/>
        },
        {
            path: "/cursos",  
            component : <CursosForma/>
        },
        {
            path: "/recursos",  
            component : <Recursos/>
        },
        {
            path: "/perfil",  
            component : <Perfil/>
        },
        {
            path: "/cursos-forma/:slug",  
            component : <Cursos/>
        }
    ]

    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((item, index) => (
                        <Route key={index} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </BrowserRouter>
    );
}

export default Router;