import React from "react";
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";
import data from "../data.js";

export default function HomeScreen() {
	return (
		<div className="page-top">
			<div class="wrap-body">
				<header>
					<div class="wrap-header">
						<div class="main-header">
							<div class="bg-overlay">
								<div class="hero-content-wrapper">
									<div class="hero-content">
										<h4
											class="h-alt hero-subheading wow fadeIn"
											data-wow-duration="2s"
											data-wow-delay=".7s"
										>
											Enes Agro Gıda
										</h4>
										<h1
											class="hero-lead wow fadeInLeft"
											data-wow-duration="1.5s"
										>
											Fıstık
											<br /> Her Çeşit Kuruyemiş
										</h1>
									</div>
								</div>

								<div id="scroll-page-content">
									<SmoothLink
										to="cssmenu"
										spy={false}
										smooth={true}
										className="scroller"
									>
										<span class="scroller-text">Devam et</span>
										<div class="scroller-button">
											<i class="fa fa-angle-double-down"></i>
										</div>
									</SmoothLink>
								</div>
							</div>
						</div>
						<div id="cssmenu">
							<ul>
								<li class="active">
									<Link to="/">
										<span>ENES AGRO</span>
									</Link>
								</li>
								<li class="has-sub">
									<Link to="/products">
										<span>ÜRÜNLER</span>
									</Link>
									<ul>
										<li class="has-sub">
											<Link to="/products">
												<span>Fıstık</span>
											</Link>
											<ul>
												<li>
													<Link to="/products">
														<span>Boz iç</span>
													</Link>
												</li>
												<li class="last">
													<Link to="/products">
														<span>Kavrulmuş</span>
													</Link>
												</li>
											</ul>
										</li>
										<li class="has-sub">
											<Link to="/products">
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
								<li class="last">
									<Link to="/contact">
										<span>İLETİŞİM</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</header>

				<section id="page-content" class="index-page">
					<div class="wrap-container">
						<section class="content-box box-1">
							<div class="zerogrid">
								<div class="wrap-box">
									<div
										class="header wow fadeInUp"
										data-wow-delay=".1s"
										data-wow-duration="1s"
									>
										<h2>Enes Agro Gıda</h2>
										<span class="intro">
											MARKALARIMIZLA MÜŞTERİLERİMİZİ MEMNUN ETMEYE DEVAM
											EDİYORUZ
										</span>
									</div>
									<div class="content">
										<div class="row">
											<div
												class="lg-1-3 wow fadeInLeft"
												data-wow-duration=".8s"
											>
												<div class="ft-item">
													<img
														src={require("../images/20yil.jpg")}
														className="ft-icon"
														alt=""
														data-wow-delay=".1s"
														data-wow-duration="1s"
													/>

													<h5>20 Yıllık Tecrübe</h5>
													<p>
														20 yıllık kültürel ve uluslararası tecrübe ile
														doğadan aldığımız ilhamı birleştirerek ürünlerimize
														yansıtıyoruz.
													</p>
												</div>
												<div class="ft-item">
													<img
														src={require("../images/kalite.jpg")}
														className="ft-icon"
														alt=""
														data-wow-delay=".1s"
														data-wow-duration="1s"
													/>
													<h5>Kalite & Güvence</h5>
													<p>
														Ürünlerimizi ISO 9000 standartlarına uygun olarak
														son kalitede üretmekteyiz.
													</p>
												</div>
											</div>
											<div class="lg-1-3">
												<img
													src={require("../images/UK-Plant2.png")}
													alt=""
													class="ft-image-center wow fadeInUp"
													data-wow-delay=".1s"
													data-wow-duration="1s"
												/>
											</div>
											<div
												class="lg-1-3 t-right-xs wow fadeInRight"
												data-wow-duration=".8s"
											>
												<div class="ft-item">
													<img
														src={require("../images/kargo.jpg")}
														className="ft-icon"
														alt=""
														data-wow-delay=".1s"
														data-wow-duration="1s"
													/>
													<h5>Hızlı & Ücretsiz Kargo</h5>
													<p>Türkiye'nin her yerine hızlı ve ücretsiz kargo.</p>
												</div>
												<div class="ft-item">
													<img
														src={require("../images/memnuniyet.png")}
														className="ft-icon"
														alt=""
														data-wow-delay=".1s"
														data-wow-duration="1s"
													/>
													<h5>Müşteri Memnuniyeti</h5>
													<p>
														Memnun kalmadığınız ürünleri bir hafta içerisinde
														iade edebilirsiniz.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class="content-box box-3 box-style-1">
							<div class="zerogrid">
								<div class="wrap-box">
									<div
										class="header wow fadeInUp"
										data-wow-delay=".1s"
										data-wow-duration="1s"
									>
										<h2>ÜRÜNLERİMİZ</h2>
									</div>
									<div
										class="content wow fadeIn"
										data-wow-delay=".1s"
										data-wow-duration="1s"
									>
										<div class="row">
											{data.products.map((product) => (
												<div class="lg-1-4 md-1-3 sm-1-2">
													<div class="wrap-col">
														<div class="product">
															<div class="product-thumbnail">
																<Link
																	to={{
																		pathname: `/product/${product.name}`,
																		state: { product },
																	}}
																>
																	<img src={product.image} alt="" />
																</Link>
															</div>
															<div class="product-content">
																<div class="row">
																	<h2 class="product-title">
																		<Link
																			to={{
																				pathname: `/product/${product.name}`,
																				state: { product },
																			}}
																		>
																			{product.name}
																		</Link>
																	</h2>
																</div>
																<div class="row">
																	<div class="categories">
																		<Link
																			to={{
																				pathname: `/product/${product.name}`,
																				state: { product },
																			}}
																			rel="tag"
																		>
																			{product.category}
																		</Link>
																		,{" "}
																		<Link
																			to={{
																				pathname: `/product/${product.name}`,
																				state: { product },
																			}}
																			rel="tag"
																		>
																			{product.type}
																		</Link>
																	</div>
																	<span class="price">₺{product.price}</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class="content-box box-7">
							<div class="zerogrid-fluid">
								<div class="wrap-box">
									<div
										class="content wow fadeInLeft"
										data-wow-delay=".1s"
										data-wow-duration="1s"
									>
										<div class="row">
											<div class="md-1-3">
												<div class="wrap-col">
													<div class="row">
														<div class="sm-1-3">
															<i class="fa fa-map-marker"></i>
														</div>
														<div class="sm-2-3 t-left-sm">
															<h3>Adres</h3>
															<p>Fıstık hali, Nizip, Gaziantep</p>
														</div>
													</div>
												</div>
											</div>
											<div class="md-1-3">
												<div class="wrap-col">
													<div class="row">
														<div class="sm-1-3">
															<i class="fa fa-phone"></i>
														</div>
														<div class="sm-2-3 t-left-sm">
															<h3>Telefon</h3>
															<p>+90 545 410 0858</p>
														</div>
													</div>
												</div>
											</div>
											<div class="md-1-3">
												<div class="wrap-col">
													<div class="row">
														<div class="sm-1-3">
															<i class="fa fa-envelope"></i>
														</div>
														<div class="sm-2-3 t-left-sm">
															<h3>Email</h3>
															<p>enesagrogida@gmail.com</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</section>

				<footer id="page-footer">
					<div class="zerogrid bottom-footer">
						<div class="row">
							<div class="bottom-social">
								<Link to="#">
									<i class="fa fa-facebook"></i>
								</Link>
								<Link to="#">
									<i class="fa fa-instagram"></i>
								</Link>
								<Link to="#">
									<i class="fa fa-twitter"></i>
								</Link>
								<Link to="#">
									<i class="fa fa-youtube"></i>
								</Link>
							</div>
						</div>
						<div class="copyright">Copyright &copy; Enes Agro Gıda 2022</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
