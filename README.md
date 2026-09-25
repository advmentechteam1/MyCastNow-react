# MyCastNow

A React + Tailwind CSS rebuild of the MyCastNow single-file prototype, using Vite for the build tooling. All pages (Home, Discover Talent, Casting Calls, Creator Profile, How It Works, Pricing, FAQ, Contact, Auth, and the generic content pages) are split into their own components, and the three.js hero animation and GSAP page-transition are preserved.

## Project structure

```
mycastnow-react/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx          # React entry point
    ├── index.css         # Tailwind directives + design tokens/custom classes
    ├── App.jsx           # App shell + client-side page switch
    ├── data/
    │   └── content.js    # Nav, page copy, talent + filter data
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── Section.jsx
    │   ├── GenericPage.jsx
    │   └── HeroOrnament.jsx   # three.js wireframe animation
    └── pages/
        ├── Home.jsx
        ├── Discover.jsx       # filters, sorting, talent grid
        ├── Casting.jsx
        ├── HowItWorks.jsx
        ├── Pricing.jsx
        ├── FAQ.jsx
        ├── Contact.jsx
        └── Auth.jsx
```

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Notes

- Routing is a simple in-memory `page` state in `App.jsx` (no react-router), matching the original single-file prototype's navigation model. Swap in `react-router-dom` if you need real URLs/deep-linking.
- Colors, fonts and component styles (`.card`, `.btn-primary`, `.chip`, etc.) live in `src/index.css` as CSS custom properties mapped into `tailwind.config.js`, so you can reskin the whole app by editing the `:root` variables.
- `three` and `gsap` are regular npm dependencies now instead of CDN `<script>` tags.
