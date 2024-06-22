using System.Text.RegularExpressions;

var patterns = new List<string> { @"^\d\d\d-\d\d\d-\d\d\d\d$" };
var inputs = new List<string> 
{
    "5555555555",
    "(555)-555-5555",
    "012-345-5555",
    "012-345-555a",
    "0125-345-5555",
    "012-3455555",
    "000-000-0000",
    "a",
    "5.55-555-5555",
    "...-...-...."
};

patterns.ForEach(p =>
{
    Console.WriteLine($"Regular Expression: {p}");
    var regex = new Regex(p);

    inputs.ForEach(input =>
    {
        Console.WriteLine($"Input: {input}");
        
        var isMatch = regex.IsMatch(input);
        if (!isMatch) return;

        var splits = Regex.Split(input, @"-\d\d\d-").ToList();
        Console.WriteLine($"\t\tArea Code: {splits[0]}.");
        Console.WriteLine($"\t\tLast 4 digits: {splits[1]}.");
    });
});