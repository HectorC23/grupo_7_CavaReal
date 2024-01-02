import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <ul class="navbar-nav sidebar sidebar-dark accordion sidebar-class" id="accordionSidebar">
            

            {/* <!-- Heading --> */}
            <h3 class="sidebar-title">DASHBOARD</h3>

            {/* <!-- Nav Item - Pages --> */}
            <li class="nav-item">
                <Link class="nav-link collapsed" to="/users">
                    <i class="fa-solid fa-user-group" id='icons-side-bar'></i>
                    <span class="sidebar-letters">Usuarios</span>
                </Link>
            </li>

            <li class="nav-item">
                <Link class="nav-link" to="/categories">
                    <i class="fa-solid fa-hashtag" id='icons-side-bar' ></i>
                    <span class="sidebar-letters">Categorias</span></Link>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            <li class="nav-item">
                <Link class="nav-link" to="/products">
                    <i class="fa-solid fa-wine-glass" id='icons-side-bar'></i>
                    <span class="sidebar-letters">Productos</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li class="nav-item">
                <Link class="nav-link" to="/products/last-sold">
                    <i class="fa-solid fa-circle-down" id='icons-side-bar'></i>
                    <span class="sidebar-letters">Ultimos Vendidos</span>
                </Link>
            </li>

            <li class="nav-item">
                <Link class="nav-link" to="/products/most-sold">
                    <i class="fa-solid fa-ranking-star" id='icons-side-bar' ></i>
                    <span class="sidebar-letters">Mas vendidos</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider d-none d-md-block" />
        </ul>
    )
}

export default Sidebar;