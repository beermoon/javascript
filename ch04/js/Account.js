class Account {


    // 생성자
    constructor(bank,id,name,balance) {
        this.bank = bank;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

     // 기능 
      deposit(money) {
        this.balance += money;
     }

     withdraw(money) {
        this.balance -= money;
     }

     show() {
        document.write('<p>');
        document.write('은행명 :  ' + this.bank + '<br>');
        document.write('계좌번호 :  ' + this.id + '<br>');
        document.write('입금주 :  ' + this.name + '<br>');
        document.write('현재잔액 :  ' + this.balance + '<br>');
        document.write('</p>');
     }



}