/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../Components/about.css";

export default class About extends Component {
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
          <section id="about">
            <header>
              <div className="container">
                <div className="menu-btn" ref={this.inputRef} onClick={this.toggleMenu}>
                    <span className="menu-btn-burger" ref={this.input2Ref}></span>
                </div>
                <nav className="navbar" ref={this.nav}>
                  <ul ref={this.navMenu}>
                    <li onClick={this.handleClick}><Link to="/">Home</Link></li>
                    <li onClick={this.handleClick}><Link to="/work">Work</Link></li>
                    <li><Link to="/about" className="active">About</Link></li>
                    <li onClick={this.handleClick}><Link to="/contact">Contact Me</Link></li>
                  </ul>
                </nav>
              </div>
            </header>
            <main className="about-main">
                <div className="container">
                <div className="header-logo">
                        <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1595544226/Portfolio%20site/f3f7eb57-efb5-4062-92e8-c6e001a43af7_toamzn.png" alt="header logo"/>
                    </div>
                  <div className="about row">
                      <div className="about-text col-lg-6 col-md-6 col-12">
                        <div className="aboutPic" data-aos="fade-right"></div>
                        <h2 data-splitting data-aos="fade-right" data-aos-delay="50">About <span>Me</span></h2>
                        <p  data-aos="fade-right" data-aos-delay="100">Let me tell you a few things...</p>
                      <div className="bio">
                        <h2 data-aos="fade-up" data-aos-delay="150">BIO</h2>
                        <p data-aos="fade-up" data-aos-delay="200">I am a self-taught developer with 1year+ experience working with projects</p>
                        <p data-aos="fade-up" data-aos-delay="250">Well-organized person, problem solver, independent employee with high attention to detail. Great flair for logic and analytical thinking, self-driven, plays great chess, mostly indoors.</p>
                        <p data-aos="fade-up" data-aos-delay="300">Deep-seated interest in both client-side and back-end spectra. I love working on projects with ambitious and positive prople.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 pyramid-div">
                    <div id="pyramid" draggable="true">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="pyramid-bg"></div>
                  </div>
                </div>
            </div>
            <div className="about-social">
              <a href="https://twitter.com/lawalshalom" target="_blank" rel="noopener noreferrer"><i data-aos="fade-down" data-aos-delay="200" className="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="https://facebook.com/lawalshalom" target="_blank" rel="noopener noreferrer"><i  data-aos="fade-down" data-aos-delay="200" className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/femi-lawal-s-776a02110/" target="_blank" rel="noopener noreferrer"><i data-aos="fade-down" data-aos-delay="200" className="fa fa-linkedin-square" aria-hidden="true"></i></a>
              <a href="https://github.com/lawalshalom" target="_blank" rel="noopener noreferrer"><i data-aos="fade-down" data-aos-delay="200" className="fa fa-github" aria-hidden="true"></i></a>
            </div>
          </main>
        </section>
        )
    }
}
