console.log("Hello world")

function test(a, b) {
    return a + b;
}

function estPalindrome(chaine)
{
    let inverse = inverseChaine(chaine);

    if(chaine === inverse)
    {
        console.log(chaine + " est un palindrome");
    }
    console.log(chaine + " n'est pas un palindrome");
}

function inverseChaine(chaine)
{
    let chaineInverse;

    for(let i=chaine.length; i >= 0; i--)
    {
        chaineInverse += chaine[i];
    }
    return chaineInverse;
}

function imprimerN1a100()
{
    for(let i = 1; i<= 100; i++)
    {
        if(Number.isInteger(i/5) && Number.isInteger(i/3))
        {
            console.log("FizzBuzz\n");
        }
        else if(Number.isInteger(i/3))
        {
            console.log("Fizz\n");
        }
        else if(Number.isInteger(i/5))
        {
            console.log("Buzz\n");
        }
        else
        {
            console.log(i+"\n");
        }
    }
}

function afficherFibonacci(nb)
{
    let f = [];

    f[0] = 0;
    f[1] = 1;

    for (let i = 2; i < nb; i++) 
    {
      f[i] = f[i - 2] + f[i - 1];
    }
    console.log(f);      
}

function trierTable(table)
{
    for (let passe = table.length - 1; passe > 0 ; passe--)
    {
        for (let i = table.length - 1; i > 0 ; i--)
        {
            if (table[i] > table[i - 1])
            {
                let temp = table[i];
                table[i] = table[i-1];
                table[i-1] = temp;
            }
        }
    }
    console.log(table);
}

function calculerNbJour(date1,date2)
{
    
}


trierTable([5,4,81,1,6,7,10,0,8,3,88,94,2,45,15])
afficherFibonacci(10);
estPalindrome("alla");
estPalindrome("Anticonstitutionnelement")
imprimerN1a100();

