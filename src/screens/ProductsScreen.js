import React from "react";
import { Link } from "react-router-dom";
import data from "../data.js";

export default function ProductsScreen() {
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
									<Link to="/about">Ürünler</Link>
								</li>
							</ul>
						</div>
						<div id="about-us">
							<article className="post-entry single-post">
								<div className="wrap-post">
									<div className="entry-header">
										<h1 className="entry-title">Ürünler</h1>
									</div>
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
