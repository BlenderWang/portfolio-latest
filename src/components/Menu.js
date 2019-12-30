import React, { Component } from "react"
import { Link } from "gatsby"
import Hamburger from "./Hamburger"

export default class Menu extends Component {
  state = {
    pages: [
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
    ],
    open: false,
  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const pages = this.state.pages
    const open = this.state.open

    const hamburger = open ? "menu-btn__hamburger open" : "menu-btn__hamburger"
    const nav = open ? "nav open" : "nav"
    const menuList = open ? "menu-list open" : "menu-list"
    const menuItem = open ? "menu-list__item open" : "menu-list__item"

    return (
      <>
        <Hamburger hamburgerClass={hamburger} handleClick={this.toggleMenu} />
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
}
