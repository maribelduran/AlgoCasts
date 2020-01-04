// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    //our property will be the name of the event.
    //the values for each property will a list of callback functions
    //to be triggered
    this.event = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }
    this.event[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (!this.event[eventName]) {
      return;
    }
    this.event[eventName].forEach(cb => {
      cb();
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.event[eventName];
  }
}

module.exports = Events;
