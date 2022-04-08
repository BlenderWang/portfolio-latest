import React, { useState } from "react"
import { Link } from "gatsby"
import Hamburger from "./Hamburger"

const Menu = () => {
    const [open, setOpen] = useState(false)
    const pages = [
      {
        id: 0,
        name: "home",
        url: "",
      },
      {
        id: 1,
        name: "about",
        url: "about",
      },
      {
        id: 2,
        name: "portfolio",
        url: "portfolio",
      },
      {
        id: 3,
        name: "contact",
        url: "contact",
      },
    ]

    const toggleMenu = () => {
      setOpen(!open)
    }

    const hamburger = open ? "menu-btn__hamburger open" : "menu-btn__hamburger"
    const nav = open ? "nav open" : "nav"
    const menuList = open ? "menu-list open" : "menu-list"
    const menuItem = open ? "menu-list__item open" : "menu-list__item"

    return (
      <>
        <Hamburger hamburgerClass={hamburger} handleClick={toggleMenu} />
        <div className={nav}>
          <ul className={menuList}>
            {pages.map(page => (
              <li key={page.id} className={menuItem}>
                <Link
                  to={`/${page.url}`}
                  className="menu-list__link"
                  activeClassName="active-class"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
}

export default Menu