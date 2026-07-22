class BankAccount {
  constructor(){
    this.balance = 0;
    this.transactions =[];
  }

  deposit(amount){
    if(amount>0){
      this.transactions.push({type: "deposit", amount: amount});

      this.balance = this.balance + amount;

      return `Successfully deposited $${amount}. New balance: $${this.balance}`;

    }

    if(amount<=0){
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount){
    if(amount>0 && amount<=this.balance){
      this.transactions.push({type: "withdraw", amount: amount});

      this.balance= this.balance - amount;

      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance(){
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits(){
    let deposit = this.transactions
    .filter(function(t){
      return t.type === 'deposit';
    })
    .map(function(t){
      return t.amount;
    });
    return `Deposits: ${deposit.join(',')}`;
  }

  listAllWithdrawals(){
    let withdrawals = this.transactions
    .filter(function(t){
      return t.type === "withdraw";
    })
    .map(function(t){
      return t.amount;
    });
    return `Withdrawals: ${withdrawals.join(',')}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(200);
myAccount.withdraw(100);