const { createConnection, TextDocuments, ProposedFeatures } = require('vscode-languageserver/node');
const { TextDocument } = require('vscode-languageserver-textdocument');

// Create a connection for the server
const connection = createConnection(ProposedFeatures.all);

// Create a text document manager
const documents = new TextDocuments(TextDocument);

// Listen for text document events
documents.onDidChangeContent((change) => {
  validateDocument(change.document);
});

// Validate the document (e.g., check for errors)
function validateDocument(textDocument) {
  const text = textDocument.getText();
  const diagnostics = [];

  // Example: Check for missing semicolons
  const lines = text.split('\n');
  lines.forEach((line, lineNumber) => {
    if (line.trim() && !line.endsWith(';')) {
      diagnostics.push({
        severity: 2, // Error
        range: {
          start: { line: lineNumber, character: 0 },
          end: { line: lineNumber, character: line.length }
        },
        message: 'Missing semicolon',
        source: 'amatak'
      });
    }
  });

  // Send the diagnostics to VS Code
  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

// Start the server
connection.onInitialize(() => {
  return {
    capabilities: {
      textDocumentSync: documents.syncKind,
      completionProvider: {
        resolveProvider: true
      },
      hoverProvider: true
    }
  };
});

// Listen for completion requests
connection.onCompletion((textDocumentPosition) => {
  return [
    { label: 'print', kind: 1, detail: 'Print a message' },
    { label: 'let', kind: 14, detail: 'Declare a variable' }
  ];
});

// Listen for hover requests
connection.onHover((textDocumentPosition) => {
  return {
    contents: 'This is a .amatak file. Welcome to the language server!'
  };
});

// Start listening for messages
documents.listen(connection);
connection.listen();