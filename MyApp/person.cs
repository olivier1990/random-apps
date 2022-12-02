
using System;
    internal class Person 
    {
        public Person(string firstName, string lastName, DateTime birthDate)
        {
            FirstName = firstName;
            LastName = lastName;
            BirthDate = birthDate;
        }
        public string FirstName {get; set;}
        public string LastName {get; set;}
        DateTime BirthDate {get; set;}
    }
