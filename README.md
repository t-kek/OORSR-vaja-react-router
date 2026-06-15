# Športne aktivnosti

Preprosta React vaja za pripravo na izpit. Namen aplikacije je vaditi delo s komponentami, obrazci, stanjem aplikacije in navigacijo med stranmi.

## Opis naloge

Izdelaj spletno aplikacijo za beleženje športnih aktivnosti.

Na domači strani naj bo prikazan seznam vseh športnih aktivnosti. Vsaka aktivnost naj bo prikazana kot kartica oziroma element seznama, ki vsebuje vsaj:

- naziv ali vrsto športa,
- sliko športa,
- datum izvedbe,
- kratek komentar.

Ob kliku na posamezno aktivnost se odpre stran s podrobnostmi. Na njej naj bodo prikazane vse informacije o izbrani aktivnosti, vključno s podrobnejšim opisom.

Aplikacija naj vsebuje tudi ločeno stran z obrazcem za dodajanje nove športne aktivnosti. Vrsta športa naj se izbere iz spustnega seznama (`select` oziroma `dropdown`). Po uspešnem dodajanju naj se nova aktivnost prikaže na domači strani.

## Tehnične zahteve

- React
- TypeScript
- Vite
- React Router DOM za navigacijo
- MUI oziroma Material UI za uporabniški vmesnik
- upravljanje skupnega stanja z dvigovanjem stanja v nadrejeno komponento (`lifting state up`)

Podatki so lahko za namen vaje shranjeni samo v stanju aplikacije. Povezava z bazo podatkov ali strežnikom ni potrebna.

## Ustvarjanje projekta

```bash
npm create vite@latest sportne-aktivnosti -- --template react-ts
cd sportne-aktivnosti
npm i
```

Namestitev dodatnih knjižnic:

```bash
npm install react-router-dom
npm install @mui/material @emotion/react @emotion/styled
```

Zagon projekta:

```bash
npm run dev
```

## Namen vaje

Pri nalogi vadiš predvsem:

- razdelitev aplikacije na komponente,
- podajanje podatkov prek `props`,
- delo z `useState`,
- dodajanje novih elementov v seznam,
- prikaz podrobnosti glede na parameter v URL-ju,
- navigacijo z React Routerjem,
- izdelavo obrazca in uporabo MUI komponent.