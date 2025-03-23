const { DebugSession } = require('vscode-debugadapter');

class AmatakDebugServer extends DebugSession {
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

const server = new AmatakDebugServer();
server.start();