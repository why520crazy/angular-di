namespace NoDI {
    class Number {
        constructor(number: string) {}
    }

    class Address {
        constructor() {}
    }

    class PostalDetails {
        number!: Number;
        address!: Address;

        constructor() {
            this.number = new Number('100000');
            this.address = new Address();
        }
    }
}

namespace DI {
    class Number {
        constructor(number: string) {}
    }

    class Address {
        constructor() {}
    }

    class PostalDetails {
        constructor(private number: Number, private address: Address) {}
    }
}

