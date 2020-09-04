/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TechStack from "../Components/Techstack";
import "../Components/work.css";

export default class Work extends Component {
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
    <div>
        <header>
            <div className="container">
                <div className="menu-btn" ref={this.inputRef} onClick={this.toggleMenu}>
                    <span className="menu-btn-burger" ref={this.input2Ref}></span>
                </div>
                <nav className="navbar" ref={this.nav}>
                    <div className="myPic"></div>
                        <ul ref={this.navMenu}>
                            <li onClick={this.handleClick}><Link to="/">Home</Link></li>
                            <li><Link to="/work" className="active">Work</Link></li>
                            <li onClick={this.handleClick}><Link to="/about">About</Link></li>
                            <li onClick={this.handleClick}><Link to="/contact">Contact Me</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div className="container">
                <div className="header-logo">
                        <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1596073559/Portfolio%20site/imageedit_1_4636924411_w5k4ii.png" alt="header logo"/>
                    </div>
                </div>
                <div className="container skills-text">
                    <div className="row section-1">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="header">
                                <h1>My <span>Skills</span></h1>
                            </div>
                        <p>Determined and productive web developer with a passion for creative solutions.</p>
                        <p>Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including HTML5, CSS3 (Sass and Less), JavaScript(ES6), MySQL, React, Redux and React Native</p>
                        <p>I also have full-stack experience in the MERN stack (MongoDB, Express, React, NodeJs).</p>
                        <p>Other relevant technologies include Data Visualizations with D3, Unit and functional testings with Mocha and Jest, jQuery, relational databases as mySQL.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <TechStack />
                    </div>
                </div>
                <div className="site-cont">
                    <p>I build web and mobile apps that are:</p>
                    <div className="row site-div">
                        <div className="col-lg-6 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-6 site">
                                    <div className="hexagon">
                                        <i className='bx bx-rocket' ></i>
                                    </div>
                                    <div className="site-text">
                                        <h3><strong>Fast</strong></h3>
                                        <p>Fast load times and lag free interaction are my highest priority.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6 site">
                                    <div className="hexagon">
                                        <i className='bx bxs-devices' ></i>
                                    </div>
                                    <div className="site-text">
                                        <h3><strong>Responsive</strong></h3>
                                        <p>My layouts work on any device, big or small.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-6 site">
                                    <div className="hexagon">
                                        <i className='bx bx-bulb' ></i>
                                    </div>
                                    <div className="site-text">
                                        <h3><strong>Intuitive</strong></h3>
                                        <p>Strong preference for easy to use and intuitive UI/UX.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6 site">
                                    <div className="hexagon">
                                        <i className='bx bx-move bx-tada' ></i>
                                    </div>
                                    <div className="site-text">
                                        <h3><strong>Dynamic</strong></h3>
                                        <p>Websites don't have to be static, I love making pages come to life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <h1>PR<span>OJE</span>CTS</h1>
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="img/scmui1.png" alt="project" />
                                    <div className="project-links">
                                        <button title="This github repo is private"><i className="fa fa-github" aria-hidden="true"></i>Github</button>
                                        <a href="https://scmui.org" title="visit project" target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    </div>
                                </div>
                                <h3><strong>SCM UI</strong></h3>
                                <p>A presentational progressive web app with client-side rendering and validations.</p>
                                <p className="tech"><strong>Technologies:</strong>
                                    <button>ReactJs</button>
                                    <button>SCSS</button>
                                    <button>jQuery</button>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="img/tour.png" alt="project" />
                                    <div className="project-links">
                                        <a href="https://github.com/Lawalshalom/Nigeria-Tourist-App" title="Github link" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
                                        <a href="https://tourist-guide-app.netlify.app" title="visit project" target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    </div>
                                </div>
                                <h3><strong>Nigeria Tour App</strong></h3>
                                <p>An easy web app guide to tourism in Nigeria.</p>
                                <p className="tech"><strong>Technologies:</strong>
                                    <button>ReactJs</button>
                                    <button>SCSS</button>
                                    <button>REST API</button>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="img/budgetify.png" alt="project" />
                                    <div className="project-links">
                                        <a href="https://github.com/Lawalshalom/Budgetify-app" title="Github link" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
                                        <a href="https://zealous-aryabhata-69f218.netlify.app/" title="visit project" target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    </div>
                                </div>
                                <h3><strong>Budgetify App</strong></h3>
                                <p>This app is designed to help users keep track of monthly expenditures against gross budget(salary).</p>
                                <p className="tech"><strong>Technologies:</strong>
                                    <button>ReactJs</button>
                                    <button>SCSS</button>
                                    <button>REST API</button>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="img/calendar.png" alt="project" />
                                    <div className="project-links">
                                        <a href="https://github.com/Lawalshalom/calendar-server-demo" title="Github link" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
                                        <a href="https://calendar-app-demo.herokuapp.com" title="visit project" target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    </div>
                                </div>
                                <h3><strong>Calendar Events Reminder</strong></h3>
                                <p>This app is designed to save user calendar events in a database and send weekly and daily event reminder sms and mails to designated number.</p>
                                <p className="tech"><strong>Technologies:</strong>
                                    <button>Vanilla JS</button>
                                    <button>Node/ExpressJS</button>
                                    <button>REST API</button>
                                    <button>MongoDB</button>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="img/cms.png" alt="project" />
                                    <div className="project-links">
                                        <a href="https://github.com/Lawalshalom/CMS-frontend" title="Github link" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
                                        <a href="https://cms-app.netlify.app/" title="visit project" target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    </div>
                                </div>
                                <h3><strong>Census Management System</strong></h3>
                                <p>A web data collection for taking statistics of the population.</p>
                                <p className="tech"><strong>Technologies:</strong>
                                    <button>ReactJs</button>
                                    <button>SCSS</button>
                                    <button>REST API</button>
                                    <button>ChartJS</button>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="img/weather.png" alt="project" />
                                    <div className="project-links">
                                        <a href="https://github.com/Lawalshalom/Weather-app-ECX" title="Github link" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
                                        <a href="https://weather-app-femi.netlify.app/" title="visit project" target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    </div>
                                </div>
                                <h3><strong>Weather Forecast App</strong></h3>
                                <p>A weather forecast web app that detects location with browser IP address, geolocation or user search and displays current and day weather forecasts.</p>
                                <p className="tech"><strong>Technologies:</strong>
                                    <button>ReactJs</button>
                                    <button>SCSS</button>
                                    <button>REST API</button>
                                </p>
                            </div>
                        </div>

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
    </div>
        )
    }
}
