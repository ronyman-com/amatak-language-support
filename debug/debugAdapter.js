const vscode = require('vscode');
const { DebugAdapterDescriptorFactory, DebugSession } = require('vscode-debugadapter');

class AmatakDebugAdapterDescriptorFactory {
  createDebugAdapterDescriptor(session, executable) {
    return new vscode.DebugAdapterExecutable('node', [session.workspaceFolder + '/debug/debugServer.js']);
  }
}

class AmatakDebugSession extends DebugSession {
  initializeRequest(response, args) {
    response.body = {
      supportsConfigurationDoneRequest: true,
      supportsEvaluateForHovers: true
    };
    this.sendResponse(response);
  }

  configurationDoneRequest(response, args) {
    this.sendResponse(response);
  }

  launchRequest(response, args) {
    this.sendResponse(response);
  }
}

module.exports = {
  AmatakDebugAdapterDescriptorFactory,
  AmatakDebugSession
};