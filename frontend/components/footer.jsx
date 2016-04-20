var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <section className="bottom-container">
        <div className="wrap">
          <div className="footer-container">
            <div className="footer-column">
              <div className="footer-logo">
                <a className="footer-logo-img" href="/#"><img src="/assets/lairshare_logo.png" width="50" height="50" alt="lairshare"/></a>
              </div>
              <div className="copyright">
                <p>© LairShare Inc. 2016</p>
              </div>
            </div>
            <div className="footer-column">
              <strong className="heading">Learn More</strong>
              <ul>
                <li><a>Features</a></li>
      					<li><a>Integrations</a></li>
      					<li><a>Customers</a></li>
      					<li><a>Pricing &amp; Plans</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <strong className="heading">About</strong>
              <ul>
      					<li><a>Company</a></li>
      					<li><a>Jobs</a></li>
      					<li><a>Blog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <strong className="heading">Support</strong>
              <ul>
                <li><a>Help</a></li>
      					<li><a>Docs</a></li>
      					<li><a>Status</a></li>
      					<li><a>Terms</a></li>
              </ul>
            </div>
            </div>
            <div className="footer-column">
              <strong className="heading">CONNECT</strong>
              <div className="social">
                <ul>
                  <li><a href="mailto:nhat.ho1989@gmail.com"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
                  <li className="linkedin"><a className="icon-linkedin" href="https://www.linkedin.com/in/nhatho89"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
                  <li className="home"><a className="icon-home" href="https://github.com/nhatho89/PersonalSite"><i className="fa fa-home fa-2x" aria-hidden="true"></i></a></li>
                  <li className="git"><a className="icon-github-circled" href="https://github.com/nhatho89"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
                  <li className="keep">

                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </section>
    );
  }
});

module.exports = Footer;

// <section class="bottom-container">
// 	<div class="wrap">
// 		<div class="footer-container">
// 			<div class="footer-column">
// 				<div class="footer-logo"><a href="/"><img src="//website.smooch.io/static_assets/images/header/svg/logo.svg" width="98" height="20" alt="smooch"></a></div>
// 				<div class="copyright">
// 					<p>© Smooch Technologies Inc. 2015</p>
// 				</div>
// 			</div>
// 			<div class="footer-column">
// 				<strong class="heading">Learn More</strong>
// 				<ul>
// 					<li><a href="/is">Features</a></li>
// 					<li><a href="/integrations">Integrations</a></li>
// 					<li><a href="/customers">Customers</a></li>
// 					<li><a href="/pricing">Pricing &amp; Plans</a></li>
// 				</ul>
// 			</div>
// 			<div class="footer-column">
// 				<strong class="heading">About</strong>
// 				<ul>
// 					<li><a href="/about">Company</a></li>
// 					<li><a href="https://smooch.breezy.hr/#positions">Jobs</a></li>
// 					<li><a href="http://blog.smooch.io">Blog</a></li>
// 				</ul>
// 			</div>
// 			<div class="footer-column">
// 				<strong class="heading">Support</strong>
// 				<ul>
//
// 				</ul>
// 			</div>
// 			<div class="footer-column">
// 				<strong class="heading">In-depth</strong>
// 				<ul>
// 					<li><a href="/whispers">Automated Messages</a></li>
// 					<li><a href="/ratings">App Rating Prompt</a></li>
// 				</ul>
// 			</div>
// 			<div class="footer-column">
// 				<strong class="heading">Keep In touch</strong>
// 				<ul>
// 					<li><a href="mailto:hello@smooch.io">Contact</a></li>
// 				</ul>
// 				<div class="social">
// 					<ul>
// 						<li class="twitter"><a class="icon-twitter" href="https://twitter.com/SmoochLabs"></a></li>
// 						<li class="facebook"><a class="icon-facebook-official" href="https://facebook.com/SmoochLabs"></a></li>
// 						<li class="git"><a class="icon-github-circled" href="https://github.com/smooch"></a></li>
// 						<li class="keep">
// 							<a href="https://stackoverflow.com/questions/tagged/smooch+or+supportkit">
// 								<!-- picturefill: full manual control -->
// 								<picture>
// 									<!--[if IE 9]><video style="display: none;"><![endif]-->
// 									<source srcset="//website.smooch.io/static_assets/images/footer/icon-keep.png, //website.smooch.io/static_assets/images/footer/retina/icon-keep@2x.png 2x">
// 									<!--[if IE 9]></video><![endif]-->
// 									<img src="//website.smooch.io/static_assets/images/footer/icon-keep.png" width="15" height="20" alt="keep">
// 								</picture>
// 							</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>





// <div className="footer-container">
//   <div className="row-container">
//
//     <div>
//       <a className="logo" href="https://github.com/nhatho89">
//         GitHub
//       </a>
//     </div>
//
//     <div>
//       <a className="logo" href="https://github.com/nhatho89/LairShare">
//         Project Repo
//       </a>
//     </div>
//
//     <div>
//       <a className="logo" href="https://www.linkedin.com/in/nhatho89">
//         LinkedIn
//       </a>
//     </div>
//
//   </div>
// </div>
