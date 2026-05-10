"use client"

import {
  createContext,
  useContext,
  type ReactNode,
} from "react"
import type { LocalizedDictionary } from "@/lib/locale-dictionary"

const LocaleContext = createContext<LocalizedDictionary | null>(null)

export function LocaleProvider({
  dictionary,
  children,
}: {
  dictionary: LocalizedDictionary
  children: ReactNode
}) {
  return (
    <LocaleContext.Provider value={dictionary}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocaleDictionary() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error("useLocaleDictionary must be used within LocaleProvider.")
  }

  return context
}
