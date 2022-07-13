import { NavLink, Outlet } from "react-router-dom"

export default function Products() {
  return (
    <div>
        <input type='search' placeholder="Search products"></input>
        <nav>
            <NavLink to='featured' >Featured</NavLink>
            <NavLink to='new' >New</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}
