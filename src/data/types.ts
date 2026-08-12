export type Lang = 'en' | 'bm' | 'cn'
export type Theme = 'light' | 'dark'

export type LocalizedString = Record<Lang, string>

export type LocalizedStringList = Record<Lang, string[]>

export interface FoodPlace {
  id: string
  rank: number
  name: LocalizedString
  highlight: LocalizedString
  description: LocalizedString
  cuisine: LocalizedString
  mustTry: LocalizedStringList
  address: LocalizedString
  hours: LocalizedString
  image: string
  mapUrl: string
}

export interface Attraction {
  id: string
  rank: number
  name: LocalizedString
  highlight: LocalizedString
  description: LocalizedString
  whyVisit: LocalizedString
  howToGet: LocalizedString
  bestTime: LocalizedString
  image: string
  mapUrl: string
}

export type ItineraryLink =
  | { type: 'food'; id: string }
  | { type: 'attraction'; id: string }
  | null

export interface ItineraryStep {
  id: string
  time: string
  title: LocalizedString
  tip: LocalizedString
  link: ItineraryLink
}

export interface WeekendPlan {
  saturday: ItineraryStep[]
  sunday: ItineraryStep[]
}

export interface IconicPlace {
  id: string
  title: LocalizedString
  image: string
}

export interface VisitorTip {
  id: string
  title: LocalizedString
  body: LocalizedString
}
