![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Brain Test

## A Quick Introduction

Lucus wants to become a neurologist. Well, he is extremely curious in nature & loves to dig deeper into the topic that interests him the most - The Human Brain. His recent obsession has been all about finding if people are left-brained or right-brained or possess a well balanced brain. Although not a firm believer of the concept, Lucas decides to create a brain test and share it with his friends. He is extremely excited to see the test results & use them for his thesis. However, he isn't as good as you at Web development. 

Hence he is kind of stuck and couldn't finish up thing. Why don't you help him fix the issues. May be he would be the best neurologist out there in no time. 

## What should you do
```
Fork this repo
Clone this repo
Practice Java basics - operators, conditions, loops, class and object
```

## How To Submit
```
Upon completion, run the following commands:

git add .
git commit -m "ProGrad ID"
git push origin master

And finally, create a pull request so your ProGrad Mentor (PM) can review your work.
```

## Instructions

1. ***Do not modify the entire code.***
2. ***Edit the code as per the instructions.***
3. ***Go to Java Resources -> src folder.***
4. ***You will have two packages src/controller and src/service.***
5. ***You need to modify src/controller/PersonalityViewController and src/service/PersonalityCalculator.***
6. ***Once the progressions are completed follow the instructions to run the application and test your code.***
 
## Run the Project
1. ***Right - click on the project.***
2. ***Go to Run as -> Run on server.***
3. ***You can check the output in eclipse browser or in your browser.***

## Testing
1. ***Uncomment the code inside Java Resources - src -testing - TestPersonalityCalculator class file.***
2. ***Right - click on the project***
3. ***Go to Run as -> Junit Test.*** 
4. ***All the testcases must be evaluated.***

## Input Format
1. ***There are 20 questions and the answers are stored as a String array.***
2. ***i.e String options = "5,2,3,1,4,3,2,1,5,4,3,2,1,5,4,3,2,1,2,2".***
3. ***String options should be an array of numbers of the type string.***

## Output Format
1 ***Output is a String - rightbrained, leftbrained or noclearpreference***


## Formula to calculate the brain type
```  
A= (Q1)+(Q2)+(Q3)+(Q5)+(Q8)+(Q10)+(Q11)+(Q12)+(Q14)+(Q18)+(Q20) = _____
  
B = (Q4) +(Q6)+(Q7) + (Q9) + (Q13) + (Q15) + (Q16) +(Q17)+ (Q19)  = _____ 
            
X = 66 - _A_ + _B_ =

X is your final score. It should be between 20 and 100. Higher scores indicate more 
right-brained thinking. Lower scores indicate left-brained thinking. If you want to 
categorize yourself, you can use the table below. 

Range Results:
20-55 Left-brained 
56-64 No clear preference 
65-100 Right-brained

```
## Progression - 1 
1. ***Open the class file PersonalityCalculator inside JAVA Resources - src - service.***
2. ***Create a public class called PersonalityCalculator.***

## Progression - 2
1. ***Create a public method called findYourBrainType of type String inside PersonalityCalculator.***
2. ***Your method takes String options as an input and returns a String as output as per the output format specified.***
3. ***Your method should invoke another method findAnswers to convert the options to an integer array.***
4. ***Calculate the braintype as per the formula given.***
5. ***Return the output as a string.***

## Progression - 3
1. ***Create a method called findAnswers of type int[] inside PersonalityCalculator.***
2. ***Your method takes String options as input and returns an array of integers as output.***
3. ***The value of array corresponds to the answers to each questions.***
4. ***findAnswer method is invoked from findYourBrainType method.***
5. ***Return the integer array to findYourBrainType method.***

## Progression - 4
1. ***Create an object for PersonalityCalculator inside Java Resources - src - controller - PersonalityController.***
2. ***Call the findYourBrainType method with the object created.***
3. ***Pass the String options from the doPost method to the findYourBrainType method as argument.***
4. ***Create a String variable as message and Store the return value from findYourBrainType.***
5. ***Pass the message to request.setAttribute("message",message);***


## Bonus Challenge
1. ***Print each answers in the console as per the format given below.***
2. ***Print the total score.***
3. ***Print the brain type in double quotes".***
```
The answer for question - 1 is 3.
Your total score is 54.
You are "left brained"
```
Happy Coding ProGrad ❤️

