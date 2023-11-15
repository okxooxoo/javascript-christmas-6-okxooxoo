import EventPlanner from './EventPlanner.js';

class App {
  async run() {
    const eventPlanner = new EventPlanner();
    await eventPlanner.initialize();
    eventPlanner.play();
  }
}

export default App;
