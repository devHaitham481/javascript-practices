interface RuleInterface {
  matches(number: number): boolean;
  getReplacement(): string;
}

// when we want to generate or do something according to a set of rules,
// it is always a good idea to introduce a RuleInterface as such:

class FizzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0;
  }

  getReplacement(): string {
    return "Fizz";
  }
}

class BuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 5 === 0;
  }

  getReplacement(): string {
    return "Buzz";
  }
}

class FizzBuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0 && number % 5 === 0;
  }

  getReplacement(): string {
    return "FizzBuzz";
  }
}

class FizzBuzz {
  rules: RuleInterface[] = [];

  /*
    one rule can be : 
    { 
        matches: (number: number) => number % 5 === 0, 
        getReplacement: () => return 'WhateverBuzz'
    }

  */
  addRule(rule: RuleInterface) {
    this.rules.push(rule);
  }

  generate(number: number) {
    const output: string[] = [];

    for (let i = 1; i <= number; i++) {
      output.push(this.getReplacement(i));
    }

    return output;
  }

  getReplacement(number: number): string {
    for (const rule of this.rules) {
      if (rule.matches(number)) {
        return rule.getReplacement();
      }
    }
    return String(number);
  }
}

const fizBuzz = new FizzBuzz();

fizBuzz.addRule(new FizzBuzzRule());
fizBuzz.addRule(new FizzRule());
fizBuzz.addRule(new BuzzRule());

const result = fizBuzz.generate(20);
