using System;
using System.Collections.Generic;

internal class Bank{
    // TO FIX
    // Dictionary<stirng;
    // Dictionary = new List<string>();
    // public Dictionary<string, CurrentAccount>Accounts {get; }
    public string? name {get; set;}
    public double CreditLine {get; set;}

    public Dictionary<string, Account> Accounts;

    public void Banks(string name, string Name)
    {
        Accounts = new Dictionary<string, Account>();
        Name = name;
        // Accounts = new Account();
        // Accounts = new Dictionary<string, Int16>();   
    }
    public void AddAccount(Account account)
    {
        Accounts.Add(account.Number, account);
    }
    public void DeleteAccount(string number)
    {
        Accounts.Remove(number);
    }
    
}