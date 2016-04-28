var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/  
function search(lastName){
var c=contacts.length;
for(var i=0;i<c;i++){
if(lastName===contacts[i].lastName){
printPerson(contacts[i]);
}
}
}
search("Jones");
var contactsLength = contacts.length;
function list() {
for (var i = 0; i < contactsLength + 1; i++) {
printPerson(contacts[i]);
}
};
function add (firstName, lastName, email, phoneNumber) {
contacts[contactsLength] = {
firstName: firstName,
lastName: lastName,
email: email,
phoneNumber: phoneNumber
}
};
add ("Don", "jones", "don.jones@example.com", "01573441154");
list();
