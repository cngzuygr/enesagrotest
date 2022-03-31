import React from "react";
import { Link } from "react-router-dom";

export default function ContactScreen() {
	return (
		<div>
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
					<div id="about-us">
						<article className="post-entry single-post">
							<div className="wrap-post">
								<div className="entry-header">
									<h1 className="entry-title">Bizimle iletişime geçin</h1>
								</div>
								<div className="entry-content">
									<div className="excerpt">
										<h3>Telefon numaralarımız</h3>
										<div className="note">
											<ol>
												<li>
													<strong style={{ color: "green" }}>
														+90 545 410 0858
													</strong>
												</li>
												<li>
													<strong style={{ color: "green" }}>
														+90 545 410 0858
													</strong>
												</li>
											</ol>
											<div className="clear"></div>
										</div>
									</div>
									<div className="excerpt">
										<h3>Adresimiz</h3>
										<p>Fıstık hali, Nizip, Gaziantep</p>
									</div>
									<div className="excerpt">
										<h3>E-posta</h3>
										<p>enesagrogida@gmail.com</p>
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
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
