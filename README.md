# .amatak Language Support

[![Version](https://img.shields.io/badge/version-0.0.5-blue.svg)](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.amatak-language-support)
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

## Welcome to Amatak: The Next Evolution of Python!
We're thrilled to introduce Amatak, a powerful new scripting language that builds upon Python's foundation while taking developer productivity to new heights!

amatak-language/
│
├── amatak/                  # Core language implementation
│   ├── __init__.py
│   ├── lexer.py
│   ├── parser.py
│   ├── interpreter.py
│   ├── nodes.py
│   ├── errors.py
│   ├── utils.py
│   ├── stdlib/              # Standard library
│   │   ├── __init__.py
│   │   ├── math.py          # abs, pow, round, etc.
│   │   ├── strings.py       # lower, upper, substring
│   │   ├── arrays.py        # map, filter, reduce
│   │   ├── objects.py       # Object system
│   │   ├── fileio.py        # readFile, writeFile
│   │   └── async.py         # Promise, fetchData
│   └── runtime/             # Runtime components
│       ├── scope.py         # Variable scoping
│       ├── types.py         # Type system
│       └── memory.py        # Memory management
│
├── examples/                # Example programs
│   ├── hello.amatak         # Basic hello world
│   ├── loops.amatak         # Loop examples
│   ├── functions.amatak     # Function examples
│   ├── file_io.amatak       # File operations
│   ├── objects.amatak       # Object examples
│   └── async.amatak         # Async programming
│
├── tests/                   # Test suite
│   ├── unit/                # Unit tests
│   │   ├── test_lexer.py
│   │   ├── test_parser.py
│   │   ├── test_interpreter.py
│   │   └── test_nodes.py
│   └── integration/         # Integration tests
│       ├── test_stdlib/     # Stdlib tests
│       │   ├── test_math.py
│       │   ├── test_arrays.py
│       │   └── test_fileio.py
│       └── test_features/   # Feature tests
│           ├── test_closures.py
│           └── test_async.py
│
├── docs/                    # Documentation
│   ├── README.md            # Project overview
│   ├── syntax.md            # Language syntax
│   ├── api/                 # API reference
│   │   ├── stdlib.md
│   │   └── runtime.md
│   └── tutorials/           # Tutorials
│       ├── basics.md
│       ├── stdlib.md
│       └── advanced.md
│
├── amatak.py                # Main CLI entry point
├── repl.py                  # Interactive REPL
└── requirements.txt         # Python dependencies

## About Amatak
Amatak is not just another language - it's a natural extension of Python designed to:

Maintain Python's legendary readability and simplicity

Add modern language features developers crave

Offer seamless interoperability with existing Python code

Provide enhanced performance in key areas

Hello World in Amatak
## Getting started is beautifully familiar:


# hello.amatak

`print("Hello, World! Welcome to Amatak!")`

## Current Status
✅ Core language specification complete

✅ Hello World and basic syntax operational

🚧 Standard library under active development

🚧 Package ecosystem being built on our processing servers

## What's Coming
Our team is working hard to deliver:

Full standard library compatibility

Performance-optimized packages

Enhanced concurrency models

Advanced type system extensions

# Join the Journey
As we process and prepare Amatak's libraries and packages on our servers, we invite Python developers everywhere to:

 Experiment with the core language

Share your feedback

Help shape Amatak's future

The next chapter of Python-inspired development starts here!

#Amatak #NextGenPython #HelloWorld

