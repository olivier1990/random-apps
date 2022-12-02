using System;


// Permet la gestion d’un compte courant
internal class CurrentAccount : Account
    {
        public CurrentAccount(string number, double balance, double creditLine, Person owner) : base(number, balance, creditLine, owner)
        {

        }
    protected override double CalculInterets()
        {
            if(Balance >= 0)
                return  Balance * 0.03;
            return  Balance * 0.0975;
        }
    

// Transformer en current et mettre le credit line


    }