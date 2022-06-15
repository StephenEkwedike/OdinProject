// var login = prompt("Enter User", '');
// if (login ===  "Admin"){
//     var password = prompt("Enter Password", '');

//     if (password === 'TheMaster'){
//         alert('Welcome!');
//     }
//     else if( password === '' || password === null){
//         alert("Canceled")
//     }
//     else{
//         alert("Wrong password")
//     }
// }

// else if(login === '' || login === null){
//     alert("Canceled!")
// }

// else{
//     alert("I don't know you");
// }

const day = new Date().getDay();

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday...sigh");
        break;
    case 2:
      console.log("Tuesday");
      break;
    default:
        console.log("Not Sunday-Tuesday")
}

// Set the student's grade
const grade = 87;

switch (true) {
	// If score is 90 or greater
	case grade >= 90:
		console.log("A");
		break;
	// If score is 80 or greater
	case grade >= 80:
		console.log("B");
		break;
	// If score is 70 or greater
	case grade >= 70:
		console.log("C");
		break;
	// If score is 60 or greater
	case grade >= 60:
		console.log("D");
		break;
	// Anything 59 or below is failing
	default:
		console.log("F");
}

const a = "Hello"
const b = "World"

console.log(c)