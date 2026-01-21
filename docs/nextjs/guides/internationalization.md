
# Internationalization (i18n)

Next.js allows you to configure routing and render content for multiple languages.

## Routing
You can use `middleware.ts` to implement internationalized routing (e.g., `/en/about`, `/fr/about`).

```javascript
// middleware.js
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en-US', 'nl-NL', 'nl']
let defaultLocale = 'en-US'
 
match(languages, locales, defaultLocale) // -> 'en-US'
```

## Localization
Load dictionary files based on the locale segment in the URL.

```javascript
// app/[lang]/page.js
import { getDictionary } from './dictionaries'
 
export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang) 
  return <button>{dict.products.cart}</button> 
}
```
