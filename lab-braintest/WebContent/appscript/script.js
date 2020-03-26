
const questions = [
  {
    "question": "I do not expect to be praised by others.",
   
  },
  {
    "question": "I like sitting in the Math class rather than sitting in the Pottery class (I am vividly imaginative & I enjoy classes where I can move around and try things).",
 
  },
  {
    "question": "I always show up in/on time.",

  },
  {
    "question": "I do not care to read to the instructions before I start putting something together, I like learning along the way.",

  },
  {
    "question": "I am tidy and organized and cannot live in a mess.",

  },
  {
    "question": "My thinking is random & unstructured.",

  },
  {
    "question": "I am an effective communicator",
 
  },
  {
	    "question": "I can picture things clearly in my head.",

	  },
	  {
		    "question": "I often come up with new ideas.",
		
		  },
		  {
			    "question": "I am not easily disturbed by events.",
			   
			  },
		  {
			    "question": "I rarely cry while watching sad movies or incidents.",
			
			  },
			  {
			    "question": "I am good at laying out a step-by-step plan.",
			  
			  },
			  {
			    "question": "I am the happiest when I am creating or expressing myself.",
			    
			  },
			  {
			    "question": "I make decisions based on facts, not feelings. (I like info that is precise and measurable).",
		
			  },
			  {
			    "question": "I make a mess of things.",
		
			  },
			  {
			    "question": "I get stressed out easily.",
		
			  },
			  {
			    "question": "I like fantasy and make believe.",
		
			  },
			  {
				    "question": "I prize logic above all else. (For something to be credible, it needs to be logical).",
			
				  },
				  {
					    "question": "I often forget to put things back in their proper place.",
				
					  },
					  {
						    "question": "I keep my feelings controlled.",
					
						  }
]

let currentQuestion = 0;
const form=document.getElementById("myForm");
const totalQuestions =questions.length;
const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');

const answers=document.getElementsByName("option");
const hiddenSelectedAnswers =  document.getElementById("selectedOptions");
const selectedAnswers=[];

function generateQuestions (index) {

    const question = questions[index];
   questionEl.innerHTML = `${index + 1}. ${question.question}`

}


function loadNextQuestion () {
	console.log("Load next question");
   var selectedOption = document.querySelector('input[type="radio"]:checked');

    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
for(var i=0;i<answers.length;i++)
	{
	if(answers[i].checked){
		selectedAnswers.push(answers[i].value);
	}
	}

 hiddenSelectedAnswers.value = selectedAnswers.join(",");
 
    console.log(hiddenSelectedAnswers.value);
   currentQuestion++;

        selectedOption.checked = false;

    if(currentQuestion == totalQuestions - 1) {
    	console.log("entered finish");
        nextButton.textContent = 'Finish';	
    }

   if(currentQuestion == totalQuestions) {
       	
       console.log("call servlet action");
  	callServletAction();
	    
   }

   generateQuestions(currentQuestion);
}

function loadPreviousQuestion() {

   currentQuestion--;

    generateQuestions(currentQuestion);
}


function finishQuiz(e) {
    if(e.target.matches('button')) {
    	console.log("call servlet action");
    	callServletAction();
    }

}
function callServletAction(){
	
	console.log("calling the formsubmit");

	form.submit();
}
generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
