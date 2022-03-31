import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductsScreen from "./screens/ProductsScreen";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Route path="/" component={HomeScreen} exact></Route>
				<Route path="/about" component={AboutScreen}></Route>
				<Route path="/contact" component={ContactScreen}></Route>
				<Route path="/product/:id" component={ProductScreen}></Route>
				<Route path="/products" component={ProductsScreen}></Route>
			</BrowserRouter>
			<a
				href="https://wa.me/+905454100858"
				class="whatsapp_float"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i class="fa fa-whatsapp whatsapp-icon"></i>
			</a>
		</React.Fragment>
	);
}

export default App;

/*import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
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
									<a href="#page-content" class="scroller">
										<span class="scroller-text">Devam et</span>
										<div class="scroller-button">
											<i class="fa fa-angle-double-down"></i>
										</div>
									</a>
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
											<Link to="/products/fistik">
												<span>Fıstık</span>
											</Link>
											<ul>
												<li>
													<Link to="/products/fistik/bozic">
														<span>Boz iç</span>
													</Link>
												</li>
												<li class="last">
													<Link to="/products/fistik/kavrulmus">
														<span>Kavrulmuş</span>
													</Link>
												</li>
											</ul>
										</li>
										<li class="has-sub">
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
								<li class="last">
									<Link to="/contact">
										<span>İLETİŞİM</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</header>
				<main></main>
				<footer></footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
*/
