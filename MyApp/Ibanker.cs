using System;

 internal interface IBanker
    {
        void ApplyInterest();
        void Withdraw(double amount);
        void Deposit(double amount);

        Person Owner { get;  }
        string Number { get;  }
        double Balance { get;  }
        
    }