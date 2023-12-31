import React from 'react'
import { ReactNavbar } from "overlay-navbar"

import logo from "./logo1.png";
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";



const options = {
  burgerColor: "black",
  burgerColorHover: "red",
  logo,
  logoWidth: "15vmax",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  // navColor1: "#2455f4",
  navColor1: "#2d20eb",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "white",
  link1AnimationTime: 1.5,
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  ProfileIconElement: MdAccountCircle,
  profileIcon: true,
  SearchIconElement: MdSearch,
  searchIcon: true,
  CartIconElement: MdAddShoppingCart,
  cartIcon: true,
  profileIconUrl: "/login",
  profileIconColor: "white",
  searchIconColor: "white",
  cartIconColor: "white",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  searchIconAnimationTime: 2,

};
const Header = () => {
  return <ReactNavbar {...options} />
}

export default Header