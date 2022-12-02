using System;
class Saving : Account{
    // : base utiliser dans le cas de parent/enfant des classes
     protected Saving(string number, double balance, double creditLine, Person owner) : base(number, balance, creditLine, owner)
        {

        }
        protected override double CalculInterets()
        {
            return  Balance*0.045;
        }
    
}