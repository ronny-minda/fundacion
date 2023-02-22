import Logo from "@/svgr/logo";
import React, { useState, useEffect } from "react";

const Layout = ({ children }) => {

  const [loader, setLoader] = useState('loader')
  const [logo, setLogo] = useState('logo')

  useEffect(() => {
    setTimeout(() => {
      setLoader('loader loaderNo')
    }, 6000);

    setTimeout(() => {
      setLoader('loader loaderNo loaderNoNo')
    }, 7000);

    setTimeout(() => {
      setLogo('logo logoTrsi ')
    }, 1);

    setTimeout(() => {
      setLogo('logo logoTrsi logoColor')
    }, 2500);

  }, [])


  return (
    <>

      <div className={loader} >

        <Logo className={logo} style={{ height: '150px', width: '150px' }} />

      </div>

      <div class="wrapper row1">
        <header id="header" class="hoc clear">

          <a href="/" id="logo" class="fl_left" style={{ display: 'flex' }}>
            <div style={{ height: '80px', width: '80px' }}>
              <Logo style={{ height: '100%', width: '100%', fill: '#9d0552' }} />
            </div>
            <div>
              <h1 style={{ fontSize: '40px' }}>RODIV</h1>
              <p style={{ fontSize: '15px' }} >Fundacion</p>
            </div>

          </a>
          <div id="quickinfo" class="fl_right">
            <ul class="nospace inline">
              <li><strong>Placerat:</strong><br></br>
                +00 (123) 456 7890</li>
              <li><strong>Porttitor:</strong><br></br>
                +00 (123) 456 7890</li>
            </ul>
          </div>

        </header>
        <nav id="mainav" class="hoc clear">

          <ul class="clear">
            <li class="active"><a href="#">Home</a></li>
            <li><a class="drop" href="#">Pages</a>
              <ul>
                <li><a href="">Gallery</a></li>
                <li><a href="">Full Width</a></li>
                <li><a href="">Sidebar Left</a></li>
                <li><a href="">Sidebar Right</a></li>
                <li><a href="">Basic Grid</a></li>
              </ul>
            </li>
            <li><a class="drop" href="#">Dropdown</a>
              <ul>
                <li><a href="#">Level 2</a></li>
                <li><a class="drop" href="#">Level 2 + Drop</a>
                  <ul>
                    <li><a href="#">Level 3</a></li>
                    <li><a href="#">Level 3</a></li>
                    <li><a href="#">Level 3</a></li>
                  </ul>
                </li>
                <li><a href="#">Level 2</a></li>
              </ul>
            </li>
            <li><a href="#">Link Text</a></li>
            <li><a href="#">Link Text</a></li>
            <li><a href="#">Link Text</a></li>
            <li><a href="#">Long Link Text</a></li>
          </ul>




        </nav>
      </div>

      {children}

      <div class="wrapper row4">
        <footer id="footer" class="hoc clear">

          <div class="one_quarter first">
            <h6 class="heading">Est aenean fermentum</h6>
            <ul class="nospace btmspace-30 linklist contact">
              <li><i class="fa fa-map-marker"></i>
                <address>
                  Street Name &amp; Number, Town, Postcode/Zip
                </address>
              </li>
              <li><i class="fa fa-phone"></i> +00 (123) 456 7890</li>
              <li><i class="fa fa-envelope-o"></i> info@domain.com</li>
            </ul>
            <ul class="faico clear">
              <li><a class="faicon-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="faicon-dribble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div class="one_quarter">
            <h6 class="heading">Ante volutpat iaculis</h6>
            <ul class="nospace linklist">
              <li><a href="#">Ipsum eu urna tristique</a></li>
              <li><a href="#">Tempor nunc aliquet</a></li>
              <li><a href="#">Ipsum sit amet mollis</a></li>
              <li><a href="#">Ullamcorper odio velit</a></li>
              <li><a href="#">Vulputate magna at rhoncus</a></li>
            </ul>
          </div>
          <div class="one_quarter">
            <h6 class="heading">Nisl commodo ut nam</h6>
            <ul class="nospace linklist">
              <li><a href="#">Turpis diam eget quam in</a></li>
              <li><a href="#">Blandit sed nulla id tempor</a></li>
              <li><a href="#">Duis interdum ligula at</a></li>
              <li><a href="#">Lectus venenatis blandit</a></li>
              <li><a href="#">Nulla molestie tellus</a></li>
            </ul>
          </div>
          <div class="one_quarter">
            <h6 class="heading">Aliquam risus dolor at</h6>
            <p class="nospace btmspace-15">Ultricies neque sollicitudin sit amet phasellus vel est quam vivamus finibus.</p>
          </div>
        </footer>
      </div>

      <div class="wrapper row5">
        <div id="copyright" class="hoc clear">

          <p class="fl_left">Copyright &copy; 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
          {/* <p class="fl_right">Template by <a target="_blank" href="#" title="Free Website Templates">OS Templates</a></p> */}

        </div>
      </div>




    </>
  )
}

export default Layout