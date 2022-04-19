import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { TweenLite } from "gsap";

let rotated = false;
const Navbar = props => {
  const navbarRef = useRef();

  useEffect(() => {
    if (props.navbarVisibility) {
      TweenLite.to(navbarRef.current, 1, { x: "0%" });
      rotated = true;
    } else if (rotated) {
      TweenLite.to(navbarRef.current, 1, { x: "100%" });
    }
    rotated = true;
  });

  return (
    <div ref={navbarRef} className="navbar">
      <ul className="navbar__nav w-100">
        <li className="mb-5">
          <img src="/static/logo.png" />
        </li>
        <li onClick={props.toggleNavbarVisibility}>
          {/* <a href="https://mechfab.nitumonideka327.now.sh">Home</a> */}
          <a href="/">Home</a>
        </li>
        {/* <li>
          <Link href="/">
            <a>Services</a>
          </Link>
        </li> */}
        <li onClick={props.toggleNavbarVisibility}>
          <Link href="/registration-department">
            <a>Registration Department</a>
          </Link>
        </li>
        <li onClick={props.toggleNavbarVisibility}>
          <Link href="/product-range">
            <a>Product Range</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/product-range">
            <a>Our Works</a>
          </Link>
        </li> */}
        <li onClick={props.toggleNavbarVisibility}>
          <Link href="/valued-customers">
            <a>Valued Customers</a>
          </Link>
        </li>
        <li onClick={props.toggleNavbarVisibility}>
          <Link href="/our-core-value-system">
            <a>Our Core Value System</a>
          </Link>
        </li>
        {/* <li>Contact Us</li> */}
        <li onClick={props.toggleNavbarVisibility}>
          <Link href="/about-us">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
