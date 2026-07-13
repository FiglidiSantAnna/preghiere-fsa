# Preghiere FSA — come metterla online

*Guida per chi pubblica l'app. Va fatta una volta sola.*

---

## Cosa c'è in questa cartella

| File | A cosa serve |
|---|---|
| `index.html` | L'app intera: preghiere, Vademecum, pensieri, immagini. Tutto dentro un solo file. |
| `manifest.json` | Dice al telefono come si chiama l'app, che icona ha, che colori usa. |
| `sw.js` | Il *service worker*: fa funzionare l'app **anche senza internet**. |
| `icons/` | L'emblema dell'Istituto in tutte le misure che i telefoni richiedono. |

**Vanno caricati tutti e quattro insieme, nella stessa cartella.** Se ne manca uno, l'app non si installa.

---

## Perché serve un indirizzo web

Un file HTML mandato per WhatsApp si può *aprire*, ma non si può *installare*. iPhone non lo permette proprio; Android lo fa male. Perché il telefono la riconosca come una vera app — con la sua icona, a schermo intero, e funzionante offline — i file devono stare su un **indirizzo web sicuro** (`https://…`).

Serve una volta sola. Poi l'indirizzo si manda ai confratelli e loro installano in dieci secondi.

---

## Tre modi per pubblicarla

### 1. Sul sito dell'Istituto (il migliore, se ne avete uno)

Chiedi a chi gestisce il sito di caricare i quattro file in una cartella, per esempio:

```
https://www.figlidisantanna.org/preghiere/
```

Dev'essere `https://` (non `http://`), altrimenti l'installazione non funziona. Oggi praticamente tutti i siti lo sono già.

### 2. GitHub Pages (gratuito, per sempre)

Non serve saper programmare.

1. Vai su **github.com** e crea un account (gratis).
2. Clicca **New repository**, chiamalo `preghiere-fsa`, mettilo **Public**, e crea.
3. Clicca **uploading an existing file** e trascina dentro: `index.html`, `manifest.json`, `sw.js` e la **cartella** `icons`.
4. Clicca **Commit changes**.
5. Vai su **Settings → Pages**. Sotto *Branch* scegli `main` e `/ (root)`, poi **Save**.
6. Aspetta un paio di minuti: in cima alla pagina comparirà l'indirizzo, tipo

   `https://tuonome.github.io/preghiere-fsa/`

Quello è l'indirizzo da mandare ai confratelli.

### 3. Netlify Drop (il più veloce di tutti)

1. Vai su **app.netlify.com/drop**
2. Trascina **l'intera cartella** `PreghiereFSA_PWA` nella pagina.
3. In pochi secondi ti dà un indirizzo pronto. Puoi personalizzarlo dalle impostazioni.

Non serve nemmeno registrarsi per provare.

---

## Verificare che funzioni

Apri l'indirizzo dal telefono:

- Su **Android**, dopo qualche secondo deve comparire in basso il bottone dorato **«Installa Preghiere FSA»**, oppure la voce *Installa app* nel menu del browser.
- Su **iPhone**, apri con **Safari** (non Chrome) e usa *Condividi → Aggiungi a Home*.

Se il bottone non compare su Android, quasi sempre è perché l'indirizzo non è `https://` oppure manca uno dei quattro file.

---

## Quando aggiornerai l'app

Quando ci saranno testi nuovi o correzioni, ricarica il nuovo `index.html` al posto del vecchio e **cambia una cifra** dentro `sw.js`, alla prima riga:

```js
const CACHE="preghiere-fsa-v1";   →   const CACHE="preghiere-fsa-v2";
```

Serve a dire ai telefoni: «c'è una versione nuova, scaricala». Senza questo, chi ha già installato l'app continuerebbe a vedere la vecchia.

---

## Nota sull'uso senza internet

Al primo avvio l'app si scarica per intero (circa 9 MB) e da quel momento **funziona sempre**, anche in aereo, anche in una casa senza connessione, anche in missione. È pensata così apposta.
