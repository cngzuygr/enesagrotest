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
											<br /> Pistachio
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
										<h1 className="entry-title">Hakkımızda</h1>
									</div>
									<div className="entry-content">
										<div className="excerpt">
											<p>
												1998 yılında babamızın başlattığı ‘’en kaliteli ürünleri uygun fiyata müşteriye sunma’’ ilkesiyle başlayıp 2022 yılında Alâ Fıstık markamızla, hizmet vermeye başladığı günden bu yana başta kuruyemiş olmak üzere, kuru meyve, lokum, bitkisel yağ ve aktar ürünlerini Türkiye’nin her yerindeki müşterilerine taze ve hızlı bir şekilde ulaştırmaktadır. Yeni mahsul ürünler, Nizip/Gaziantep’te bulunan Enes Agro Gıda ve markamız olan Alâ Fıstık entegre tesislerinde hijyen koşullarına uygun olarak el değmeden paketlenerek sizlere ulaştırılmak üzere yola çıkmaktadır. Müşteri memnuniyetini birinci önceliği kabul eden firmanın yeni dönemdeki hedefi, ürün yelpazesini genişleterek, tazelikten ve kaliteden ödün vermeden Türkiye’nin her noktasına gönderim yapmaya devam etmektir.
				
											</p>
										</div>
										<p>
											Ailemizin fıstıkçılık işinde 2. kuşak üyeleri olarak atalarımızdan gelen bilgi ve tecrübeyi günümüz teknolojisiyle harmanlayıp, kaliteden ödün vermeden sağlıklı ürünler üretmek kalite politikamızın esasıdır. Enes Agro Gıda kalite anlayışı sadece üretim, satış ve pazarlama ile sınırlı değildir. Tüm çalışanları ile birlikte,toplumun isteklerine duyarlı bir yaklaşım ile cevap vermek vizyonuna sahiptir.
										</p>
										<blockquote>
											<p>
												Hiç bir zaman kendimiz yemediğimiz ürünü başkasına satmıyoruz.
											</p>
										</blockquote>
										<p>
											Bunu gerçekleştirirken farkımız kendi değerlerimizi organizasyon yapımıza, ürünlerimize ve hizmetlerimize yansıtmamızdır. Çevremize duyduğumuz saygıyı ürünlerimize de yansıtarak bilinçli üretici olmayı, mükemmel ve üstün sonuçlara ulaşmayı hedeflemiş bulunmaktayız. İlkeli prensiplerimiz ve değer yargılarımız devamlılığı getirmiştir.
										</p>
										<h2>Vizyonumuz</h2>
										<p>
											Toplum ve ülke çıkarlarını göz önünde bulundurarak, kaliteden ödün vermeden Antep fıstığı’nı geniş kitlelere ileterek hakettiği yeri almasına katkı sağlayan, gelenekselliği yitirmeden yenilikçi yaklaşımımız, müşteri odaklı hizmet anlayışımızla örnek bir üretim merkezi olarak Türk ve dünya Fıstık pazarında söz sahibi olmaktır.
										</p>
										<h2>İlkelerimiz</h2>
										<p>
											Sağlık ve Çevreye Saygı; Toplumun yaşamını çok yakından ilgilendiren bir sektör olarak hijyenik çalışma ortamı sağlamaktayız. İçinde yaşadığı topluma katkıda bulunmak ve böylece yaşam kalitesini arttırmaya yardımcı olmak da Enes Agro Gıda'nın en önemli hedefleri arasındadır. Müşteri Memnuniyeti; Müşterilerimizin beklentilerine devamlılık gösteren bir çizgi ile cevap vererek, en lezzetli ve sağlıklı ürünleri sunarak, ürünlerimizin her daim güvenirliliğini hissettiriyoruz. Ürünlerimizde ve çalışma yöntemlerimizde yaratıcı ve yenilikçi olmayı hedefliyoruz.
										</p>
										<p>
											Etik Davranışlarımız; Çalışanlarımız ile birlikte, çevreye saygılı, dürüst, bir o kadarda dostane davranışlarda bulunarak, bugünü değil yarını düşünerek karar veriyoruz. Enes Agro Gıda teknolojiyi kullanarak yenilikçi fikirlerle, zamanında temiz, sağlıklı, güvenilir ürünler üreterek büyümeyi hedefleyen bir firmadır. Yurt içi ve yurt dışı pazarını takip ederek, gerekli yatırım ve donanımlarla tarım ürünleri pazarında yerini almaya devam edecektir.
										</p>
										<div className="note">
											<ol>
												<li>Güvenilirlik</li>
												<li>Saygınlık</li>
												<li>Kaliteli Hizmet</li>
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
								<a href="https://www.facebook.com/enesagrogida/" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-facebook"></i>
								</a>
								<a href="https://www.instagram.com/alafistik/" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-instagram"></i>
								</a>
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
