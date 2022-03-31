import React from "react";
import { Link } from "react-router-dom";

export default function AboutScreen() {
	return (
		<div className="sub-page">
			<div className="wrap-body">
				<header>
					<div className="wrap-header">
						<div className="main-header">
							<div className="bg-overlay">
								<div className="hero-content-wrapper">
									<div className="hero-content">
										<h4
											className="h-alt hero-subheading wow fadeIn"
											data-wow-duration="2s"
											data-wow-delay=".7s"
										>
											Enes Agro Gıda
										</h4>
										<h1
											className="hero-lead wow fadeInLeft"
											data-wow-duration="1.5s"
										>
											Fıstık
											<br /> Her Çeşit Kuruyemiş
										</h1>
									</div>
								</div>
							</div>
						</div>
						<div id="cssmenu">
							<ul>
								<li className="active">
									<Link to="/">
										<span>ENES AGRO</span>
									</Link>
								</li>
								<li className="has-sub">
									<Link to="/products">
										<span>ÜRÜNLER</span>
									</Link>
									<ul>
										<li className="has-sub">
											<Link to="/products/fistik">
												<span>Fıstık</span>
											</Link>
											<ul>
												<li>
													<Link to="/products/fistik/bozic">
														<span>Boz iç</span>
													</Link>
												</li>
												<li className="last">
													<Link to="/products/fistik/kavrulmus">
														<span>Kavrulmuş</span>
													</Link>
												</li>
											</ul>
										</li>
										<li className="has-sub">
											<Link to="/products/ceviz">
												<span>Ceviz</span>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to="/about">
										<span>Hakkımızda</span>
									</Link>
								</li>
								<li className="last">
									<Link to="/contact">
										<span>İLETİŞİM</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</header>

				<section>
					<div className="wrap-container zerogrid">
						<div className="crumbs">
							<ul>
								<li>
									<Link to="/">Ana Sayfa</Link>
								</li>
								<li>
									<Link to="/about">Hakkımızda</Link>
								</li>
							</ul>
						</div>
						<div id="about-us">
							<article className="post-entry single-post">
								<div className="wrap-post">
									<div className="entry-header">
										<h1 className="entry-title">Misyonumuz</h1>
									</div>
									<div className="entry-content">
										<div className="excerpt">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Aenean laoreet justo et erat fringilla, eu egestas
												libero accumsan. Vestibulum at commodo nisl. Morbi nec
												pretium urna. Donec sollicitudin condimentum lectus.
												Donec leo odio, facilisis eget mauris nec, pellentesque
												accumsan quam. Aliquam vel ex in velit cursus efficitur
												in eu nulla. Sed gravida mauris tellus, in vulputate
												massa elementum faucibus.
											</p>
										</div>
										<p>
											Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
											sed diam nonumy eirmod tempor invidunt ut labore et dolore
											magna aliquyam erat, sed diam voluptua. At vero eos et
											accusam et justo duo dolores et ea rebum. Consetetur
											sadipscing elitr, sed diam nonumy eirmod tempor invidunt
											ut labore et dolore magna aliquyam erat, sed diam
											voluptua. At vero eos et accusam et justo duo dolores et
											ea rebum.
										</p>
										<blockquote>
											<p>
												Stet clita kasd gubergren, no sea takimata sanctus est
												Lorem ipsum dolor sit amet vultatup duista.
											</p>
										</blockquote>
										<p>
											Duis autem vel eum iriure dolor in hendrerit in vulputate
											velit esse molestie consequat, vel illum dolore eu feugiat
											nulla facilisis at vero eros et accumsan et iusto odio
											dignissim qui blandit praesent luptatum zzril.
										</p>
										<h2>Başlık 1</h2>
										<p>
											Ut wisi enim ad minim veniam, quis nostrud exerci tation
											ullamcorper suscipit lobortis nisl ut aliquip ex ea
											commodo consequat. Duis autem vel eum iriure dolor in
											hendrerit in vulputate velit esse lorem ipsum dolor sit
											amet.
										</p>
										<h2>Başlık 2</h2>
										<p>
											Ut wisi enim ad minim veniam, quis nostrud exerci tation
											ullamcorper suscipit lobortis nisl ut aliquip ex ea
											commodo consequat. Duis autem vel eum iriure dolor in
											hendrerit in vulputate velit esse lorem ipsum dolor sit
											amet.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
											sed diam nonumy eirmod tempor invidunt ut labore et dolore
											magna aliquyam erat, sed diam voluptua. At vero eos et
											accusam et justo duo dolores et ea rebum. Stet clita kasd
											gubergren, no sea takimata sanctus est Lorem ipsum dolor
											sit amet.
										</p>
										<div className="note">
											<ol>
												<li>Lorem ipsum</li>
												<li>Sit amet vultatup nonumy</li>
												<li>Duista sed diam</li>
											</ol>
											<div className="clear"></div>
										</div>
										<p>
											Duis autem vel eum iriure dolor in hendrerit in vulputate
											velit esse molestie consequat, vel illum dolore eu feugiat
											nulla facilisis at vero eros et accumsan et iusto odio
											dignissim qui blandit praesent luptatum zzril delenit
											augue duis dolore te feugait nulla facilisi. Lorem ipsum
											dolor sit amet, consectetuer adipiscing elit, sed diam
											nonummy nibh euismod tincidunt ut laoreet dolore magna
											aliquam erat volutpat.
										</p>
									</div>
								</div>
							</article>
						</div>
					</div>
				</section>

				<footer id="page-footer">
					<div className="zerogrid bottom-footer">
						<div className="row">
							<div className="bottom-social">
								<Link to="#">
									<i className="fa fa-facebook"></i>
								</Link>
								<Link to="#">
									<i className="fa fa-instagram"></i>
								</Link>
								<Link to="#">
									<i className="fa fa-twitter"></i>
								</Link>
								<Link to="#">
									<i className="fa fa-youtube"></i>
								</Link>
							</div>
						</div>
						<div className="copyright">
							Copyright &copy; Enes Agro Gıda 2022
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
