/* ASSIGNMNET:
-Implement an alarm clock / timer which will beep after a specified amount of 
time has passed. 

-The user can specify an unlimited number of alarms using command line 
arguments. 
*/

const cl = process.argv.slice(2);

const timer = function(seconds) {
  let index = seconds * 1000;

  if (!isNaN(seconds) && seconds > 0) {

    setTimeout(() => {
      process.stdout.write('\x07');
    }, index);
  } else {
    process.stdout.write("Error: Incorrect Input \n");
  }
};

for (let i = 0; i < cl.length; i++) {
  timer(cl[i]);
}


/* STEPS:

Command Line Input > node timer1.js 1 2 3

-a var name cl (command line) is set equal to the value of process.argv (this alows us to take args from the computers
commandline) furhtermore var cl is the spliced of section of the cl input from index 2 forward,
NOTE: the spilce is set at index 2 becuase process.argv returns file location and file name 
as its first 2 array elements and we do not need that info

-cl is now: [1 2 3]
-we jump down to Line20 where a for loop cycles through the cl array, for each loop we put the current element 
value into the timer func as its seconds arg.

-we jump to Line 11 where the timer functin takes our array element arg of 1 (first element)
-within the func a new variable named index is equal to our arg value X 1000miliseconds
-index now equals 1000 miliseconds (1 x 1000)

-we jump to Line14 and enter the setTimeout func which runs a code that makes a beep on our computer after a set period of time.
-the set period of time is based of the new value of index (1000miliseconds)

-after we exit setTimeout func we go back to the loop which increments by plus one arg element each loop.
-we start again with the next element in line (2) and run through the same process until we meet our loops stop condition.
*/

