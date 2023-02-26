class GuessingGame {
    constructor() {
        this.result
        this.max
        this.min
    }

    setRange(min, max) {
        this.min = min
        this.max = max
        this.result = (this.max - this.min)/2
    }

    guess() {
        this.result = (this.max - this.min)/2
        return Math.round(this.min + this.result)
    }

    lower() {
       this.max = Math.round(this.max - this.result)
    }

    greater() {
       this.min = Math.round(this.min + this.result)
    }
}

module.exports = GuessingGame;
