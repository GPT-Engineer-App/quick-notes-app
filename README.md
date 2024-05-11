# quick-notes-app

# QuickNotes

QuickNotes is a mobile-first application designed to facilitate easy and efficient note-taking and organization, inspired by apps like Google Keep. Its interface is optimized for convenience and simplicity while integrating robust functionalities for a wide range of note-keeping tasks.

## Screens

### Main Screen
The homepage that shows an overview of all the notes categorized by their type (text, lists, images, voice memos).

- **Behavior:** Dynamically displays notes with an option to sort by date, category, or custom tags. Supports search functionality to quickly locate specific notes.
- **Layout:** Clean, grid or list layout with thumbnail previews for notes containing images or checkboxes for lists. 

### Note Detail Screen
Displays the full content of the note, allowing for editing, sharing, and deletion.

- **Behavior:** Enables full editing capabilities including text formatting, attaching images, and adding voice memos. Users can also tag and archive notes from this view.
- **Layout:** Minimally designed editing area with tools accessible through a non-intrusive, expandable toolbar.

## Components

### Navigation Bar
A simple, top-aligned navigation bar that includes a search bar and a button for creating new notes.

- **Behavior:** Users can search notes using keywords or tags. Tapping the ‘New Note’ button prompts a dropdown to select the type of note to be created (text, checklist, image, voice memo).
- **Design:** Light base color with icons and text in black. Highlight features with a vibrant color to indicate active sections or selections.

### Note Item
Thumbnail representation of notes on the Main Screen, showing key information such as the title, part of the content, and images if applicable.

- **Behavior:** Tapping on a note item opens it in the Note Detail Screen. A long press activates multi-selection for bulk actions like delete or archive.
- **Design:** Balanced typography where titles are bold and slightly larger, while the preview content is lighter. Utilize vibrant colors sparingly for tags or priority flags.

### Floating Action Button (FAB)
A prominently displayed button that allows quick creation of new notes.

- **Behavior:** Always visible on the main screen, providing a one-tap action to open the note creation menu.
- **Design:** Standout vibrant color against the light background to make it easily accessible and noticeable for quick actions.

### Sidebar Menu (optional)
A slide-out menu for accessing additional functionalities like Settings, Archive, Tags, and Trash.

- **Behavior:** Accessible via a swipe or tap on a menu icon, containing categorized links for user settings and note categorizations.
- **Design:** Continues the light theme with options listed in black text. Use of vibrant colors to indicate active sections or notifications like unsynchronized notes.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/quick-notes-app.git
cd quick-notes-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
