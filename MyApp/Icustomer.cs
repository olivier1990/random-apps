using System;

internal interface ICustomer
    {
        double Balance { get;  }
        void Withdraw(double amount);
        void Deposit(double amount);
     
    }