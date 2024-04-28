using System.Text.RegularExpressions;

var patterns = new List<string> { "a*b", "a+b", "a?b" };
var inputs = new List<string> { "a", "b", "ab", "aab", "abb" };

patterns.ForEach(p =>
{
    Console.WriteLine($"Regular Expression {p}");
    var regex = new Regex(p);

    inputs.ForEach(input =>
    {
        Console.WriteLine($"Input {input}");
        var matches = regex.Matches(input);
        if (matches.Count <= 0)
            Console.WriteLine("\t\tNo matches found.");
        foreach (Match match in matches)
            Console.WriteLine($"\t\tMatch found at index {match.Index}. Length: {match.Length}.");
    });
});