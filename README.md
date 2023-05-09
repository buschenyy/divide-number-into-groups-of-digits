# divide-number-into-groups-of-digits
Divide a string number into groups of digits using the given delimiter.
Format integers and decimals.  

The `getFormatNum` and `getFormatNum2` functions take a string `stringNum` as input and divide it into groups of digits using the given separator `separator`. 

## First version `getFormatNum`

1. The function `getFormatNum` first finds the integer part of the number, then uses a regular expression to find the group of digits to divide. 
2. Then it uses the `replace()` method to replace the found groups of digits with the same groups separated by the given delimiter. 
3. The result of the function is a formatted string with groups of digits separated.

## Second version `getFormatNum2`

1. The function `getFormatNum2` starts by determining whether a number has a decimal point by checking whether the original string ends with a dot. 
2. The function then splits the original string into two parts: an integer part and a fractional part, using the `split()` method. 
3. Next, the function formats the integer part of the number using the `replace()` method and a regular expression to insert a `separator` separator between each three digits of the number. 
4. Finally, the function returns a final string consisting of the formatted integer part, a possible decimal part and a period at the end, if there was one in the original string.

### Results
|input  |  output|
|--|--|
|3.| 3. | 
|234432.|234 432.|
|2.32432344|2.32432344|
|-2324.32344| -2 324.32344|
|232432344|232 432 344|
|-23243234|-23 243 234|
|2324323|2 324 323|
|432344|432 344|
|-2344|-2 344|
|2324323.44|2 324 323.44|
|23 243 234.4|23 243 234.4|
|232|232|
|-2324.32344|-2 324.32344|
|232.432344|232.432344|
|123456789|123 456 789|
|-987654321|-987 654 321|
|0.123456789|0.123456789|
|999999999|999 999 999|
|-999999999|-999 999 999 |
