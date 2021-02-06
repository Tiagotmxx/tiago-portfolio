// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); //true || false -> true, execute
if (-1 && 0) alert( 'second' );//true && false -> false, no execute
if (null || -1 && 1) alert( 'third' );//&& as higher precedence so: null ||  1 -> true, execute