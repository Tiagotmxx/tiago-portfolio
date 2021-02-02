//What are results of these expressions?

"" + 1 + 0 // 1 WRONG //The addition with a string "" + 1 converts 1 to a string: 
                        //"" + 1 = "1", and then we have "1" + 0, the same rule is applied.
"" - 1 + 0 // -1 In subtraction an empty string converts to 0
true + false //false WRONG // true converts to 1 and false to 0 --> 1+0= 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" //9px
"$" + 4 + 5 //$9 WRONG // $45
"4" - 2 //2
"4px" - 2 //'4px - 2' WRONG // NaN
7 / 0 // Infinity
"  -9  " + 5 // -4 WRONG // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1 null converts to 0
undefined + 1 // ... //NaN undefined converts to NaN
" \t \n" - 2 // ... Space characters, are trimmed off string start and end when a string is converted to a number. 
            //Here the whole string consists of space characters, such as \t, \n 
            //and a “regular” space between them. So, similarly to an empty string, it becomes 0.