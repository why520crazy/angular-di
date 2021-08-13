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

        constructor(number: string) {
            this.number = new Number(number);
            this.address = new Address();
        }
    }

    const postalDetails = new PostalDetails('100000');
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
