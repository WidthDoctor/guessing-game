class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.smallNum = min;
      this.bigNum = max;
    }

    guess() {
      return  Math.round((this.smallNum + this.bigNum)/2);
    }

    lower() {
      this.bigNum = this.guess()
    }

    greater() {
      this.smallNum = this.guess()
    }
}

module.exports = GuessingGame;
