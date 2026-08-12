import type { FoodPlace } from './types'

/** Curated from Asia Travel Book: https://www.asiatravelbook.com/2020/10/jerantut-11.html */
export const foodPlaces: FoodPlace[] = [
  {
    id: 'mei-jie-mee',
    rank: 1,
    name: {
      en: 'Mei Jie Noodle Stall',
      bm: 'Gerai Mee Mei Jie',
      cn: '梅姐面档',
    },
    highlight: {
      en: 'Homestyle flat noodles with ikan bilis broth & curry chicken feet',
      bm: 'Mee rumah tangga dengan kuah ikan bilis & kaki ayam kari',
      cn: '家常面粉糕配江鱼仔清汤，咖喱鸡脚也是招牌',
    },
    description: {
      en: 'Mei Jie’s flour noodles taste like mum’s cooking — a clear broth fragrant with dried anchovies and sweet bone stock, served with choy sum and visible pork pieces. The curry chicken feet is another highly ordered signature.',
      bm: 'Mee tepung Mei Jie rasa macam masakan ibu — kuah jernih wangi ikan bilis dan manis tulang, dihidang dengan sawi dan potongan daging. Kaki ayam kari juga sangat popular.',
      cn: '梅姐的面粉糕是妈妈家常会做的那种，汤头喝起来就是有江鱼仔的香味，还有大骨熬出来的清甜滋味。这里的面粉糕是用菜心做搭配，还有清楚可见的猪肉块，另一个被点率很高的“咖喱鸡脚”也是招牌之一！',
    },
    cuisine: {
      en: 'Chinese noodles',
      bm: 'Mee Cina',
      cn: '中式面档',
    },
    mustTry: {
      en: ['Flour noodles / pan mee style', 'Curry chicken feet', 'Clear ikan bilis broth'],
      bm: ['Mee tepung', 'Kaki ayam kari', 'Kuah ikan bilis'],
      cn: ['面粉糕', '咖喱鸡脚', '江鱼仔清汤'],
    },
    address: {
      en: 'Lot 8262, Jalan Kuantan, Taman Sri Tahan, 27000 Jerantut, Pahang, Malaysia',
      bm: 'Lot 8262, Jalan Kuantan, Taman Sri Tahan, 27000 Jerantut, Pahang, Malaysia',
      cn: 'Lot 8262, Jalan Kuantan, Taman Sri Tahan, 27000 Jerantut, Pahang, Malaysia',
    },
    hours: {
      en: 'Check locally / ask when open',
      bm: 'Sila semak waktu buka di tempat',
      cn: '请向店家确认营业时间',
    },
    image:
      '/images/food/mei-jie-mee.png',
    mapUrl:
      'https://maps.app.goo.gl/zHgED9qT8TTKjJJo8',
  },
  {
    id: 'ah-sai-chicken-rice',
    rank: 2,
    name: {
      en: 'Ah Sai / New Ah Sai Chicken Rice',
      bm: 'Nasi Ayam Ah Sai / New Ah Sai',
      cn: '阿西鸡饭 / 新阿西鸡饭',
    },
    highlight: {
      en: 'Jerantut’s famous everyday chicken rice',
      bm: 'Nasi ayam terkenal Jerantut setiap hari',
      cn: '当地人与游客都熟悉的而连突鸡饭',
    },
    description: {
      en: 'Whether you are local or visiting, Ah Sai chicken rice is hard to miss — convenient, filling, and tasty. Besides chicken, the stall rotates side dishes daily; you have to taste it yourself.',
      bm: 'Sama ada penduduk atau pelawat, nasi ayam Ah Sai memang dikenali — mudah, mengenyangkan dan sedap. Selain ayam, lauk sampingan ditukar setiap hari.',
      cn: '不管是当地人还是来过Jerantut的你，肯定对阿西鸡饭不陌生！吃鸡饭是最方便也有饱足感的。除了鸡，店家每天还会推出不同的配菜，味道更不必说，只有尝过才知道！',
    },
    cuisine: {
      en: 'Chicken rice',
      bm: 'Nasi ayam',
      cn: '海南鸡饭',
    },
    mustTry: {
      en: ['Chicken rice', 'Daily side dishes', 'Chilli sauce'],
      bm: ['Nasi ayam', 'Lauk hari itu', 'Sos cili'],
      cn: ['鸡饭', '当日配菜', '辣椒酱'],
    },
    address: {
      en: '35-44, Jalan Zapin Indah 2, Bandar Inderapura, 27000 Jerantut, Pahang',
      bm: '35-44, Jalan Zapin Indah 2, Bandar Inderapura, 27000 Jerantut, Pahang',
      cn: '35-44, Jalan Zapin Indah 2, Bandar Inderapura, 27000 Jerantut, Pahang',
    },
    hours: {
      en: '10:00 AM – 4:30 PM',
      bm: '10:00 pagi – 4:30 petang',
      cn: '10:00am – 04:30pm',
    },
    image:
      '/images/food/ah-sai-chicken-rice.png',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Jalan+Zapin+Indah+2+Bandar+Inderapura+Jerantut+chicken+rice',
  },
  {
    id: 'spring-garden-dim-sum',
    rank: 3,
    name: {
      en: 'Spring Garden Dim Sum House',
      bm: 'Spring Garden Dim Sum House',
      cn: '好景点心茶楼 Spring Garden Dim Sum House',
    },
    highlight: {
      en: 'Handmade dim sum — refined looks and solid flavour',
      bm: 'Dim sum buatan tangan — nampak cantik dan rasa memuaskan',
      cn: '精致手工点心，无防腐剂，吃得安心',
    },
    description: {
      en: 'Pretty plating and satisfying taste — and most importantly, everything is handmade without preservatives, so you can eat with peace of mind.',
      bm: 'Hidangan kelihatan kemas dan rasa memuaskan. Paling penting, semua dibuat tangan tanpa pengawet.',
      cn: '除了点心看起来非常精致，就连味道也让人吃了相当满意，最重要是这家的点心全部都是手工制作，没有防腐剂成分，让人吃了也安心。好景点心茶楼首创的“全马最大恐龙大包”更成功记录在《马来西亚记录大全里》！',
    },
    cuisine: {
      en: 'Dim sum',
      bm: 'Dim sum',
      cn: '点心茶楼',
    },
    mustTry: {
      en: ['Handmade dumplings', 'Steamed buns', 'Morning tea set'],
      bm: ['Dumpling buatan tangan', 'Pau kukus', 'Set teh pagi'],
      cn: ['恐龙包', '蒸包', '早茶点心'],
    },
    address: {
      en: '54A-55A Medan Selera Inderapura, Jalan Zapin 3, 27000 Jerantut, Pahang',
      bm: '54A-55A Medan Selera Inderapura, Jalan Zapin 3, 27000 Jerantut, Pahang',
      cn: '54A-55A medan selera inderapura, Jalan Zapin 3, 27000 Jerantut, Pahang',
    },
    hours: {
      en: '6:00 AM – 2:30 PM',
      bm: '6:00 pagi – 2:30 petang',
      cn: '06:00am – 02:30pm',
    },
    image:
      '/images/food/spring-garden-dim-sum.png',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Spring+Garden+Dim+Sum+House+Jerantut',
  },
  {
    id: 'keong-dim-sum',
    rank: 4,
    name: {
      en: 'Kedai Dim Sum Keong',
      bm: 'Kedai Dim Sum Keong',
      cn: '强饱饺点心店 Kedai Dim Sum Keong',
    },
    highlight: {
      en: '50+ year old-school handmade dim sum',
      bm: 'Dim sum buatan tangan lebih 50 tahun',
      cn: '五十多年老字号，全手工古早味包点',
    },
    description: {
      en: 'A Jerantut institution for over fifty years — fully handmade, old-school bao and dumplings you should not skip.',
      bm: 'Kedai lama Jerantut lebih 50 tahun — pau dan dumpling buatan tangan rasa lama yang wajib cuba.',
      cn: '作为Jerantut五十多年的老字号美食，还是全手工古早味点心包点，你怎么能不来试一试呢？',
    },
    cuisine: {
      en: 'Dim sum / bao',
      bm: 'Dim sum / pau',
      cn: '古早点心',
    },
    mustTry: {
      en: ['Handmade bao', 'Classic dumplings', 'Old-school snacks'],
      bm: ['Pau buatan tangan', 'Dumpling klasik', 'Snek gaya lama'],
      cn: ['手工包点', '经典炸烧卖', '古早小吃'],
    },
    address: {
      en: 'Jalan Zapin Indah 2, Bandar Inderapura, 27000 Jerantut, Pahang',
      bm: 'Jalan Zapin Indah 2, Bandar Inderapura, 27000 Jerantut, Pahang',
      cn: 'Jalan Zapin Indah 2, Bandar Inderapura, 27000 Jerantut, Pahang',
    },
    hours: {
      en: '5:30 AM – 1:00 PM',
      bm: '5:30 pagi – 1:00 petang',
      cn: '05:30am – 01:00pm',
    },
    image:
      '/images/food/keong-dim-sum.png',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Kedai+Dim+Sum+Keong+Jerantut',
  },
  {
    id: 'shun-ming-river-fish',
    rank: 5,
    name: {
      en: 'Restoran Shun Ming',
      bm: 'Restoran Shun Ming',
      cn: '顺明河鱼饭店 Restoran Shun Ming',
    },
    highlight: {
      en: 'Chinese river-fish specialist worth seeking out',
      bm: 'Pakar ikan sungai Cina yang berbaloi dicuba',
      cn: '而连突河鱼中式餐厅推荐之一，味道不输酒楼',
    },
    description: {
      en: 'Jerantut has many Chinese river-fish restaurants; Shun Ming is one of the strongest recommendations. The décor is simple, but the cooking easily rivals fancier restaurants.',
      bm: 'Jerantut ada banyak restoran ikan sungai Cina; Shun Ming antara yang paling disyorkan. Hiasan sederhana, tapi rasa tidak kalah restoran mewah.',
      cn: '来过Jerantut的人应该不难发现当地有很多家专卖河鱼的中式餐厅，而顺明河鱼就是其中非常值得推荐的一家！或许店家装潢没有很华丽，但是味道一点都不输酒楼！',
    },
    cuisine: {
      en: 'River fish / Chinese',
      bm: 'Ikan sungai / Cina',
      cn: '河鱼中菜',
    },
    mustTry: {
      en: ['Steamed river fish', 'Signature fish dishes', 'Shared Chinese plates'],
      bm: ['Ikan sungai kukus', 'Hidangan ikan signature', 'Lauk kongsi'],
      cn: ['清蒸河鱼', '招牌河鱼料理', '中式合菜'],
    },
    address: {
      en: '312-C, Kampung Sungai Jan, 27000 Jerantut, Pahang',
      bm: '312-C, Kampung Sungai Jan, 27000 Jerantut, Pahang',
      cn: '312-C, Kampung Sungai Jan, 27000 Jerantut, Pahang',
    },
    hours: {
      en: '11:00 AM – 10:00 PM',
      bm: '11:00 pagi – 10:00 malam',
      cn: '11:00am – 10:00pm',
    },
    image:
      '/images/food/shun-ming-river-fish.png',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Restoran+Shun+Ming+Kampung+Sungai+Jan+Jerantut',
  },
  {
    id: 'man-fook-lau',
    rank: 6,
    name: {
      en: 'Restaurant Man Fook Lau',
      bm: 'Restaurant Man Fook Lau',
      cn: '万福楼 Restaurant Man Fook Lau',
    },
    highlight: {
      en: 'Another must for Jerantut river fish',
      bm: 'Satu lagi wajib untuk ikan sungai Jerantut',
      cn: '来Jerantut不吃河鱼等于没来过',
    },
    description: {
      en: 'Another dedicated fish restaurant — visiting Jerantut without trying the river fish really means missing the point.',
      bm: 'Satu lagi restoran fokus ikan — datang Jerantut tanpa rasa ikan sungai rasanya kurang lengkap.',
      cn: '又是一家吃鱼的餐厅，来Jerantut没有品尝河鱼就真的等于没有来过啦！',
    },
    cuisine: {
      en: 'River fish / Chinese',
      bm: 'Ikan sungai / Cina',
      cn: '河鱼中菜',
    },
    mustTry: {
      en: ['River fish', 'Family-style Chinese dishes'],
      bm: ['Ikan sungai', 'Lauk Cina berkongsi'],
      cn: ['河鱼', '中式合菜'],
    },
    address: {
      en: '101, Lorong Intan 2, Taman Intan, 27000 Jerantut, Pahang',
      bm: '101, Lorong Intan 2, Taman Intan, 27000 Jerantut, Pahang',
      cn: '101, Lorong Intan 2, Taman Intan, 27000 Jerantut, Pahang',
    },
    hours: {
      en: '11:30 AM – 11:00 PM (closed Monday)',
      bm: '11:30 pagi – 11:00 malam (tutup Isnin)',
      cn: '11:30am – 11:00pm（星期一休息）',
    },
    image:
      '/images/food/man-fook-lau.png',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Man+Fook+Lau+Taman+Intan+Jerantut',
  },
  {
    id: 'law-sin-river-fish',
    rank: 7,
    name: {
      en: 'Restoran Law Sin',
      bm: 'Restoran Law Sin',
      cn: '老仙河鱼饭店 Restoran Law Sin',
    },
    highlight: {
      en: 'Famous steamed river fish & Guangxi-style pork',
      bm: 'Ikan sungai kukus & daging gaya Guangxi yang terkenal',
      cn: '招牌蒸河鱼、古早味广西扣肉，当地人气很高',
    },
    description: {
      en: 'A young but already well-known Jerantut chef — locals love the old-school Guangxi-style braised pork and the signature steamed river fish that almost every table orders.',
      bm: 'Chef muda yang sudah terkenal di Jerantut — penduduk suka daging gaya Guangxi lama dan ikan sungai kukus signature yang hampir setiap meja pesan.',
      cn: '这位年纪轻轻就已经成为Jerantut非常著名的厨师，他所烹饪的菜肴全部都很受当地人的欢迎，尤其是古早味广西扣肉及招牌蒸河鱼，特别多人来这里用餐都会下单的菜品。',
    },
    cuisine: {
      en: 'River fish / Chinese',
      bm: 'Ikan sungai / Cina',
      cn: '河鱼中菜',
    },
    mustTry: {
      en: ['Steamed river fish', 'Guangxi-style braised pork'],
      bm: ['Ikan sungai kukus', 'Daging braised gaya Guangxi'],
      cn: ['招牌蒸河鱼', '广西扣肉'],
    },
    address: {
      en: 'S150, Taman Intan, 27000 Jerantut, Pahang',
      bm: 'S150, Taman Intan, 27000 Jerantut, Pahang',
      cn: 'S150, Taman Intan, 27000 Jerantut, Pahang Darul Makmur',
    },
    hours: {
      en: 'Check locally / ask when open',
      bm: 'Sila semak waktu buka di tempat',
      cn: '请向店家确认营业时间',
    },
    image:
      '/images/food/law-sin-river-fish.png',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Restoran+Law+Sin+Taman+Intan+Jerantut',
  },
  {
    id: 'foong-yuen',
    rank: 8,
    name: {
      en: 'Restoran Foong Yuen',
      bm: 'Restoran Foong Yuen',
      cn: '方源海鲜鱼翅大酒家 Restoran Foong Yuen',
    },
    highlight: {
      en: 'Steamed baishugong fish, pork ribs & limited crispy chicken leg',
      bm: 'Ikan kukus, tulang rusuk & kaki ayam rangup (terhad)',
      cn: '清蒸白须公、排骨王、限量脆皮去骨鸡腿',
    },
    description: {
      en: 'Known for steamed baishugong (river fish), king pork ribs, and especially the boneless crispy chicken leg that guests rave about — limited daily, first come first served.',
      bm: 'Dikenali dengan ikan kukus baishugong, tulang rusuk, dan kaki ayam rangup tanpa tulang yang ramai puji — stok harian terhad, datang awal.',
      cn: '除了驰名清蒸白须公、排骨王等等，特别是脆皮去骨鸡腿更是获得了食客的喜爱，个个吃到回味无穷，而且这道每日可是数量有限，先到先得哟~',
    },
    cuisine: {
      en: 'Chinese seafood restaurant',
      bm: 'Restoran makanan laut Cina',
      cn: '中式海鲜酒家',
    },
    mustTry: {
      en: ['Steamed baishugong fish', 'Pork ribs', 'Crispy boneless chicken leg'],
      bm: ['Ikan baishugong kukus', 'Tulang rusuk', 'Kaki ayam rangup'],
      cn: ['清蒸白须公', '排骨王', '脆皮去骨鸡腿'],
    },
    address: {
      en: '7930, 7933, Jalan Zapin Indah 4, Bandar Inderapura, 27000 Jerantut, Pahang',
      bm: '7930, 7933, Jalan Zapin Indah 4, Bandar Inderapura, 27000 Jerantut, Pahang',
      cn: '7930, 7933, Jln Zapin Indah 4, Bandar Inderapura, 27000 Jerantut, Pahang',
    },
    hours: {
      en: '11:00 AM – 11:00 PM',
      bm: '11:00 pagi – 11:00 malam',
      cn: '11:00am – 11:00pm',
    },
    image:
      '/images/food/foong-yuen.png',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Restoran+Foong+Yuen+Bandar+Inderapura+Jerantut',
  },
  {
    id: 'sayed-roti-canai',
    rank: 9,
    name: {
      en: 'Roti Canai @ Restoran Sayed Mohd Aziz',
      bm: 'Roti Canai @ Restoran Sayed Mohd Aziz',
      cn: 'Roti Canai @ Restoran Sayed Mohd Aziz',
    },
    highlight: {
      en: 'Especially crispy Malay roti canai (listed nearby in the guide)',
      bm: 'Roti canai Melayu yang sangat rangup (disenaraikan dalam panduan)',
      cn: '友族料理代表，旧街上特别香脆的Roti Canai',
    },
    description: {
      en: 'After so many Chinese spots, try Malay food too — this roti canai is especially fragrant and crispy. Note: the published address is in Temerloh (as listed by Asia Travel Book).',
      bm: 'Selepas banyak restoran Cina, cuba masakan Melayu — roti canai di sini sangat wangi dan rangup. Nota: alamat yang disenaraikan ialah di Temerloh (menurut Asia Travel Book).',
      cn: '介绍了那么多家中式料理，也该向大家介绍友族料理！这家位于旧街上的Roti Canai，味道特别香脆！（原文地址列于Temerloh）',
    },
    cuisine: {
      en: 'Malay / Mamak',
      bm: 'Melayu / Mamak',
      cn: '马来 / 嘛嘛',
    },
    mustTry: {
      en: ['Roti canai', 'Dhal', 'Teh tarik'],
      bm: ['Roti canai', 'Dhal', 'Teh tarik'],
      cn: ['Roti Canai', '扁豆汤', '拉茶'],
    },
    address: {
      en: 'No. 13, Jalan Ahmad Shah, Pusat Komersil Temerloh, 28000 Temerloh, Pahang',
      bm: 'No. 13, Jalan Ahmad Shah, Pusat Komersil Temerloh, 28000 Temerloh, Pahang',
      cn: 'No. 13, Jalan Ahmad Shah, Pusat Komersil Temerloh, 28000 Temerloh, Pahang',
    },
    hours: {
      en: '7:00 AM – 7:00 PM (closed Tuesday)',
      bm: '7:00 pagi – 7:00 petang (tutup Selasa)',
      cn: '07:00am – 07:00pm（星期二休息）',
    },
    image:
      '/images/food/sayed-roti-canai.png',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Restoran+Sayed+Mohd+Aziz+Temerloh+roti+canai',
  },
  {
    id: 'yi-fa-roast-pork',
    rank: 10,
    name: {
      en: 'Yi Fa Jin Zhu Roast Pork',
      bm: 'Babi Panggang Yi Fa Jin Zhu',
      cn: '怡发金猪烧肉 Yi Fa Jin Zhu',
    },
    highlight: {
      en: 'Crackling roast pork that sounds as good as it tastes',
      bm: 'Babi panggang rangup — bunyi kriuk bila digigit',
      cn: '咔滋咔滋的香脆烧肉，看照片就流口水',
    },
    description: {
      en: 'Mouth-watering roast pork with an audible crunch — crispy skin and fragrant meat. Call ahead if you want to confirm stock.',
      bm: 'Babi panggang yang membuat lapar — kulit rangup dan daging wangi. Telefon dulu untuk pastikan stok.',
      cn: '只是照片就让人看了流口水的烧肉，吃了还会有咔滋咔滋的声音，可想而知味道有多香脆啊！联络号码：019-9223528',
    },
    cuisine: {
      en: 'Roast meats',
      bm: 'Daging panggang',
      cn: '烧腊',
    },
    mustTry: {
      en: ['Crispy roast pork', 'Siu yuk'],
      bm: ['Babi panggang rangup', 'Siu yuk'],
      cn: ['脆皮烧肉', '金猪'],
    },
    address: {
      en: 'Jerantut, Pahang (call 019-9223528 for location)',
      bm: 'Jerantut, Pahang (hubungi 019-9223528 untuk lokasi)',
      cn: '而连突 · 彭亨（请电 019-9223528 确认地点）',
    },
    hours: {
      en: '10:00 AM – 7:00 PM',
      bm: '10:00 pagi – 7:00 petang',
      cn: '10:00am – 07:00pm',
    },
    image:
      '/images/food/yi-fa-roast-pork.png',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Yi+Fa+Jin+Zhu+Jerantut+roast+pork',
  },
  {
    id: 'ah-hian-bakery',
    rank: 11,
    name: {
      en: 'Ah Hian Bakery',
      bm: 'Kedai Kuih Ah Hian',
      cn: '阿贤の饼屋',
    },
    highlight: {
      en: 'Cakes, egg tarts, kaya puffs & more',
      bm: 'Kek, tart telur, pau kaya & banyak lagi',
      cn: '香蕉蛋糕、蛋挞、加央角、老婆饼等选择丰富',
    },
    description: {
      en: 'Banana cake, pumpkin cake, butter cake, cheese cake, swiss rolls, chiffon, baked buns, kaya puffs, wife cakes, egg tarts and cheese tarts — plenty of choices for gifts or a sweet stop.',
      bm: 'Kek pisang, kek labu, kek butter, cheese cake, swiss roll, chiffon, pau bakar, pau kaya, kuih isteri, tart telur dan tart keju — banyak pilihan untuk hadiah atau minum petang.',
      cn: '这家饼屋有贩售香蕉蛋糕、金瓜蛋糕、牛油蛋糕、cheese cake、蛋糕卷、戚风蛋糕、烧包、加央角、老婆饼、蛋挞及芝士挞，选择非常多！',
    },
    cuisine: {
      en: 'Bakery / cakes',
      bm: 'Bakeri / kek',
      cn: '饼屋 / 蛋糕',
    },
    mustTry: {
      en: ['Banana cake', 'Egg tart', 'Kaya puff'],
      bm: ['Kek pisang', 'Tart telur', 'Pau kaya'],
      cn: ['香蕉蛋糕', '蛋挞', '加央角'],
    },
    address: {
      en: 'No. 11, Jalan Dulang 2, Bandar Baru, 27000 Jerantut, Pahang',
      bm: 'No. 11, Jalan Dulang 2, Bandar Baru, 27000 Jerantut, Pahang',
      cn: 'NO. 11 Jalan Dulang 2, Bandar Baru, 27000 Jerantut, Pahang',
    },
    hours: {
      en: '8:00 AM – 6:00 PM (closed Monday)',
      bm: '8:00 pagi – 6:00 petang (tutup Isnin)',
      cn: '08:00am – 06:00pm（星期一休息）',
    },
    image:
      '/images/food/ah-hian-bakery.png',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Jalan+Dulang+2+Bandar+Baru+Jerantut+bakery',
  },
]

export function getFoodById(id: string): FoodPlace | undefined {
  return foodPlaces.find((item) => item.id === id)
}
