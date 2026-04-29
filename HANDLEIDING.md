# Sprint United — Tekst aanpassen

## Voor de klant: tekst aanpassen op de website

### Eenmalig: inloggen

1. Ga naar **https://app.pagescms.org**
2. Klik op **Sign in with GitHub**
3. Log in met het GitHub account dat een uitnodiging heeft gekregen
4. Kies de repository **sponsor** uit de lijst

### Tekst aanpassen

1. Klik in het linker menu op **Website tekst**
2. Vouw de sectie open die je wilt aanpassen (bv. *Hero*, *Over Ons*, *Wanneer & Waar*)
3. Pas de tekst aan in de invulvelden
4. Klik rechtsboven op **Save**

Daarna duurt het ongeveer **1–2 minuten** voordat de wijziging op
**sprintunitedputten.nl** zichtbaar is. Ververs daarna de website (Ctrl+F5).

### Vetgedrukte tekst in alinea's

In de "Over Ons" alinea's kun je woorden vet maken door er twee sterretjes
omheen te zetten:

```
De club is opgericht door **Huib Jansen** in augustus 2025.
```

Wordt op de site:

> De club is opgericht door **Huib Jansen** in augustus 2025.

### Foto's vervangen

1. Klik in het linker menu op **Galerij foto's** of **Hoofdfoto's**
2. Klik op een foto om hem te bekijken
3. Om een foto te vervangen: gebruik **Upload** met **dezelfde bestandsnaam**
   (bv. `team_1.jpg`). De website gebruikt dan automatisch de nieuwe foto.

> ⚠️ Let op: nieuwe foto's met andere bestandsnamen verschijnen pas op de site
> als de developer ze in de code koppelt.

### Iets misgegaan?

Geen paniek — alles staat in GitHub. Stuur een berichtje aan de developer en
elke wijziging is terug te draaien.

---

## Voor de developer: eenmalige setup

Deze stappen zijn al gedaan in deze repository:

- ✅ Tekst geëxtraheerd naar [src/content/site.json](src/content/site.json)
- ✅ Componenten lezen uit dat bestand
- ✅ [.pages.yml](.pages.yml) — schema voor Pages CMS UI
- ✅ [.github/workflows/deploy.yml](.github/workflows/deploy.yml) — auto-build & deploy bij elke push naar `main`

Wat je nog moet doen om het live te krijgen:

### 1. Commit en push

```bash
git add .
git commit -m "Migrate content to Pages CMS"
git push origin main
```

### 2. GitHub Pages instellen

In de GitHub repository → **Settings** → **Pages**:
- Source: **Deploy from a branch**
- Branch: **gh-pages** / **/ (root)**
- Custom domain: `sprintunitedputten.nl` (was waarschijnlijk al ingesteld)

### 3. Werkflow toestemming

In **Settings** → **Actions** → **General** → **Workflow permissions**:
- Selecteer: **Read and write permissions**
- ✅ Allow GitHub Actions to create and approve pull requests

Dit is nodig zodat de deploy workflow naar de `gh-pages` branch kan schrijven.

### 4. Pages CMS koppelen

1. Ga naar **https://app.pagescms.org**
2. Sign in with GitHub
3. **Install the GitHub App** → kies *only this repository* → selecteer `sponsor`
4. Open de repo in Pages CMS — de schema's uit `.pages.yml` worden automatisch herkend

### 5. Klant uitnodigen

In de GitHub repository → **Settings** → **Collaborators** → **Add people**:
- Vul het GitHub-username of e-mailadres van de klant in
- Geef rol **Write** (genoeg om te committen via Pages CMS, niet om settings te wijzigen)

De klant krijgt een uitnodigingsmail. Daarna kan ze inloggen op
`app.pagescms.org` en tekst aanpassen.

### Hoe het werkt

```
Klant bewerkt tekst in Pages CMS
         ↓
Pages CMS commit naar `main` branch
         ↓
GitHub Action draait automatisch (build + deploy)
         ↓
Site live op sprintunitedputten.nl (1–2 min)
```

Je hoeft `npm run deploy` niet meer handmatig te draaien. Je kunt het wel
nog steeds gebruiken voor noodgevallen.

### Lokaal ontwikkelen blijft hetzelfde

```bash
npm run dev    # development server
npm run build  # productie build testen
```
