/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.inputRef = React.createRef();
        this.input2Ref = React.createRef();
        this.nav = React.createRef();
        this.navMenu = React.createRef();
      }
      toggleMenu = () =>{
          if(!this.state.showMenu) {
              this.inputRef.current.classList.add("open");
              this.input2Ref.current.classList.add("open");
              this.nav.current.classList.add("open");
              this.navMenu.current.classList.add("open");
              this.setState({
                  showMenu: true
                });
            document.firstElementChild.classList.remove("animatedOut");
        } else {
              (this.inputRef.current).classList.remove("open");
              (this.input2Ref.current).classList.remove("open");
              this.nav.current.classList.remove("open");
              this.navMenu.current.classList.remove("open");
              this.setState({
                  showMenu: false
          })
        }
    }
        handleClick = (e) => {
            e.target.ownerDocument.firstElementChild.classList.add("animatedOut");
        }
    render() {
        return (
        <>
            <header>
                <div className="container">
                    <div className="menu-btn" ref={this.inputRef} onClick={this.toggleMenu}>
                        <span className="menu-btn-burger" ref={this.input2Ref}></span>
                    </div>
                    <nav className="navbar" ref={this.nav}>
                        <div className="myPic"></div>
                        <ul ref={this.navMenu}>
                            <li><Link to="/" className="active">Home</Link></li>
                            <li onClick={this.handleClick}><Link to="/work">Work</Link></li>
                            <li onClick={this.handleClick}><Link to="/about">About</Link></li>
                            <li onClick={this.handleClick}><Link to="/contact">Contact Me</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="home-main">
                <div className="container">
                    <div className="header-logo">
                        <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1595544226/Portfolio%20site/f3f7eb57-efb5-4062-92e8-c6e001a43af7_toamzn.png" alt="header logo"/>
                    </div>
                    <div className="home">
                        <div className="home-text line1">
                            <h1 data-aos="fade-left" data-aos-delay="0">H</h1><h1  data-aos="fade-left" data-aos-delay="100">i</h1><h1 data-aos="fade-left" data-aos-delay="150">!</h1><h1  data-aos="fade-left" data-aos-delay="200">,&nbsp;</h1>
                            <h1  data-aos="fade-left" data-aos-delay="250">M</h1><h1 data-aos="fade-left" data-aos-delay="300">y&nbsp;</h1><h1 data-aos="fade-left" data-aos-delay="350">n</h1><h1 data-aos="fade-left" data-aos-delay="400">a</h1>
                            <h1 data-aos="fade-left" data-aos-delay="450">m</h1><h1 data-aos="fade-left" data-aos-delay="500">e&nbsp;</h1><h1 data-aos="fade-left" data-aos-delay="550">i</h1><h1 data-aos="fade-left" data-aos-delay="600">s</h1>
                        </div>
                        <div className="home-text line2">
                            <h1  data-aos="fade-left" data-aos-delay="750">F</h1><h1 data-aos="fade-left" data-aos-delay="800">e</h1><h1 data-aos="fade-left" data-aos-delay="850">m</h1><h1 data-aos="fade-left" data-aos-delay="900">i&nbsp;</h1>
                        <div className="home-text lastName"><h1 data-aos="fade-left" data-aos-delay="950">L</h1><h1 data-aos="fade-left" data-aos-delay="1000">a</h1><h1 data-aos="fade-left" data-aos-delay="1050">w</h1><h1 data-aos="fade-left" data-aos-delay="1100">a</h1><h1 data-aos="fade-left" data-aos-delay="1150">l</h1></div>
                        </div>
                        <div className="home-text line3">
                            <h1 data-aos="fade-left" data-aos-delay="1300">W</h1><h1 data-aos="fade-left" data-aos-delay="1350">e</h1><h1 data-aos="fade-left" data-aos-delay="1400">b&nbsp;</h1>
                            <h1 data-aos="fade-left" data-aos-delay="1450">D</h1><h1 data-aos="fade-left" data-aos-delay="1500">e</h1><h1 data-aos="fade-left" data-aos-delay="1550">v</h1><h1 data-aos="fade-left" data-aos-delay="1600">e</h1>
                            <h1 data-aos="fade-left" data-aos-delay="1650">l</h1><h1 data-aos="fade-left" data-aos-delay="1700">o</h1><h1 data-aos="fade-left" data-aos-delay="1750">p</h1><h1 data-aos="fade-left" data-aos-delay="1800">e</h1>
                            <h1 data-aos="fade-left" data-aos-delay="1850">r</h1><h1 data-aos="fade-left" data-aos-delay="1900">,&nbsp;</h1><h1 data-aos="fade-left" data-aos-delay="1950">F</h1><h1 data-aos="fade-left" data-aos-delay="2000">u</h1>
                            <h1 data-aos="fade-left" data-aos-delay="2050">l</h1><h1 data-aos="fade-left" data-aos-delay="2100">l</h1><h1 data-aos="fade-left" data-aos-delay="2200">s</h1><h1 data-aos="fade-left" data-aos-delay="2250">t</h1><h1 data-aos="fade-left" data-aos-delay="2300">a</h1><h1 data-aos="fade-left" data-aos-delay="2350">c</h1><h1 data-aos="fade-left" data-aos-delay="2400">k</h1><h1 data-aos="fade-left" data-aos-delay="2450">.</h1>
                        </div>
                        <div className="get-started"></div>
                    </div>
                    <div className="home-social">
                        <a href="https://twitter.com/lawalshalom" target="_blank" rel="noopener noreferrer"><i data-aos="fade-down" data-aos-delay="2500" className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                        <a href="https://facebook.com/lawalshalom" target="_blank" rel="noopener noreferrer"><i  data-aos="fade-down" data-aos-delay="2550" className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/femi-lawal-s-776a02110/" target="_blank" rel="noopener noreferrer"><i data-aos="fade-down" data-aos-delay="2600" className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href="https://github.com/lawalshalom" target="_blank" rel="noopener noreferrer"><i data-aos="fade-down" data-aos-delay="2650" className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                        <footer data-aos="fade-down" data-aos-delay="2700">
                            &copy; Copyright 2020
                        </footer>
                    </div>
                </div>
            </main>
        </>
        )
    }
}
