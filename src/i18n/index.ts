import type { Lang } from '../data/types'
import { bm } from './bm'
import { cn } from './cn'
import { en } from './en'

export type UiStrings = typeof en

const dictionaries: Record<Lang, UiStrings> = { en, bm, cn }

export function getUiStrings(lang: Lang): UiStrings {
  return dictionaries[lang]
}

export function tLocalized(
  value: Record<Lang, string>,
  lang: Lang,
): string {
  return value[lang] ?? value.en
}

export function tLocalizedList(
  value: Record<Lang, string[]>,
  lang: Lang,
): string[] {
  return value[lang] ?? value.en
}
