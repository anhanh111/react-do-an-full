import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">Tasty</div>
            <ul className="navbar-menu">
                <li>
                    <Link to="hero" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">Trang chủ</Link>
                </li>
                <li>
                    <Link to="menu" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">Thực đơn</Link>
                </li>
                <li>
                    <Link to="services" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">Đặt hàng</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">Giới thiệu</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} spy={true} offset={-80} activeClass="active">Liên hệ</Link>
                </li>
            </ul>

        </header>   
    );
}

export default Navbar;
