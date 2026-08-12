import type { IconicPlace, LocalizedString, VisitorTip } from './types'

export const heroImage = '/images/hero-taman-negara.png'

export const historyCopy: LocalizedString = {
  en: 'Jerantut sits in the heart of Pahang as a quiet inland town with a big role: gateway to Taman Negara, one of the oldest tropical rainforests on Earth. Rivers, morning markets, and travellers passing through have shaped its character for generations — a place where everyday town life meets the edge of the jungle.',
  bm: 'Jerantut terletak di jantung Pahang sebagai bandar pedalaman yang tenang tetapi berperanan besar: pintu masuk ke Taman Negara, salah satu hutan hujan tropika tertua di bumi. Sungai, pasar pagi dan pengembara yang lalu-lalang membentuk wataknya selama generasi — tempat kehidupan bandar bertemu tepi hutan.',
  cn: '而连突坐落在彭亨腹地，外表安静，却肩负重要角色：通往地球最古老热带雨林之一——国家公园的门户。河流、早市与过境旅人世代塑造了它的性格——小镇日常与丛林边缘在此相遇。',
}

export const iconicPlaces: IconicPlace[] = [
  {
    id: 'icon-rainforest',
    title: {
      en: 'Rainforest wall',
      bm: 'Dinding hutan hujan',
      cn: '雨林之墙',
    },
    image:
      '/images/attractions/bukit-buloh.png',
  },
  {
    id: 'icon-clouds',
    title: {
      en: 'Morning sea of clouds',
      bm: 'Lautan awan pagi',
      cn: '早晨云海',
    },
    image:
      '/images/attractions/bukit-seladang.png',
  },
  {
    id: 'icon-waterfall',
    title: {
      en: 'Stunning waterfall',
      bm: 'Air terjun menawan',
      cn: '绝美瀑布',
    },
    image:
      '/images/attractions/lata-berembun.png',
  },
  {
    id: 'icon-market',
    title: {
      en: 'Town mornings',
      bm: 'Pagi bandar',
      cn: '小镇清晨',
    },
    image:
      '/images/attractions/bandar-lama-murals.png',
  },
]

export const visitorTips: VisitorTip[] = [
  {
    id: 'tip-season',
    title: {
      en: 'Best time to visit',
      bm: 'Waktu terbaik melawat',
      cn: '最佳造访时间',
    },
    body: {
      en: 'Drier months are kinder for jungle trails and boat rides. Mornings are cooler for walks in town and in the park.',
      bm: 'Bulan lebih kering lebih sesuai untuk denai dan bot. Pagi lebih sejuk untuk berjalan di bandar dan di taman.',
      cn: '较干燥的月份更适合徒步与乘船。早晨在镇上或公园散步更凉爽。',
    },
  },
  {
    id: 'tip-cash',
    title: {
      en: 'Cash & connectivity',
      bm: 'Tunai & rangkaian',
      cn: '现金与通讯',
    },
    body: {
      en: 'ATMs are easier to find in Jerantut town than deeper toward the park. Keep some cash for stalls and small operators.',
      bm: 'ATM lebih mudah di bandar Jerantut berbanding jauh ke arah taman. Sediakan wang tunai untuk gerai dan pengusaha kecil.',
      cn: '而连突镇上比靠近公园处更容易找到提款机。小摊与小型业者建议备些现金。',
    },
  },
  {
    id: 'tip-taman',
    title: {
      en: 'Taman Negara day tip',
      bm: 'Tip hari ke Taman Negara',
      cn: '国家公园一日贴士',
    },
    body: {
      en: 'Start early from Jerantut, plan your Kuala Tahan transfer, and book popular activities (canopy, night walk) ahead when you can.',
      bm: 'Berangkat awal dari Jerantut, rancang transfer ke Kuala Tahan, dan tempah aktiviti popular (kanopi, jalan malam) lebih awal jika boleh.',
      cn: '而连突尽量早出发，规划好往瓜拉打汉的接驳，热门活动（树冠步道、夜行）能预订就先订。',
    },
  },
]
