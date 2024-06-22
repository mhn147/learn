## Regex?

A regular language is a formal language that can be epxressed using a regular expression.
A regular expression is a sequence of characters that define a search pattern.

### Use Cases?

Searching/Validating/Replacing a complex string pattern.

* When dealing with regular languges
* Validation
* Replacing
* Splitting strings
* Finding matching patterns

### Bad Use Cases

* A parser already exists
* Too much complexity and not enough maintainability
* Performance bottlenecks

## Definitions

### Metacharacter

A character that has a special meaning to a regular expression engine.

### Quantifiers
A set of metacharacters that specify how many instances of the previous element must be present in the input string in order for a match to occur.

| Quantifier | Description |
| ------------- | ----------- |
| *             | 0 or many occurences of previous character |
| +             | 1 or many occurences of previous character |
| ?             | 0 or 1 occurence of previous character     |

### Character Class

A character class matches any one of a set of characters.

| Class | Description |
| ------------- | ----------- |
| \w            | Matches any word character |
| \W            | Matches any non-word character |
| \d            | Matches any decimal digit     |

### Alternation Constructs

Alternation constructs modify a regular expression to enabled either/or matching.

| Construct | Description | Pattern | Matches | Mismatches |
| --------- | --------- | --------- | --------- | --------- |
| \| | Matches any one element separated by '\|' | "him\|her" | "him", "her" | "they", "them" | 
| (?(expression)(yes\|no) | Matches *yes* if the regex designated by *expression* matches. Otherwise, matches the optional *no* part. The regex engine does not advance the input stream after it evaluates expression.  | "?((\wi\w)him\|her)" | "him", "her" | "they", "them" | 