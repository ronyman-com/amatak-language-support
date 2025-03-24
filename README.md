# .amatak Language Support

[![Version](https://img.shields.io/badge/version-0.0.4-blue.svg)](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.amatak-language-support)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A Visual Studio Code extension that provides syntax highlighting, language server support, and debugging for `.amatak` files.

---

## Features

- **Syntax Highlighting**: Provides syntax highlighting for `.amatak` files.
- **Language Server Support**: Offers auto-completion, error checking, and hover information.
- **Debugging Support**: Enables debugging for `.amatak` scripts.
- **Commands**: Adds commands for running `.amatak` scripts.

---

## Installation

1. Open **Visual Studio Code**.
2. Go to the **Extensions** view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for `.amatak Language Support`.
4. Click **Install** to install the extension.

Alternatively, you can install the extension manually:
1. Download the `.vsix` file from the [Releases](https://github.com/ronyman-com/amatak-language-support/releases) page.
2. Open VS Code and go to **Extensions** → **Views and More Actions** (⋯) → **Install from VSIX**.
3. Select the downloaded `.vsix` file to install the extension.

---

## Usage

### Syntax Highlighting
Open any `.amatak` file, and the extension will automatically provide syntax highlighting.

### Language Server Features
- **Auto-completion**: Get suggestions while typing.
- **Error Checking**: See errors and warnings in real-time.
- **Hover Information**: Hover over code to see additional information.

### Debugging
1. Open a `.amatak` file.
2. Set breakpoints in your code.
3. Press `F5` to start debugging.

### Commands
- **Run .amatak Script**: Run the active `.amatak` file using the command `amatak.run`.

---

## Configuration

The extension provides the following configuration options:

- **Enable/Disable Language Server**: Toggle the language server on or off.
  ```json
  "amatak.languageServer.enabled": true

amatak-language-support/\
├── icon.png\
├── .vscode/\
│   └── launch.json\
├── server/\
│   ├── server.js\
│   └── package.json\
├── debug/\
│   ├── debugAdapter.js\
│   └── debugServer.js\
├── syntaxes/\
│   └── amatak.tmLanguage.json\
├── snippets/\
│   └── amatak.json\
├── language-configuration.json\
├── package.json\
├── README.md\
└── CHANGELOG.md


