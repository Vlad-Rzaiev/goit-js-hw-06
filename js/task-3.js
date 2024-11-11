class StringBuilder {
  #value;

  constructor(params) {
    this.#value = params;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    return (this.#value = this.#value + str);
  }

  padStart(str) {
    return (this.#value = str + this.#value);
  }

  padBoth(str) {
    return (this.#value = str + this.#value + str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
