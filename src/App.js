import logo from './logo.svg';
import WhitePage from './Whitepage';
import React, { useEffect, useState } from 'react';
import './App.css';




class App extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
      var current = "";
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll(".nav-link");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id"); }
        });

        navLi.forEach((li) => {
          li.classList.remove("active");
          if (li.classList.contains(current)) {
            li.classList.add("active");
          }
        });
  }


  render() {
    return (
    <div>
      <WhitePage />
      <br />
      <br />
      <br />
      <br />
      <br />

      <footer style={{position: "relative"}} className="py-5">
        <div className="container">
          <p className="m-0 text-center text-white" style={{fontSize:"10px"}}>Copyright &copy; Zal Joshi 2022</p>
          <p className="m-0 text-center text-white" style={{fontSize:"10px"}}>Last updated: January 2022</p>
        </div>
      </footer>
    </div>
    )
  }
}

export default App;
