class LatihanCounter {
  constructor() {
      this.value = 0;
  }

  increment() {
      this.value++;
  }

  decrement() {
      this.value--;
  }

  reset() {
      this.value = 0;
  }

  greeting(name) {
      return `Hello, ${name}!`;
  }

  alertMessage(message) {
      alert(message);
  }
}

export default LatihanCounter;
