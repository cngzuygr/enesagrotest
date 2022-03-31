import React from "react";
import { Link } from "react-router-dom";

export default function ProductScreen(props) {
	const product = props.location.state.product;
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
									<Link
										to={{
											pathname: `/product/${product.name}`,
											state: { product },
										}}
									>
										{product.name}
									</Link>
								</li>
							</ul>
						</div>
						<div id="about-us">
							<article className="post-entry single-post">
								<div className="wrap-post">
									<div className="entry-header">
										<h1 className="entry-title">{product.name}</h1>
									</div>
									<div className="entry-content">
										<div className="excerpt">
											<img src={product.image} alt="" />
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
										<div className="note">
											<ol>
												{product.ingredients.map((ingredient) => (
													<li>{ingredient}</li>
												))}
												<li>
													Ürün net ağırlığı:{" "}
													<strong style={{ color: "red" }}>
														{product.weight}
													</strong>
												</li>
											</ol>
											<div className="clear"></div>
										</div>
										<p>
											Duis autem vel eum iriure dolor in hendrerit in vulputate
											velit esse molestie consequat, vel illum dolore eu feugiat
											nulla facilisis at vero eros et accumsan et iusto odio
											dignissim qui blandit praesent luptatum zzril.
										</p>
										<h2>Fiyat: ₺{product.price}</h2>
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
