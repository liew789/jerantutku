import type { WeekendPlan } from './types'

export const weekendPlan: WeekendPlan = {
  saturday: [
    {
      id: 'sat-1',
      time: '08:00',
      title: {
        en: 'Breakfast — Dim Sum Keong',
        bm: 'Sarapan — Dim Sum Keong',
        cn: '早餐 — 强饱饺点心',
      },
      tip: {
        en: 'Start with 50-year-old handmade bao before the day gets hot.',
        bm: 'Mulakan dengan pau buatan tangan 50 tahun sebelum hari panas.',
        cn: '天气变热前，先来五十多年老字号的手工古早点。',
      },
      link: { type: 'food', id: 'keong-dim-sum' },
    },
    {
      id: 'sat-2',
      time: '09:30',
      title: {
        en: 'Old town murals stroll',
        bm: 'Jalan mural bandar lama',
        cn: '逛旧街壁画',
      },
      tip: {
        en: 'Hunt for Jerantut’s street murals on Jalan Besar Bandar Lama.',
        bm: 'Cari mural Jerantut di Jalan Besar Bandar Lama.',
        cn: '到 Jalan Besar Bandar Lama 找而连突壁画打卡。',
      },
      link: { type: 'attraction', id: 'bandar-lama-murals' },
    },
    {
      id: 'sat-3',
      time: '12:30',
      title: {
        en: 'Lunch — Ah Sai Chicken Rice',
        bm: 'Makan tengah hari — Nasi Ayam Ah Sai',
        cn: '午餐 — 阿西鸡饭',
      },
      tip: {
        en: 'A filling local classic before a nearby temple visit.',
        bm: 'Klasik tempatan yang mengenyangkan sebelum ke kuil berhampiran.',
        cn: '当地经典鸡饭填饱肚子，再到附近观音庙走走。',
      },
      link: { type: 'food', id: 'ah-sai-chicken-rice' },
    },
    {
      id: 'sat-4',
      time: '15:00',
      title: {
        en: 'Guan Yin Temple',
        bm: 'Kuil Guan Yin',
        cn: '而连突观音庙',
      },
      tip: {
        en: 'A nearby temple stop for photos — much closer than Bukit Buloh.',
        bm: 'Perhentian kuil berhampiran untuk foto — jauh lebih dekat berbanding Bukit Buloh.',
        cn: '镇上附近好拍照的观音庙，比红树林近很多。',
      },
      link: { type: 'attraction', id: 'guan-yin-temple' },
    },
    {
      id: 'sat-5',
      time: '17:00',
      title: {
        en: 'Tea — Ah Hian Bakery',
        bm: 'Minum petang — Bakeri Ah Hian',
        cn: '下午茶 — 阿贤の饼屋',
      },
      tip: {
        en: 'Grab egg tarts or banana cake back in town.',
        bm: 'Ambil tart telur atau kek pisang balik ke bandar.',
        cn: '回镇上买蛋挞或香蕉蛋糕当下午茶。',
      },
      link: { type: 'food', id: 'ah-hian-bakery' },
    },
    {
      id: 'sat-6',
      time: '19:30',
      title: {
        en: 'Dinner — Shun Ming river fish',
        bm: 'Makan malam — ikan sungai Shun Ming',
        cn: '晚餐 — 顺明河鱼',
      },
      tip: {
        en: 'End the day with Jerantut’s famous river fish.',
        bm: 'Tamatkan hari dengan ikan sungai terkenal Jerantut.',
        cn: '以而连突著名河鱼收尾。',
      },
      link: { type: 'food', id: 'shun-ming-river-fish' },
    },
    {
      id: 'sat-7',
      time: '21:00',
      title: {
        en: 'Taman I-City lights',
        bm: 'Lampu Taman I-City',
        cn: 'Taman I-City 夜灯',
      },
      tip: {
        en: 'Stroll the park after dark for romantic lights.',
        bm: 'Jalan di taman selepas gelap untuk lampu romantik.',
        cn: '入夜到公园散步看灯光。',
      },
      link: { type: 'attraction', id: 'taman-i-city' },
    },
  ],
  sunday: [
    {
      id: 'sun-1',
      time: '06:30',
      title: {
        en: 'Sunrise — Bukit Seladang',
        bm: 'Matahari terbit — Bukit Seladang',
        cn: '日出 — 而连突神山',
      },
      tip: {
        en: 'About one hour up for a chance at the sea of clouds.',
        bm: 'Kira-kira sejam naik untuk peluang lautan awan.',
        cn: '约一小时登顶，有机会遇见云海。',
      },
      link: { type: 'attraction', id: 'bukit-seladang' },
    },
    {
      id: 'sun-2',
      time: '09:30',
      title: {
        en: 'Breakfast — Spring Garden Dim Sum',
        bm: 'Sarapan — Spring Garden Dim Sum',
        cn: '早餐 — 好景点心',
      },
      tip: {
        en: 'Handmade dim sum after the hike, then head to the park.',
        bm: 'Dim sum buatan tangan selepas mendaki, kemudian ke taman.',
        cn: '下山后来份手工点心，接着出发去国家公园。',
      },
      link: { type: 'food', id: 'spring-garden-dim-sum' },
    },
    {
      id: 'sun-3',
      time: '11:00',
      title: {
        en: 'Taman Negara — half day',
        bm: 'Taman Negara — setengah hari',
        cn: '大汉山国家公园 — 玩半天',
      },
      tip: {
        en: 'Spend half a day here: canopy walk, jungle trails, or a short boat ride. Lunch is easy inside / near the park.',
        bm: 'Luangkan setengah hari: canopy walk, denai hutan, atau bot singkat. Makan tengah hari mudah di dalam / berhampiran taman.',
        cn: '安排半天即可：走吊桥、雨林步道或乘船一小段。午餐可在园内或附近简单解决。',
      },
      link: { type: 'attraction', id: 'taman-negara' },
    },
    {
      id: 'sun-4',
      time: '19:30',
      title: {
        en: 'Dinner — Mei Jie noodles',
        bm: 'Makan malam — mee Mei Jie',
        cn: '晚餐 — 梅姐面档',
      },
      tip: {
        en: 'Back in town — wind down with flour noodles and curry chicken feet.',
        bm: 'Balik bandar — rehat dengan mee tepung dan kaki ayam kari.',
        cn: '回镇上收工：来碗面粉糕，顺便点咖喱鸡脚。',
      },
      link: { type: 'food', id: 'mei-jie-mee' },
    },
  ],
}
