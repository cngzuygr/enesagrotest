const data = {
	// users: [
	// 	{
	// 		name: "Cengiz",
	// 		email: "admin@example.com",
	// 		password: bcrypt.hashSync("1234", 8),
	// 		isAdmin: true,
	// 	},
	// 	{
	// 		name: "Enes",
	// 		email: "user@example.com",
	// 		password: bcrypt.hashSync("1234", 8),
	// 		isAdmin: true,
	// 	},
	// ],
	products: [
		{
			name: "Boz İç Fıstık 1 kg",
			category: "Fıstık",
			image: "/assets/product/boziccapraz.jpg",
			price: 290,
			countInStock: 100,
			brand: "Alâ Fıstık",

			description: "Ürünlerimiz Gaziantep ve Şanlıurfa yöresinden toplanan ürünlerden oluşmaktadır. Çiftçilerimizden temin ettiğimiz ürünleri tesisimizde işleyerek satışa hazır hale getirmekteyiz. Doğrudan güneş ışığına maruz bırakmayınız. Ürünü kendi ambalajında 6ay boyunca saklayabilirsiniz. En iyi saklama için cam kavanoz içerisinde buzdolabında saklamanızı öneririz. Ürün son kullanma tarihi yasal sorunluluk sebebi ile altı ay veya bir yıl ile sınırlıdır fakat doğru bir saklama ile daha uzun süreler ürünlerimizi tüketebilirsiniz. Ürünün bozulduğunu küf veya güvelenme ile gözlemleyebilirsiniz. Gıda ürünlerini satın alırken üretici/depolama/satıcı firmalarının gıda kayıtlarının olması gerektiğini unutmayınız. Ürünümüz 1. kalite boz iç fıstıktır. YEDİKÇE TUTKUNUZ OLACAK.
",
			ingredients: ["Karbonhidrat: 272gr", "Protein: 202gr", "Yağ: 453gr", "Lif: 106gr"],
			weight: "1000gr",
			type: "Boz Fıstık",
		},
		{
			name: "Meverdi İç Fıstık 1 kg",
			category: "Fıstık",
			image: "/assets/product/meverdicapraz.jpg",
			price: 260,
			countInStock: 100,
			brand: "Alâ Fıstık",

			description: "Ürünlerimiz Gaziantep ve Şanlıurfa yöresinden toplanan ürünlerden oluşmaktadır. Çiftçilerimizden temin ettiğimiz ürünleri tesisimizde işleyerek satışa hazır hale getirmekteyiz. Doğrudan güneş ışığına maruz bırakmayınız. Ürünü kendi ambalajında 6ay boyunca saklayabilirsiniz. En iyi saklama için cam kavanoz içerisinde buzdolabında saklamanızı öneririz. Ürün son kullanma tarihi yasal sorunluluk sebebi ile altı ay veya bir yıl ile sınırlıdır fakat doğru bir saklama ile daha uzun süreler ürünlerimizi tüketebilirsiniz. Ürünün bozulduğunu küf veya güvelenme ile gözlemleyebilirsiniz. Gıda ürünlerini satın alırken üretici/depolama/satıcı firmalarının gıda kayıtlarının olması gerektiğini unutmayınız. Ürünümüz 1. kalite Meverdi iç fıstıktır. YEDİKÇE TUTKUNUZ OLACAK.
",
			ingredients: ["Karbonhidrat: 272gr", "Protein: 202gr", "Yağ: 453gr", "Lif: 106gr"],
			weight: "1000gr",
			type: "Meverdi iç Fıstık",
		},
		{
			name: "Kırmızı İç Fıstık 1 kg",
			category: "Fıstık",
			image: "/assets/product/kirmizicapraz.jpg",
			price: 240,
			countInStock: 100,
			brand: "Alâ Fıstık",

			description: "Ürünlerimiz Gaziantep ve Şanlıurfa yöresinden toplanan ürünlerden oluşmaktadır. Çiftçilerimizden temin ettiğimiz ürünleri tesisimizde işleyerek satışa hazır hale getirmekteyiz. Doğrudan güneş ışığına maruz bırakmayınız. Ürünü kendi ambalajında 6ay boyunca saklayabilirsiniz. En iyi saklama için cam kavanoz içerisinde buzdolabında saklamanızı öneririz. Ürün son kullanma tarihi yasal sorunluluk sebebi ile altı ay veya bir yıl ile sınırlıdır fakat doğru bir saklama ile daha uzun süreler ürünlerimizi tüketebilirsiniz. Ürünün bozulduğunu küf veya güvelenme ile gözlemleyebilirsiniz. Gıda ürünlerini satın alırken üretici/depolama/satıcı firmalarının gıda kayıtlarının olması gerektiğini unutmayınız. Ürünümüz 1. kalite Kırmızı iç fıstıktır. YEDİKÇE TUTKUNUZ OLACAK.
",
			ingredients: ["Karbonhidrat: 272gr", "Protein: 202gr", "Yağ: 453gr", "Lif: 106gr"],
			weight: "1000gr",
			type: "Kırmızı iç Fıstık",
		},
		{
			name: "Ağaç Altı Kuru Kırmızı Fıstık 1 kg",
			category: "Fıstık",
			image: "/assets/product/bengcapraz",
			price: 110,
			countInStock: 100,
			brand: "Alâ Fıstık",

			description: "Ürünlerimiz Gaziantep ve Şanlıurfa yöresinden toplanan ürünlerden oluşmaktadır. Çiftçilerimizden temin ettiğimiz ürünleri tesisimizde işleyerek satışa hazır hale getirmekteyiz. Doğrudan güneş ışığına maruz bırakmayınız. Ürünü kendi ambalajında 6ay boyunca saklayabilirsiniz. En iyi saklama için cam kavanoz içerisinde buzdolabında saklamanızı öneririz. Ürün son kullanma tarihi yasal sorunluluk sebebi ile altı ay veya bir yıl ile sınırlıdır fakat doğru bir saklama ile daha uzun süreler ürünlerimizi tüketebilirsiniz. Ürünün bozulduğunu küf veya güvelenme ile gözlemleyebilirsiniz. Gıda ürünlerini satın alırken üretici/depolama/satıcı firmalarının gıda kayıtlarının olması gerektiğini unutmayınız. Ürünümüz 1. kalite Kuru Kırmızı Kabuklu fıstıktır. YEDİKÇE TUTKUNUZ OLACAK.
",
			ingredients: ["Karbonhidrat: 272gr", "Protein: 202gr", "Yağ: 453gr", "Lif: 106gr"],
			weight: "1000gr",
			type: "Kabuklu Kırmızı Fıstık",
		},
		{
			name: "Pirinç İç Fıstık 1 kg",
			category: "Fıstık",
			image: "/assets/product/pirinccapraz.jpg",
			price: 290,
			countInStock: 100,
			brand: "Alâq Fıstık",

			description: "Ürünlerimiz Gaziantep ve Şanlıurfa yöresinden toplanan ürünlerden oluşmaktadır. Çiftçilerimizden temin ettiğimiz ürünleri tesisimizde işleyerek satışa hazır hale getirmekteyiz. Doğrudan güneş ışığına maruz bırakmayınız. Ürünü kendi ambalajında 6ay boyunca saklayabilirsiniz. En iyi saklama için cam kavanoz içerisinde buzdolabında saklamanızı öneririz. Ürün son kullanma tarihi yasal sorunluluk sebebi ile altı ay veya bir yıl ile sınırlıdır fakat doğru bir saklama ile daha uzun süreler ürünlerimizi tüketebilirsiniz. Ürünün bozulduğunu küf veya güvelenme ile gözlemleyebilirsiniz. Gıda ürünlerini satın alırken üretici/depolama/satıcı firmalarının gıda kayıtlarının olması gerektiğini unutmayınız. Ürünümüz 1. kalite boz iç fıstıktan üretilmiş Pirinç İç Fıstıktır. YEDİKÇE TUTKUNUZ OLACAK.
",
			ingredients: ["Karbonhidrat: 10gr", "Protein: 10gr", "Yağ: 10gr"],
			weight: "1000gr",
			type: "Pirinç İç Fıstık",
		},
		{
			name: "File İç Fıstık 1 kg",
			category: "Fıstık",
			image: "/assets/product/filecapraz.jpg",
			price: 290,
			countInStock: 100,
			brand: "Alâ Fıstık",
			rating: 4.5,
			numReviews: 15,
			description: "Ürünlerimiz Gaziantep ve Şanlıurfa yöresinden toplanan ürünlerden oluşmaktadır. Çiftçilerimizden temin ettiğimiz ürünleri tesisimizde işleyerek satışa hazır hale getirmekteyiz. Doğrudan güneş ışığına maruz bırakmayınız. Ürünü kendi ambalajında 6ay boyunca saklayabilirsiniz. En iyi saklama için cam kavanoz içerisinde buzdolabında saklamanızı öneririz. Ürün son kullanma tarihi yasal sorunluluk sebebi ile altı ay veya bir yıl ile sınırlıdır fakat doğru bir saklama ile daha uzun süreler ürünlerimizi tüketebilirsiniz. Ürünün bozulduğunu küf veya güvelenme ile gözlemleyebilirsiniz. Gıda ürünlerini satın alırken üretici/depolama/satıcı firmalarının gıda kayıtlarının olması gerektiğini unutmayınız. Ürünümüz 1. kalite boz iç fıstıktan üretilmiş orta kıyım File İç Fıstıktır. YEDİKÇE TUTKUNUZ OLACAK.
",
			ingredients: ["Karbonhidrat: 10gr", "Protein: 10gr", "Yağ: 10gr"],
			weight: "1000gr",
			type: "File İç Fıstık",
		},
		{
			name: "Boz Toz İç Fıstık 1 kg",
			category: "Fıstık",
			image: "/assets/product/anteptozcapraz.jpg",
			price: 220,
			countInStock: 100,
			brand: "Alâ Fıstık",

			description: "Ürünlerimiz Gaziantep ve Şanlıurfa yöresinden toplanan ürünlerden oluşmaktadır. Çiftçilerimizden temin ettiğimiz ürünleri tesisimizde işleyerek satışa hazır hale getirmekteyiz. Doğrudan güneş ışığına maruz bırakmayınız. Ürünü kendi ambalajında 6ay boyunca saklayabilirsiniz. En iyi saklama için cam kavanoz içerisinde buzdolabında saklamanızı öneririz. Ürün son kullanma tarihi yasal sorunluluk sebebi ile altı ay veya bir yıl ile sınırlıdır fakat doğru bir saklama ile daha uzun süreler ürünlerimizi tüketebilirsiniz. Ürünün bozulduğunu küf veya güvelenme ile gözlemleyebilirsiniz. Gıda ürünlerini satın alırken üretici/depolama/satıcı firmalarının gıda kayıtlarının olması gerektiğini unutmayınız. Ürünümüz 1. kalite boz iç fıstıktan üretilmiş Toz İç Fıstıktır. YEDİKÇE TUTKUNUZ OLACAK.
",
			ingredients: ["Karbonhidrat: 10gr", "Protein: 10gr", "Yağ: 10gr"],
			weight: "1000gr",
			type: "Boz Toz Fıstık",
		},
		{
			name: "Kavrulmuş Naturel Fıstık 1 kg",
			category: "Fıstık",
			image: "/assets/product/kvrantepyatik2.jpg",
			price: 124,
			countInStock: 100,
			brand: "Alâ Fıstık",

			description: "Ürünlerimiz Gaziantep ve Şanlıurfa yöresinden toplanan ürünlerden oluşmaktadır. Çiftçilerimizden temin ettiğimiz ürünleri tesisimizde işleyerek satışa hazır hale getirmekteyiz. Doğrudan güneş ışığına maruz bırakmayınız. Ürünü kendi ambalajında 6ay boyunca saklayabilirsiniz. En iyi saklama için cam kavanoz içerisinde buzdolabında saklamanızı öneririz. Ürün son kullanma tarihi yasal sorunluluk sebebi ile altı ay veya bir yıl ile sınırlıdır fakat doğru bir saklama ile daha uzun süreler ürünlerimizi tüketebilirsiniz. Ürünün bozulduğunu küf veya güvelenme ile gözlemleyebilirsiniz. Gıda ürünlerini satın alırken üretici/depolama/satıcı firmalarının gıda kayıtlarının olması gerektiğini unutmayınız. Ürünümüz 1. kalite çiftçiden alınıp kavrulup başka bir işlem görmemiş kaliteli ve lezzetli antep fıstığıdır. YEDİKÇE TUTKUNUZ OLACAK.
",
			ingredients: ["Karbonhidrat: 10gr", "Protein: 10gr", "Yağ: 10gr"],
			weight: "1000gr",
			type: "Kavrulmuş Fıstık",
		},

		{
			name: "Fıstık 9",
			category: "Fıstık",
			image: "/assets/product/p9.jpeg",
			price: 139,
			countInStock: 12,
			brand: "Ala Fıstık",

			description: "İyi fıstık",
			ingredients: ["Karbonhidrat: 10gr", "Protein: 10gr", "Yağ: 10gr"],
			weight: "450gr",
			type: "İç Fıstık",
		},
		{
			name: "Kavrulmuş Premium Antep Fıstığı 1 Kg",
			category: "Fıstık",
			image: "/assets/product/kvryatikcapraz.jpg",
			price: 154.90,
			countInStock: 12,
			brand: "Alâ Fıstık",

			description: "İyi fıstık",
			ingredients: ["Karbonhidrat: 10gr", "Protein: 10gr", "Yağ: 10gr", "Tuz içerir"],
			weight: "1000gr",
			type: " Kavrulmuş Fıstık",
		},
	],
};
export default data;
