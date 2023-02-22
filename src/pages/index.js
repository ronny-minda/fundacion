
import Head from "next/head"
import Layout from "@/components/layoud"

export default function Home() {
  return (
    <>

      <Head>
        <link href="layout/styles/layout.css" rel="stylesheet" type="text/css" media="all"></link>
        <script src="/layout/scripts/jquery.min.js"></script>
        <script src="/layout/scripts/jquery.backtotop.js"></script>
        <script src="/layout/scripts/jquery.mobilemenu.js"></script>
      </Head>

      <Layout>


        <div className="wrapper bgded overlay hero">
          <div id="pageintro" className="hoc clear">

            <article>
              <p>Sed diam et lacinia aliquam</p>
              <h3 className="heading">Fundacion Rodiv</h3>
              <p>Consectetur in dolor vitae consectetur maecenas id ultrices</p>
              <footer><a className="btn" href="#">Dolor nam hendrerit</a></footer>
            </article>

          </div>
        </div>



        <div className="wrapper row3">
          <main className="hoc container clear">


            <section id="introblocks">
              <div className="sectiontitle">
                <h6 className="heading">Turpis ac elit placerat porta</h6>
                <p>Quisque commodo orci id convallis vestibulum justo convallis</p>
              </div>
              <ul className="nospace group">
                <li className="one_third first">
                  <article><i className="fa fa-futbol-o"></i>
                    <h6 className="heading font-x1"><a href="#">Tortor ultrices</a></h6>
                    <p>Aliquam lacus commodo sit amet dui quis placerat ac hendrerit massa etiam ultrices metus maximus [<a href="#">&hellip;</a>]</p>
                  </article>
                </li>
                <li className="one_third">
                  <article><i className="fa fa-linode"></i>
                    <h6 className="heading font-x1"><a href="#">Vestibulum facilisis</a></h6>
                    <p>Augue ante auctor elit in iaculis nibh arcu sit amet sem tellus sed ligula vestibulum dictum in [<a href="#">&hellip;</a>]</p>
                  </article>
                </li>
                <li className="one_third">
                  <article><i className="fa fa-s15"></i>
                    <h6 className="heading font-x1"><a href="#">Aliquet condimentum</a></h6>
                    <p>Elit donec sodales varius dictum etiam sit amet elit metus sed ac ligula odio et placerat arcu sed [<a href="#">&hellip;</a>]</p>
                  </article>
                </li>
              </ul>
            </section>

            <hr classNameName="btmspace-80"></hr>

            <section>
              <div className="sectiontitle">
                <h6 className="heading">Ligula turpis placerat quis</h6>
                <p>Lobortis eu rutrum ut magna vivamus sodales quis nibh sit</p>
              </div>
              <ul className="nospace group overview">
                <li className="one_third">




                  <figure><a href="#">
                    <img src="/images/demo/320x240.png" alt=""></img></a>
                    <figcaption>
                      <h6 className="heading">Amet tincidunt</h6>
                      <p>Etiam pulvinar mollis dui vitae porta orci fringilla.</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><a href="#"><img src="/images/demo/320x240.png" alt=""></img></a>
                    <figcaption>
                      <h6 className="heading">Tempus nulla non</h6>
                      <p>Fermentum enim curabitur posuere sit amet quam sed.</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><a href="#"><img src="/images/demo/320x240.png" alt=""></img></a>
                    <figcaption>
                      <h6 className="heading">Tristique cras</h6>
                      <p>Purus arcu condimentum non euismod non feugiat nec.</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><a href="#"><img src="/images/demo/320x240.png" alt=""></img></a>
                    <figcaption>
                      <h6 className="heading">Leo vestibulum</h6>
                      <p>Mi fringilla non tellus eu ornare lobortis mauris.</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><a href="#"><img src="/images/demo/320x240.png" alt=""></img></a>
                    <figcaption>
                      <h6 className="heading">Quisque auctor</h6>
                      <p>Neque nibh in porta lacus iaculis nec duis convallis.</p>
                    </figcaption>
                  </figure>
                </li>
                <li className="one_third">
                  <figure><a href="#"><img src="/images/demo/320x240.png" alt=""></img></a>
                    <figcaption>
                      <h6 className="heading">Sapien imperdiet</h6>
                      <p>Lacinia ligula mauris pretium diam nec hendrerit.</p>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </section>


            <div className="clear"></div>
          </main>
        </div>



        <div className="wrapper coloured">
          <article className="hoc cta clear">

            <h6 className="three_quarter first">Enim nulla nec eros malesuada ligula nec finibus</h6>
            <footer className="one_quarter"><a className="btn" href="#">Congue venenatis &raquo;</a></footer>

          </article>
        </div>



        <div className="wrapper row3">
          <section className="hoc container clear">

            <div className="sectiontitle">
              <h6 className="heading">Et ipsum suscipit sit amet</h6>
              <p>Molestie dolor blandit mauris porta quam erat ut laoreet velit</p>
            </div>
            <ul className="nospace group latest">
              <li className="one_half first">
                <article>
                  <div className="excerpt">
                    <ul className="nospace meta">
                      <li><i className="fa fa-user"></i> <a href="#">Admin</a></li>
                      <li><i className="fa fa-tag"></i> <a href="#">Category Name</a></li>
                    </ul>
                    <h6 className="heading">Tempus at donec finibus</h6>
                    <p>Ex quis ullamcorper lobortis quisque imperdiet semper mi vitae aliquet justo feugiat sodales in quis velit vitae risus malesuada varius aenean diam lacus vestibulum vel erat elementum [<a href="#">&hellip;</a>]</p>
                    <footer><a href="#">Read More &raquo;</a></footer>
                  </div>
                  <time datetime="2045-04-06T08:15+00:00"><strong>06</strong> <em>Apr</em></time>
                </article>
              </li>
              <li className="one_half">
                <article>
                  <div className="excerpt">
                    <ul className="nospace meta">
                      <li><i className="fa fa-user"></i> <a href="#">Admin</a></li>
                      <li><i className="fa fa-tag"></i> <a href="#">Category Name</a></li>
                    </ul>
                    <h6 className="heading">Lobortis mi suspendisse</h6>
                    <p>Consequat dui dolor sit amet tincidunt erat sollicitudin id ut vel posuere eros nunc id ipsum mi aenean pulvinar ultrices blandit duis iaculis diam laoreet placerat vitae consequat [<a href="#">&hellip;</a>]</p>
                    <footer><a href="#">Read More &raquo;</a></footer>
                  </div>
                  <time datetime="2045-04-05T08:15+00:00"><strong>05</strong> <em>Apr</em></time>
                </article>
              </li>
            </ul>
            <footer className="center"><a className="btn" href="#">View All Posts &raquo;</a></footer>

          </section>
        </div>



        <div className="wrapper row2">
          <figure className="hoc container clear clients">

            <ul className="nospace group">
              <li className="one_quarter first"><a href="#"><img src="images/demo/222x100.png" alt=""></img></a></li>
              <li className="one_quarter"><a href="#"><img src="images/demo/222x100.png" alt=""></img></a></li>
              <li className="one_quarter"><a href="#"><img src="images/demo/222x100.png" alt=""></img></a></li>
              <li className="one_quarter"><a href="#"><img src="images/demo/222x100.png" alt=""></img></a></li>
            </ul>

          </figure>
        </div>


      </Layout>
    </>
  )
}
