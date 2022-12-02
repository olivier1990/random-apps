using System;
internal abstract class Account : IBanker , ICustomer{
    // string Number {get; set;}
    // double Balance{get; set;} 
    // double CreditLine {get; set;}

    // Person Owner;

// Constructeur
protected Account(string number, double balance, double creditLine, Person owner)
        {
            Number = number;
            _balance = balance;
            CreditLine = creditLine;
            Owner = owner;
        }
        private double _balance;

        public string Number { get; set; }
        public double Balance { get => _balance;  }
        public double CreditLine { get; set; }
        public Person Owner { get;  }
        
        
        public void Withdraw(double amount)
        {
            _balance -= amount;
            try
            {
                if (amount <= 0)
                {
                    throw new Exception("InsufficientBalanceException");
                }
                Console.WriteLine("Vous venez de retirer la somme de " + amount + "€");
            }
            catch (Exception e)
            {
                Console.WriteLine("M'enfin ! " + e.Message);
            }
        }

        public void Deposit(double amount)
        {
            _balance += amount;

            
            try
            {
                if (amount < 0)
                {
                    throw new Exception("ArgumentOutOfRangeException");
                }
                Console.WriteLine("Vous venez de déposer la somme de " + amount + "€");
            }
            catch (Exception e)
            {
                Console.WriteLine("M'enfin ! " + e.Message);
            }
        }


        protected abstract double CalculInterets();

        public void ApplyInterest()
        {
            _balance += CalculInterets();
        }




}






