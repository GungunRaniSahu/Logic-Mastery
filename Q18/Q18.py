# Count the number of occurrences of a character in a string.

def count_occurrences(s, char):
    count = 0
    for c in s:
        if c == char:
            count += 1
    return count


s = "hello world"
char = "l"
print(count_occurrences(s, char)) 