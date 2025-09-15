# Projekttage App

## Übersicht
Die Projekttage App ist eine Webanwendung, die das Projektmanagement für Schulprojekte erleichtert. Sie ermöglicht Lehrern, Projekte zu erstellen, zu verwalten und einzusehen, während Schüler diese Projekte durchsuchen und sich dafür anmelden können. Die Anwendung umfasst eine Authentifizierung für Lehrer und Schüler.

## Projektstruktur
Das Projekt ist in zwei Hauptteile unterteilt: das Backend und das Frontend.

### Backend
- **Controller**: Behandeln die Geschäftslogik für Authentifizierung, Projektmanagement und Schülerverwaltung.
  - `authController.ts`: Funktionen für Benutzeranmeldung und -registrierung.
  - `projectController.ts`: Funktionen für die Verwaltung von Projekten (CRUD-Operationen).
  - `pupilController.ts`: Funktionen für die Verwaltung von schülerbezogenen Operationen.
  
- **Modelle**: Definieren die Datenstrukturen, die in der Anwendung verwendet werden.
  - `project.ts`: Projektmodell mit Eigenschaften wie Titel, Lehrer, Jahrgangsstufen und Teilnehmer.
  - `pupil.ts`: Schülermodell mit Eigenschaften wie Name, E-Mail und gewählte Projekte.
  - `teacher.ts`: Lehrermodell mit Eigenschaften wie Name, E-Mail und Passwort.

- **Routen**: Definieren die API-Endpunkte der Anwendung.
  - `authRoutes.ts`: Routen für die Authentifizierung.
  - `projectRoutes.ts`: Routen für das Projektmanagement.
  - `pupilRoutes.ts`: Routen für die Schülerverwaltung.

- **Middleware**: Enthält Funktionen zum Schutz von Routen und zur Sicherstellung der Authentifizierung.
  - `auth.ts`: Middleware für den Routenschutz.

- **Datenbank**: Verwaltet die Datenbankverbindung und -konfiguration.

- **Server**: Einstiegspunkt der Anwendung, der den Express-Server einrichtet.

### Frontend
- **Public**: Enthält die HTML-Dateien der Anwendung.
  - `index.html`: Haupt-HTML-Datei.
  - `lehrer.html`: Lehreroberfläche zur Verwaltung von Projekten.
  - `schüler.html`: Schüleroberfläche zur Ansicht und Anmeldung bei Projekten.
  - `login.html`: Login-Oberfläche für Lehrer und Schüler.

- **Src**: Enthält JavaScript- und CSS-Dateien.
  - **JS**: JavaScript-Dateien zur Handhabung von Interaktionen.
    - `lehrer.js`: Funktionen für Lehrerinteraktionen.
    - `schüler.js`: Funktionen für Schülerinteraktionen.
    - `login.js`: Funktionen für die Benutzeranmeldung.
  - **CSS**: Stile für die Frontend-Anwendung.

## Funktionen
- **Benutzerauthentifizierung**: Sowohl Lehrer als auch Schüler können sich anmelden, um auf ihre jeweiligen Funktionen zuzugreifen.
- **Projektmanagement**: Lehrer können Projekte hinzufügen, aktualisieren und löschen sowie Schüler einsehen, die sich für jedes Projekt angemeldet haben.
- **Projektübersicht**: Schüler können verfügbare Projekte durchsuchen und sich dafür anmelden.

## Erste Schritte
1. Klonen Sie das Repository.
2. Navigieren Sie in das Backend-Verzeichnis und installieren Sie die Abhängigkeiten:
   ```
   cd backend
   npm install
   ```
3. Richten Sie die Datenbankverbindung in `db.ts` ein.
4. Starten Sie den Backend-Server:
   ```
   npm start
   ```
5. Navigieren Sie in das Frontend-Verzeichnis und installieren Sie die Abhängigkeiten:
   ```
   cd frontend
   npm install
   ```
6. Öffnen Sie die Datei `public/index.html` in einem Webbrowser, um auf die Anwendung zuzugreifen.

## Zukünftige Verbesserungen
- Implementierung eines Bewertungssystems, mit dem Schüler Projekte bewerten können.
- Verbesserung der Benutzeroberfläche für eine bessere Benutzerfreundlichkeit.
- Hinzufügen detaillierterer Projektbeschreibungen und -bilder.

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert.