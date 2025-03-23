const vscode = require('vscode');
const { LanguageClient, TransportKind } = require('vscode-languageclient/node');
const { AmatakDebugAdapterDescriptorFactory } = require('../debug/debugAdapter');

// Declare the client variable globally
let client;

function activate(context) {
  // Register the debug adapter descriptor factory
  context.subscriptions.push(
    vscode.debug.registerDebugAdapterDescriptorFactory('amatak', new AmatakDebugAdapterDescriptorFactory())
  );

  // Start the language server
  const serverModule = context.asAbsolutePath('server/server.js');

  client = new LanguageClient(
    'amatakLanguageServer',
    'Amatak Language Server',
    {
      run: { module: serverModule, transport: TransportKind.ipc },
      debug: { module: serverModule, transport: TransportKind.ipc }
    },
    {
      documentSelector: [{ scheme: 'file', language: 'amatak' }],
      synchronize: {
        fileEvents: vscode.workspace.createFileSystemWatcher('**/*.amatak')
      }
    }
  );

  // Start the language client
  client.start();
}

function deactivate() {
  // Stop the language client if it exists
  if (client) {
    return client.stop();
  }
}

// Export the activate and deactivate functions
module.exports = {
  activate,
  deactivate
};