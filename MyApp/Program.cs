using System;


// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
// Console.WriteLine("The current time is " + DateTime.Now);

// // int a = 3;

// int a = 5, b , c, d = 4;

// b = 8;
// c = 16;

// bool A = true;

// Console.WriteLine(A);

// Console.WriteLine(a);
// Console.WriteLine(b);
// Console.WriteLine(c);
// Console.WriteLine(d);

// var c3 = (char)65;

// Console.WriteLine(c3);

// class Exemple {
//     int a , b , c, d;
//     void AssignVarA() {
//         int a = 3;
//         this.a =2;
//         bool e;
//         e = true;
//         Console.WriteLine(a);
//         Console.WriteLine(e);


//     }
//     static int RunExemples(){
//         var c = "A";
//         var c1 = "lors";
//         var output = $"premiere {c} deuxieme {c1}";
//         string format = string.Format("premiere {0}deuxieme {1}", c, c1);

//         Console.WriteLine(format);
//         Console.WriteLine(output);
//     }
    
// }



// int a = 2;
// string b = a.ToString();
// Console.WriteLine(b);


// int a = Convert.ToInt32("2");

// Console.WriteLine(a);

// Addition
// int a = Convert.ToInt32("2");
// int b = int.Parse("3");
// Console.WriteLine(a + b);

// Concaténer
// int a = Convert.ToInt32("2");
// int b = int.Parse("3");
// Console.WriteLine("2" + "3");

// Demande d'un input au user
// var reponse = Console.ReadLine();
// Console.WriteLine(reponse + a);

// Forcer l'utilisateur d'utiliser des chiffre
// TO FIX !!!
// int c;
// var reponse = int.TryParse(Console.ReadLine(), out c);

// if (reponse == false){
//     Console.WriteLine("Ce n'est pas un nombre");
// else
//     {
//         Console.WriteLine( "ceci est un nombre");
//     }
// }

// ToFIX
// int nbrDeFichierTotal = 208;
// int nbrFichierCopies = 52;

// float pourcent = (float(100) / nbrDeFichierTotal * nbrFichierCopies);
// Console.WriteLine($"{")



// var r1 = int.Parse(Console.ReadLine());
// var r2 = int.Parse(Console.ReadLine());

// Console.WriteLine(r1 + r2);

// TO FIX
// var r3 = int.TryParse(Console.ReadLine());
// var r4 = int.TryParse(Console.ReadLine());



// Autre exo
// var number = int.Parse(Console.ReadLine());

// if (number % 2 == 0){
//     Console.WriteLine("le nombre est pair");
// }
// else{
//     Console.WriteLine("le nombre est impair");
// }




// var n1 = int.Parse(Console.ReadLine());
// var n2 = int.Parse(Console.ReadLine());

// if (n1 % 2 == 5){
//     Console.WriteLine("le nombre est pair");
// }
// else{
//     Console.WriteLine("le nombre est impair");
// }



// Calcul de la division enière, du modulo et de la division de deux entiers.
// int divisionEntiere = Math.DivRem(n1, n2, out int result);

// int modulo = n1%n2;

// int divisionPlusieursEntiers = n1/n2;

// Console.WriteLine("divisionEntiere" + divisionEntiere);
// Console.WriteLine("modulo" + modulo);
// TO FIX
// Console.WriteLine("Division Entière vaut " + divisionPlusieursEntiers);


// Vérification d'un compte bancaire BBAN, si le compte est bon affichez OK su rla console sinon KO.
// Le modulo des 10 premiers chiffres par 97 donne les 2 derniers. SAuf si le modulo=0 dans
// ce cas les 2 derniers chiffres sont 97. (utilise la méthode SubString de la classe string)
// String.SubString


// string iban = "BE96377063396005";

// Int64 bban = 376663399705;

// string first10 = bban.Substring(0,9);

// if (bban %97 == 0)
// {
//     Console.WriteLine("OK");
// }
// else
// {
//     Console.WriteLine("KO");
// }



// 3. Transformer un compte bancaire BBAN Belge (xxx-xxxxxxx-xx) en 
// IBAN (BExx-xxxx-xxxx-xxxx). 


// for (int i =0; i< 10; i++){
//     Console.WriteLine(i);
// }


// var str = "unstring";

// foreach (var charactere in str){
//     Console.WriteLine(charactere);
// }

// var str = new char[] {'a', 'e', '3', 'a'};
// foreach (var charactere in str){

//     Console.WriteLine(charactere);
// }


// LES BOUCLES

// 1) Calculer les 25 premiers nombres de la suite de Fibonacci

// int[] arrayFibonacci = {0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987};




// LOUIS

// using System;

// class Prog {
//     static void Main(string[] args) {
//         if (args.Length == 2) {
//             if (int.TryParse(args[0], out int n)) {
//                 if (args[1] == "Fibonacci") {
//                     Console.WriteLine(String.Format("Fibonacci : {0}", Fibonacci(n)));
//                 } else if (args[1] == "Factorial") {
//                     Console.WriteLine(String.Format("Factorial : {0}", Factorial(n)));
//                 } else if (args[1] == "IsPrime") {
//                     Console.WriteLine(String.Format("IsPrime : {0}", IsPrime(n) ? "True" : "False"));
//                 } else if (args[1] == "GetNFirstPrimes") {
//                     int[] primes = GetNFirstPrimes(n);
//                     string output = "GetNFirstPrimes : ";
//                     for (int i = 0; i < primes.Length; i++) {
//                         output += primes[i].ToString() + ((i < primes.Length - 1) ? ", " : "");
//                     }
//                     Console.WriteLine(output);
//                 } else if (args[1] == "GetPrimesUntil") {
//                     List<int> primes = GetPrimesUntil(n);
//                     string output = "GetPrimesUntil : ";
//                     for (int i = 0; i < primes.Count; i++) {
//                         output += primes[i].ToString() + ((i < primes.Count - 1) ? ", " : "");
//                     }
//                     Console.WriteLine(output);
//                 }
//             }
//         }
//     }
//     static int Fibonacci(int n) {
//         if (n <= 1) return n;
//         return Fibonacci(n - 1) + Fibonacci(n - 2);
//     }
//     static int Factorial(int n) {
//         if (n == 1) return 1;
//         return n * Factorial(n - 1);
//     }

//     static bool IsPrime(int n) {
//         if (n < 2) return false;
//         for (int i = 2; i < n; i++) {
//             if (n % i == 0) return false;
//         }
//         return true;
//     }

//     static int[] GetNFirstPrimes(int n) {
//         int[] primes = new int[n];
//         int qty = 0;
//         int i = 0;
//         while (qty < n) {
//             if (IsPrime(i)) {
//                 primes[qty] = i;
//                 qty++;
//             }
//             i++;
//         }
//         return primes;
//     }

//     static List<int> GetPrimesUntil(int n) {
//         List<int> primes = new List<int>();
//         for (int i = 0; i < n; i++) {
//             if (IsPrime(i))
//                 primes.Add(i);
//         }
//         return primes;
//     }
// }





// 2) Calculer le factoriel d'un nombre entré au clavier.
// TO FIX
// int f = 1;
// Console.WriteLine("entrez un nombre");
// int.TryParse(Console.ReadLine(), out int nbr);

// for(int i=0; i<=nbr; i++)

//    {
//         f = f * i;
//         Console.WriteLine($" Factorielle de {nbr} {f}\n");
//    }




// 3) Grâce à une boucle <<for>>,, calculez les x premiers nombre premier
// TO FIX

// Console.WriteLine("entrez un nombre premier");
// int.TryParse(Console.ReadLine(), out int nbr);

//  for(int i=0; i<=nbr; i++)
//    {

//    if(nbr%i==0)
//    {
//       Console.WriteLine($" %d est un nombre premier.{nbr}\n");
//    }
//    else
//    {
//       Console.WriteLine($" %d n'est pas un nombre premier.{nbr}\n");
//    }
//  }



// Les collections exercices

// 1) Grâce à une boucle <<while>> et à l'aide dune collection, 
// calculez les nombres premiers inférieur à un nombre entier entré au clavier.

// int i = 1;

// METTRE LA COLLECTION AUSSI
// Console.WriteLine("entrez un nombre ");
// int nbr = int.Parse(Console.ReadLine());

// while (nbr - 1 < nbr) 
// { 
//   if(nbr-1%i==0)
//    {
//       Console.WriteLine($" {nbr} est un nombre premier.\n");
//    }
// }

// 2) Grâce à une boucle <<for>> et à l'aide d'une collection générique, 
// calculez les x premiers nombres premiers.


// int nbr = 0;

// for (int i=0; i<=nbr; i++){

// }



// Les structures
// Exos
// Ecrire deux structures Celsius et Fahrenheit toutes deux ayant 
// une variables température de type "double".

// Temperature = temp;
// temp.celsius = 54;



// struct Temperature {
//    public double celsius;
//    public double fahrenheit;
   
//    public void getValues(double c, double f) {
//       celsius = c;
//       fahrenheit = f;
//    }
   
//    public void display() {
//       Console.WriteLine("Temp en celsius : {0}", celsius);
//       Console.WriteLine("Temp en fahrenheit : {0}", fahrenheit);
//    }
// };  




// Exemple Struct https://www.youtube.com/watch?v=Zx-szQqeBXU

// struct Person{
//    public string name;
//    public string eyeColor;
//    public int age;
// }
// class Program{
//    static void  Main(string[] args){
//       Person Person1;
//       Person1.name = "Daniel";
//    }
// }


// Exemple Enum   https://www.youtube.com/watch?v=Zx-szQqeBXU


public enum ProductCodes{
   Milk = 0,
   Juice = 1,
   Tea = 2
}
class Program{
   static void  Main(string[] args){
      ProductCodes test = ProductCodes.Milk;
      Console.WriteLine((int)test);

      int test2 = 1;
      Console.WriteLine((ProductCodes)test2);


      Console.WriteLine(test.ToString());

      // Convert string to enum
      string test3 = "tea";
      ProductCodes getParse;
      bool checkParse = Enum.TryParse(test3, out getParse);
      Console.WriteLine(getParse);
   }
}

// Les Methodes
// EXO

// 1) Dans les structures Celsius et Fahrenheit, écrire
// la fonction de conversion de l'une vers l'autres.

// Console.WriteLine("C pour Celsius et F pour Fahrenheit");
// string temp = Console.ReadLine();

// Console.WriteLine("entrez un nombre");
// double nbr = int.Parse(Console.ReadLine());


// double celsius = nbr;
// double fahrenheit = nbr;
// if(temp == "c"){
//     double convertCelsius = (fahrenheit / 1.8) - 32;
//     Console.WriteLine($"{fahrenheit}f° vaut {convertCelsius} c°");

// }
// else{
//     double convertFahrenheit = (fahrenheit * 1.8) + 32;
//     Console.WriteLine($"{celsius} vaut {convertFahrenheit} f°");
// }




// LOUIS

// struct Celsius {
//     double v;
//     public Celsius(double t) { // Constructeur
//         this.v = t;
//     }
//     public Fahrenheit ToFahrenheit() {
//         return new Fahrenheit((this.v * (9F / 5)) + 32);
//     }
//     public override string ToString() { // On "écrase" la méthode ToString de base
//         return String.Format("{0}°C", this.v);
//     }
// }




// struct Fahrenheit {
//     double v;
//     public Fahrenheit(double t) { // Constructeur
//         this.v = t;
//     }
//     public Celsius ToCelsius() {
//         return new Celsius((this.v - 32) * (5F / 9));
//     }
//     public override string ToString() { // On "écrase" la méthode ToString de base
//         return String.Format("{0}°F", this.v);
//     }
// }

// class Prog {
//     /*
//         La méthode Main est le point d'entrée du programme. 
//         Lors de l'exécution du programme, les arguments donnés à l'exécutable              seront transférés à la méthode Main sous la forme d'un tableau de string
//         d'ou l'argument : string[] args
//     */
//     static void Main(string[] args) {
//         if (args[0] == "CTOF") {
//             if (double.TryParse(args[1], out double n)) {
//                 Celsius c = new Celsius(n);
//                 Console.WriteLine(String.Format("{0} -> {1}", c, c.ToFahrenheit()));
//             }
//         } else if (args[0] == "FTOC"){
//             if (double.TryParse(args[1], out double n)) {
//                 Fahrenheit c = new Fahrenheit(n);
//                 Console.WriteLine(String.Format("{0} -> {1}", c, c.ToCelsius()));
//             }
//         }
//     }
// }


// Pour utiliser ce code : dotnet run [CTOF/FTOC] [La valeur de température a traduire] 
// CTOF : Celsius TO Fahrenheit
// FTOC : Fahrenheit TO Celsius
// ➜  Struct dotnet run CTOF 18
// 18°C -> 64.39999914169312°F





// 2)Utilisez une fonctions pour calculer les nombres premiers dans 
// les 2 boucles de l'exercice des collections.

// collection initializer.
// var salmons = new List<string> { "chinook", "coho", "pink", "sockeye" };

// for (var index = 0; index < salmons.Count; index++)
// {
//     Console.Write(salmons[index] + " ");
// }



// LOUIS
// class Program
// {
// static void Main(string[] args) // this function defines the entry point
// {
// bool Prime = true;
// Console.WriteLine("Prime Numbers between 1 to 100 : ");

// for (int a = 2; a <= 100; a++) //upper limit and lower limit are defined
// {
//     for (int b = 2; b <= 100; b++)// base logic for the primality
//     {
//         if (a != b && a % b == 0) //modulo operators employed
//         {
//             Prime = false;
//             break;
//         }
//     }

//     if (Prime)
//     {
//         Console.Write("\t" + a); //printing the correct variable
//     }
//     Prime = true;
// }
// Console.ReadKey(); //hold the output screen
// }
// }



// 01-10-2022

// struct Books
// {
//     public string title;
//     public string auteur;
//     public double Temperature;

//     public string subject;
//     public int book_id;
// };



// public class testStructure {
//    public static void Main(string[] args) {
//       Books Book1;   /* Declare Book1 of type Book */
//       Books Book2;   /* Declare Book2 of type Book */

//       /* book 1 specification */
//       Book1.title = "C Programming";
//       Book1.auteur = "Nuha Ali"; 
//       Book1.subject = "C Programming Tutorial";
//       Book1.book_id = 6495407;

//       /* book 2 specification */
//       Book2.title = "Telecom Billing";
//       Book2.auteur = "Zara Ali";
//       Book2.subject =  "Telecom Billing Tutorial";
//       Book2.book_id = 6495700;

//       /* print Book1 info */
//       Console.WriteLine( "Book 1 title : {0}", Book1.title);
//       Console.WriteLine("Book 1 auteur : {0}", Book1.auteur);
//       Console.WriteLine("Book 1 subject : {0}", Book1.subject);
//       Console.WriteLine("Book 1 book_id :{0}", Book1.book_id);

//       /* print Book2 info */
//       Console.WriteLine("Book 2 title : {0}", Book2.title);
//       Console.WriteLine("Book 2 auteur : {0}", Book2.auteur);
//       Console.WriteLine("Book 2 subject : {0}", Book2.subject);
//       Console.WriteLine("Book 2 book_id : {0}", Book2.book_id);       

//       Console.ReadKey();
//    }
// }

// class Demo {
//    enum Vehicle {
//       Car,
//       Motorbike,
//       Truck,
//       Bicycles
//    };
//    static void Main() {
//       // Usig GetName to get the string representation of enum type
//       string res = Enum.GetName(typeof(Vehicle), Vehicle.Motorbike);
   
//       // Displaying
//       Console.WriteLine(res);
//    }
// }

// To FIX
// string s in Enum.GetNames(typeof(Energie));
// var values = Enum.GetNames(typeof(s));
// enum Energie {Essence, Diesel, Gaz, Electricite = 7};



// Voiture
// Décrivez une structure permettant de construire une voiture sur base de valeurs
// présentes dans des énumérations.
// Ensuite, ajoutez lui des méthodes utiles.
// Une fois construite, faites la rouler et affichez son état dans la console.


// class Demo {
//    enum Car {
//       Power = 150,
//       Color,
//       Transmission,
//       Tires
//    };

//     // public int GetCarData()
//     // {
//     //     return Car.Power
//     // }
    



//    static void Main() 
//    {

//     // string colorRed = Car.Color = "red";
//     // string colorBlue = Car.Color = "blue";
//     // Console.WriteLine(colorBlue); 


//     // Usig GetName to get the string representation of enum type
//     string res = Enum.GetName(typeof(Car), Car.Power);
   
//     // Displaying
//     Console.WriteLine(res);
//    }
// }








// SEB VOITURE
// 
// public enum Brands
// {
//     BMW,
//     Audi,
//     Dacia
// }

// public class Car {

//     string model;
//     Brands brand;
//     int power;
//     int wheels;
//     string color;
//     int doors;

//     public Car(string model, Brands brand, int power, int wheels, string color, int doors)
//     {
//         this.model = model;
//         this.brand = brand;
//         this.power = power;
//         this.wheels = wheels;
//         this.color = color;
//         this.doors = doors;
//     }
//     public string Modify(string value, string newValue, string newvalue)
//     {
//         value = value;
//         newvalue = newValue;
//         value = newValue;

//         return value;
//     }
//     public string getCarInfos()
//     {
//         return ($"The model's {model} and the brand's {brand}\n The car has {power} horses, {wheels} wheels, {doors} doors and the color is {color}");
//     }
//     public static void Main(string[] args)
//     {
//         Car car_01 = new Car("Stepway", Brands.Dacia, 100, 4, "Bordeaux", 4);
//         Console.WriteLine(car_01.getCarInfos());
//       //   Console.WriteLine(car_01.Modify(model, "Logan"));
//         Console.WriteLine(car_01.getCarInfos());
//     }
// }











// using System.Enum // 

// namespace App
// {
//    // Type par défaut int, on peut qu'avoir un type intégral (sbyte, short, ulong, ...)
//    public enum Alertlevel
//    {
//       Warning = 0, // par Défaut 0
//       Error = 1,   // par Défaut 1
//       FatalError = 2  // par Défaut 2
//    }
//    class Program
//    {
//       static void Main(string[] args)
//       {
//          // Alertlevel a = Alertlevel.Warning;
//          // Console.WriteLine(a);

         
//          // foreach (string name in Enum.GetName(typeof(Alertlevel))){
//          //    Console.WriteLine(name);
//          // }
//       }
//    }
// }




// HiddenWord

public class Letter {
    private char _value;
    private bool _hidden;
    public Letter(char value) {
        this._value = value;
        this._hidden = (value == ' ') ? false : true;
    }
    public char Value {
        get {
            return this._value;
        }
    }
    public bool Hidden {
        get {
            return this._hidden;
        }
    }
    public bool Unhide() {
        if (!this._hidden) return false;
        this._hidden = false;
        return true;
    }

    public bool Hide() {
        if (this._hidden) return false;
        this._hidden = true;
        return true;
    }
}
public class HiddenWord {
    public List<Letter> value;
    public HiddenWord(string[] words) {
        this.value = new List<Letter>{};
        string word = HiddenWord.PickRandomWord(words);
        foreach (char c in word) {
            this.value.Add(new Letter(c));
        }
    }
    public static string PickRandomWord(string[] words) {
        Random rnd = new Random();
        return words[rnd.Next(0, words.Length)];
    }
    public bool attempt(char c) {
        bool ret = false;
        foreach (Letter l in this.value) {
            if (Char.ToLower(c) == Char.ToLower(l.Value)) {
                if (l.Unhide()) ret = true;
            }
        }
        return ret;
    }
    public bool isFullyUnhidden() {
        foreach (Letter l in this.value) {
            if (l.Hidden) return false;
        }
        return true;
    }
    public override string ToString()
    {
        string ret = "";
        foreach(Letter l in this.value) {
            ret += (l.Hidden) ? "_" : l.Value;
        }
        return ret;
    }
}
class Game {
    public HiddenWord word;
    private int _turn;
    private int _failures;
    private int _successes;
    public Game() {
        word = new HiddenWord(new string[]{
            "Programmation",
            "Espace",
            "De Spiegelaere",
            "Elon Musk",
            "Francois Damien",
            "Ordinateur",
            "Age Of Empire 3",
            "Game Of Thrones",
            "Salle de bain"
            });
        this._turn = 0;
        this._failures = 0;
        this._successes = 0;
    }
    public int Turn {
        get {
            return this._turn;
        }
    }
    public void Play() {
        while (!word.isFullyUnhidden()) {
            Console.Clear();
            Console.WriteLine(String.Format("{0}. MOT CACHE : [{1}]", this._turn, this.word));
            Console.WriteLine("Entrez un caractère : ");
            char input = Console.ReadKey().KeyChar;
            Console.WriteLine();
            if (word.attempt(input)) {
                this._successes++;
                Console.WriteLine("Bravo !");
            } else {
                this._failures++;
                Console.WriteLine("Dommage !");
            }
            this._turn++;
        }
        Console.Clear();
        Console.WriteLine(String.Format("Félicitation, le mot était bien [{0}]. Vous avez trouvé en {1} tour(s)({2}% succes, {3}% echec)", this.word, this._turn, Math.Round(((double)this._successes / this._turn) * 100), Math.Round(((double)this._failures / this._turn) * 100)));
    }
}

class Prog {
    static void Main(string[] args) {
        Game game = new Game();
        game.Play();
    }
}


