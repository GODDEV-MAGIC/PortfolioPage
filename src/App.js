import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  const [audio, setAudio] = React.useState(new Audio(require('./images/audio.mp3')));
  const [headerClass, setHeaderClass] = React.useState('');
  const [navClass, setnavClass] = React.useState('');
  const [playVisibility, setPlayVisibility] = React.useState('visible');
  const [pauseVisibility, setPauseVisibility] = React.useState('hidden');
  window.addEventListener('scroll', handleScroll)
  function handleScroll(e) {
    const position = window.pageYOffset;
    if(position < 100){
      setHeaderClass('')
    }
    else{
      setHeaderClass('change')
    }
  }
  function onNavClick(){
    if(navClass == ''){
      setnavClass('reveal')
    }
    else
     {
      setnavClass('')
     } 
  }
  function playAudio(){

    audio.play();
    setAudio(audio);
    console.log('play');
    setPlayVisibility('hidden');
    setPauseVisibility('visible');

  }
  function pauseAudio(){
    audio.pause();
    setAudio(audio);
    console.log('pause');
    setPlayVisibility('visible');
    setPauseVisibility('hidden');

  }
  return (
    <div>
      <header className = {headerClass}>
        <div class="container">
          <div class="device-nav" id="nav-icon" onClick={onNavClick}><img src={require('./images/menu-btn.png')} class="img-fluid" /></div>
            <div class="row">
                <div class="col-lg-3 my-auto">
                  <div class="logo"><a href="index.html"><img src={require('./images/logo.png')} class="img-fluid" /></a></div>
                </div>
                <div class="col-lg-9 my-auto navigation">
                  <nav className = {navClass}>
                    <ul>
                      <Link to="top" spy={true} smooth={true} offset={-50} duration={500}>
                      Home
                      </Link>   
                      <Link to="aboutme" spy={true} smooth={true} offset={-50} duration={500}>
                      About Us
                      </Link>   
                      <Link to="myservices" spy={true} smooth={true} offset={-50} duration={500}>
                      Services
                      </Link>   
                      <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500}>
                      Portfolio
                      </Link>   
                      <Link to="contactme" spy={true} smooth={true} offset={-50} duration={500}>
                      Contact us
                      </Link>          
                    </ul>
                  </nav>
                </div>
              </div>
        </div>
    </header>
    <section class="hero-section" id="top">
      <div class="container">
          <div class="row">
              <div class="col-lg-8 my-auto">
                  <div class="row">
                      <div class="col-lg-11">
                            <div class="text-box">
                                <h1>HELLO, MY NAME IS</h1>
                                <h2>Godwin KODJO</h2>
                                <p>Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development</p>
                                <a href="#" class="download">Download CV<span class="fa fa-download"></span></a>
                                <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} style = {{margin: '0px'}}>
                                  <a class = 'portfolio'>
                                  Portfolio
                                  </a>
                                </Link>
                            </div>
                      </div>
                    </div>
                </div>
                <div class="col-lg-4 my-auto">
                  <div class="right-box">
                      <img src={require('./images/top-person.png')} class="img-fluid" />
                  </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about-me" id="aboutme">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 text-center">
                  <h2 class="heading-all">About Me</h2>
                </div>
            </div>
          <div class="row flex-row-reverse boxes-wrap">
              <div class="col-lg-7">
                  <div class="right-box">                	

                      <h3>I'm a Web Designer. </h3>
                        <p>
                          Lorem ipsum dolor sit amet, 
                            <span class="play-stop">
                              <span class="audio-icon">
                                    <span class="fa fa-play" id="play" onClick={playAudio} style={{visibility: playVisibility}}></span>
                                    <span class="fa fa-pause" id="pause" onClick={pauseAudio} style={{visibility: pauseVisibility}}></span>
                                </span>
                            </span> consectetur adipiscing elit. Etiam fringilla pretium lacus, eu luctus neque ultricies a. Phasellus faucibus orci a purus mattis tincidunt ut non nulla. Donec ullamcorper sapien eget neque facilisis euismod.
                        </p>
                        <h4>Reach out through Social Media</h4>
                        <div class="row">
                          <div class="col-lg-12">
                              <div class="social-media">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div class="icons youtube"><span class="fa fa-github"></span></div>
                                                @Godwin KODJO
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icons facebook"><span class="fa fa-linkedin"></span></div>
                                                @Godwin KODJO
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icons twitter"><span class="fa fa-twitter"></span></div>
                                                @Godwin KODJO
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="icons instagram"><img src={require('./images/instagram.png')} class="img-fluid" /></div>
                                                @Godwin KODJO
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              <div class="col-lg-5">
                  <div class="left-box"><img src={require('./images/about-image.png')} class="img-fluid" /></div>
                </div>
                
            </div>
        </div>
    </section>
    <section class="my-services" id="myservices">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 text-center"><h2 class="heading-all">My Services</h2></div>
            </div>
            <div class="row">
                <div class="col-lg-4 boxes-wrap">
                  <div class="boxes">
                      <div class="image-main"><img src={require('./images/web-design.jpg')} class="img-fluid" /></div>
                        <h3>Web Design</h3>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 boxes-wrap">
                  <div class="boxes">
                      <div class="image-main"><img src={require('./images/web-development.jpg')} class="img-fluid" /></div>
                        <h3>Web Development</h3>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 boxes-wrap">
                  <div class="boxes">
                      <div class="image-main"><img src={require('./images/website-managment.jpg')} class="img-fluid" /></div>
                        <h3>Website Management</h3>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="work-experience" id="work">
      <div class="container">
          <div class="row flex-row-reverse">
              <div class="col-lg-7">
                  <div class="right-box">
                      <h2 class="heading-all">Work Experties</h2>
                        <p>
                          Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
                        </p>
                        <div class="row">
                          <div class="col-lg-12">
                              <div class="boxes">
                                  <div class="counter">80%</div>
                                  <img src={require('./images/work-one.png')} class="img-fluid" />
                                </div>
                                <div class="boxes">
                                  <div class="counter">75%</div>
                                  <img src={require('./images/work-two.png')} class="img-fluid" />
                                </div>
                                <div class="boxes">
                                  <div class="counter">90%</div>
                                  <img src={require('./images/work-three.png')} class="img-fluid" />
                                </div>
                                <div class="boxes">
                                  <div class="counter">86%</div>
                                  <img src={require('./images/work-foure.jpg')} class="img-fluid" />
                                </div>
                                <div class="boxes">
                                  <div class="counter">80%</div>
                                  <img src={require('./images/work-five.jpg')} class="img-fluid" />
                                </div>
                                <div class="boxes">
                                  <div class="counter">75%</div>
                                  <img src={require('./images/work-six.png')} class="img-fluid" />
                                </div>
                                <div class="boxes">
                                  <div class="counter">90%</div>
                                  <img src={require('./images/work-seven.jpg')} class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              <div class="col-lg-5">
                  <div class="left-box"><img src={require('./images/top-person.png')} class="img-fluid" /></div>
                </div>
            </div>
        </div>
    </section>
    <section class="our-portfolio" id="portfolio">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 text-center">
                  <h2 class="heading-all">My Portfolio</h2>
                </div>
            </div>
            <div class="row boxes-wrap">
                <div class="col-lg-4">
                  <div class="row">
                      <div class="col-lg-12 col-6">
                            <div class="boxes">
                                <a href="#" target="_blank"><img src={require('./images/01.jpg')} class="img-fluid" /></a>
                            </div>
                        </div>
                      <div class="col-lg-12 col-6">
                            <div class="boxes">
                                <a href="#" target="_blank"><img src={require('./images/02.jpg')} class="img-fluid" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 p-0">
                  <div class="row">
                      <div class="col-lg-12">
                            <div class="boxes">
                                <a href="#" target="_blank"><img src={require('./images/03.jpg')} class="img-fluid" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                  <div class="row">
                      <div class="col-lg-12 col-6">
                            <div class="boxes">
                                <a href="#" target="_blank"><img src={require('./images/04.jpg')} class="img-fluid" /></a>
                            </div>
                        </div>
                      <div class="col-lg-12 col-6">
                            <div class="boxes">
                                <a href="#" target="_blank"><img src={require('./images/05.png')} class="img-fluid" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contact-me" id="contactme">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 text-center">
                  <h2 class="heading-all">Contact Me</h2>
                </div>
              <div class="col-lg-12">
                  <form action="#" method="post">
                        <div class="row boxes-wrap">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="" />
                                    </div>
                                    <div class="col-lg-12">
                                        <label>Email</label>
                                        <input type="text" placeholder="" />
                                    </div>
                                    <div class="col-lg-12">
                                        <label>Subject</label>
                                        <input type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <label>Message</label>
                                        <textarea></textarea>
                                    </div>
                                    <div class="col-lg-12">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <footer>
      <div class="container">
          <div class="row">
              <div class="col-lg-12"><p>&copy; 2020 Godwin KODJO. Design by Janjua Designer</p></div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
