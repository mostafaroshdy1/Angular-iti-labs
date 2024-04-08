interface IAccount {
    Date_of_opening: Date;
    addCustomer(): void;
    removeCustomer(): void;
}

class Account {
    constructor(public Acc_no: number, public Balance: number) { }
    debitAmount() { }
    creditAmount() { }
    getBalance() { }
}

class Saving_Account extends Account implements IAccount {
    Date_of_opening: Date;
    constructor(public Acc_no: number, public Balance: number) {
        super(Acc_no, Balance);
    }
    addCustomer() { }
    removeCustomer() { }
}

class Current_Account extends Account implements IAccount {
    Date_of_opening: Date;
    constructor(public Acc_no: number, public Balance: number) {
        super(Acc_no, Balance);
    }
    addCustomer() { }
    removeCustomer() { }
}