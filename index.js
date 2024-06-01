"use strict";
// // 2.Personal Message: Store a person's name in a variable, and print a message to that person.
// // your message should be simple, such as,"Hello Eric, would to like to learn some python today?"
// let personName1: string = "sahil";
// console.log( `Hello ${ personName1 }, would to like to learn some python today?` );
// // 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let personName: string = "shamsher";
// console.log( `Lowercase : ${ personName.toLowerCase() }` );
// console.log( `Uppercase : ${ personName.toUpperCase() }` );
// console.log( `Titlecase : ${ personName.charAt( 0 ).toUpperCase() + personName.slice( 1 ).toLowerCase() }` );
// // 4.Famous Quote:find a quote from a famous person you admire.print the quote and the name of
// // it's auothor. your output should look something like the following, inculding the quotation
// // marks:
// //Albert Einstein once said,"A person who never made a mistake never tried anything new."
// console.log( `John Quincy Adams once said, "If your actions inspire others to dream more, learn more, do more and become more, you are a leader." ` );
// // 5.Famous Quotes 2:Repeat exercise 4, but this time store the famous person's name in a variable
// // called famous_person.then compose your message and store it in a new variable caleed message. print your message.
// let famous_Person: string = "Jimmy Dean";
// let message: string = `${ famous_Person } once said, "I can't change the direction of the wind, but I can adjust my sails to always reach my destination." `;
// console.log( message );
// // 6.Stripping Names:Store a person's name,and inculde some whitespace characters at the beginning and end of the name. Make sure your use each character combination, "\t"
// // and "\n",at least once.print the name once,so the whitespace around the name is displayed.then print the name after stripping the white spaces.
// let whitespaceName: string = "\t\n Sheza Shamsher \t\n";
// console.log( "Name with whitespace :", whitespaceName );
// console.log( "Stripped name :", whitespaceName.trim() );
// // 8.You should create four lines that look like this:
// // console.log(5+3)
// // your output should simply be four lines with the number 8 appearing once on each line.
// console.log( 4 + 4 );
// console.log( "-".repeat( 80 ) );
// console.log( 12 - 4 );
// console.log( "-".repeat( 80 ) );
// console.log( 4 * 2 );
// console.log( "-".repeat( 80 ) );
// console.log( 16 / 2 );
// console.log( "-".repeat( 80 ) );
// // 9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let fav_Num: number = 7;
// console.log( `My favourite number is ${ fav_Num }.` )
// // 10.Adding Comments: Choose two of the programs you've written, and add at least one comment to each.
// // if you don't have anything specific to write beacuse your programs are too simple at this point, just
// // add your name and the current date at the top of each program file.then
// // write one sentence describing what the program does.
// // Name : Sheza Shamsher
// // Date : 07-03-2024
// Sentence : "This is a typescript program, I learn in governer house."
// console.log("hello world")
// // 11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let names: string[] = [ "liza", "jennifer", "Giselle", "Zeliana" ]
// for ( let name of names ) {
//     console.log( name );
// }
// // 12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// names.forEach( greet => {
//     console.log( `Hello ${ greet }, How are you?` );
// } );
// // 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let transportation: string[] = [ "motorcycle", "car", "train", "aeroplane" ]
// for ( let mode of transportation ) {
//     console.log( `I would like to own a ${ mode }` );
// }
// // 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guest_list: string[] = [ "Maria", "Aster", "Ayesha" ]
// function invitation ( guests: string[] ) {
//     guests.forEach( guest => {
//         console.log( `Dear ${ guest }, You are cordially invited to dinner at my place` );
//     } );
// };
// // 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// //• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// //• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// //• Print a second set of invitation messages, one for each person who is still in your list.
// // print initial invitations
// invitation( guest_list );
// // guest who can't make it
// const cantMakeIt: string = "Maria"
// console.log( `${ cantMakeIt } can't make it to dinner`, );
// // replace maria with a new guest
// let newGuest: string = "Nancy"
// guest_list[ guest_list.indexOf( cantMakeIt ) ] = newGuest;
// // Second set of invitations
// console.log( "\n Second set of invitations \n" );
// invitation( guest_list );
// // 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// //• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// // • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// console.log( "We found a bigger dinner table" );
// // new guest add in the array
// guest_list.unshift( "kanwal" );              // at the beginning
// guest_list.splice( 2, 0, "zeliana" );        // in the middle
// guest_list.push( "magaret" );            // at the last
// for ( const newGuest of guest_list ) {
//     console.log( newGuest );
// }
// // 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// // • Print a message to each of the two people still on your list, letting them know they’re still invited.
// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// // message for the guests
// console.log( "our new table wont arrive in time,so we can invite only two persons to dinner" );
// // remove guest from the list only two persons remain in the list
// while ( guest_list.length > 2 ) {
//     const removeGuest = guest_list.pop()
//     console.log( `Sorry ${ removeGuest } , we cant invite you to dinner` );
// }
// // message for two person's who still in the guest_list
// for ( const stillinvited of guest_list ) {
//     console.log( `${ stillinvited } you're still invited` );
// }
// // remove last two persons from the guest_list
// guest_list.pop()
// guest_list.pop()
// // empty list
// console.log( guest_list );
// // 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// //• Store the locations in a array. Make sure the array is not in alphabetical order.
// //• Print your array in its original order.
// //• Print your array in alphabetical order without modifying the actual list.
// //• Show that your array is still in its original order by printing it.
// //• Print your array in reverse alphabetical order without changing the order of the original list.
// //• Show that your array is still in its original order by printing it again.
// //• Reverse the order of your list. Print the array to show that its order has changed.
// //• Reverse the order of your list again. Print the list to show it’s back to its original order.
// //• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// //• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let places: string[] = [ "europe", "muree", "baku", "dubai", "kashmir" ]
// // array in original order
// console.log( places );
// //array in alphabetical order without modifying the actual list.
// console.log( [ ...places ].sort() );
// // still in it's original order
// console.log( places );
// // reverse the alphabetical order without changing the order
// console.log( [ ...places ].sort().reverse() );
// // array is still in its original order by printing it again.
// console.log( places );
// // reverse the order of the list
// places.reverse();
// console.log( places );
// // Reverse the order of the list again
// places.reverse();
// console.log( places );
// // Sort array in alphabetical order
// places.sort();
// console.log( places );
// // sort change array in reverse alphabetical order
// places.sort( ( a, b ) => b.localeCompare( a ) )
// console.log( places );
// // 20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let languages: string[] = [ "Urdu", "English", "Spanish", "Arabic", "Chinese", "Bengali" ]
// for ( const list of languages ) {
//     console.log( list );
// }
// // 21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// type Car = {
//     company: string,
//     model: number,
//     color: string[],
//     price: number,
//     start: () => string
// }
// let car: Car = {
//     company: "Honda",
//     model: 2022,
//     color: [ "Black", "White", "Red" ],
//     price: 2500000,
//     start: () => "Press the start button to start the car"
// }
// console.log( car );
// console.log( car.color[ 2 ] );
// console.log( car.start() );
// // 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// let vegetable: string[] = [ "Carrot", "Potato", "Cucumber", "spinach", "Tomato" ]
// console.log( vegetable[ 9 ] ); //international error
//now solve it error
// console.log(vegetable[1]);
// // 23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// //let car = 'subaru';
// //console.log("Is car == 'subaru'? I predict True.")
// //console.log(car == 'subaru')
// //• Look closely at your results, and make sure you understand why each line evaluates to True or False.
// //• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// //test 1
// let cars: string = 'Civic';
// console.log( `Is Car === 'Civic' ? I predict true.` );
// console.log( cars === 'Civic' );
// // //test 2
// console.log( `Is Car != 'Honda' ? I predict false.` );
// console.log( cars != 'Civic' );
// let myName: string = 'Sheza';
// // //test 3
// console.log( `Is name === 'Sheza' ? I predict true.` );
// console.log( myName === 'Sheza' );
// // //test 4
// console.log( `Is name != 'Sheza' ? I predict false.` );
// console.log( myName != 'Sheza' );
// //test 5
// let num: number = 12
// console.log( `Is number == 12 ? I predict true.` );
// console.log( num == 12 );
// // //test 6
// console.log( `Is number < 10 ? I predict false.` );
// console.log( num < 10 );
// // //test 7
// console.log( `Is number > 11 ? I perdict true.` );
// console.log( num > 11 );
// // //test 8
// console.log( `Is number <= 8 ? I predict false.` );
// console.log( num <= 8 );
// // //test 9
// console.log( `Is number >= 12 ? I predict true.` );
// console.log( num >= 12 );
// // //test 10
// console.log( `Is number != 12 ? I predict false.` );
// console.log( num != 12 );
// // 24.More Conditional Tests:You don't have to limit the number of tests you create to 10.
// // if you want to try more comparisons,write more tests. have at least one true and one false result
// // for each of the following:
// // Testing equality and unequality with strings
// console.log( "Testing equality and unequality with strings" );
// //creat two variable
// let string1: string = 'Sahil';
// let string2: string = 'Unithan';
// // • Tests for equality and inequality with strings
// console.log('string1 equal to string1? I predict True.');
// console.log(string1 === string1);
// console.log('string1 equal to string2? I predict True.');
// console.log(string1 === string2);
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let num1: number = 10;
// let num2: number = 16;
// //equal to 
// console.log('num1 equal to 10? I predict True.');
// console.log(num1 === 10);
// console.log('num1 equal to num2? I predict True.');
// console.log(num1 === num2);
// //less then 
// console.log('num1 less then num2? I predict True.');
// console.log(num1 < num2);
// console.log('num1 greater then num2? I predict True.');
// console.log(num1 === num2);
// //equal to and less then 
// console.log('num1 less then or equal to 16? I predict True.');
// console.log(num1 < 16);
// //equal to and greater then 
// console.log('num1 greater then or equal to num2? I predict True.');
// console.log(num1>=num2);
// //testing usding && or || oprator
// let bool1:boolean=true;
// let bool2:boolean=false
// console.log('bool1 true && false bool2? I predict True.');
// console.log(bool1||bool2);
// console.log('bool1 true || false bool2? I predict True.');
// console.log(bool1&&bool2);
// // • Test whether an item is in a array
// let numbers:number[]=[1,2,3,4,5];
// console.log('3 in the array? I predict True.');
// console.log(numbers.includes(3));
// // • Test whether an item is not in a array
// console.log('8 in the array? I predict True.');
// console.log(numbers.includes(8));
// // 25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// // • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//creat variable 
// let alienColor:string='Green';
// //not creat a passing condition
// if (alienColor==='Green') {
//     console.log('Congratulations! You Won 5 Points');
// }
// // then creat a filling condition
// let alienColor2:string='Yellow';
// if (alienColor2 === 'Green') {
//     console.log('Faild');
// }
// // 26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// //• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// //• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// //• Write one version of this program that runs the if block and another that runs the else block.
// let alien_color2: string = "green";
// if ( alien_color2 == "green" ) {
//     console.log( "The player just earned 5 points for shooting the alien" );
// }
// else {
//     console.log( "The player just earned 10 points" );
// }
// alien_color2 = "red";
// if ( alien_color2 == "green" ) {
//     console.log( "The player just earned 5 points for shooting the alien" );
// }
// else {
//     console.log( "The player just earned 10 points" );
// }
// // 27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// //• If the alien is green, print a message that the player earned 5 points.
// //• If the alien is yellow, print a message that the player earned 10 points.
// //• If the alien is red, print a message that the player earned 15 points.
// //• Write three versions of this program, making sure each message is printed for the appropriate color alien.
// // (first version)
// let alien_color3: string = "green";
// if ( alien_color3 == "green" ) {
//     console.log( "The player just earned 5 points" );
// }
// else if ( alien_color3 == "yellow" ) {
//     console.log( "The player just earned 10 points" );
// }
// else if ( alien_color3 == "red" ) {
//     console.log( "The player just earned 15 points" );
// }
// // (second version)
// alien_color3 = "yellow";
// if ( alien_color3 == "green" ) {
//     console.log( "The player just earned 5 points" );
// }
// else if ( alien_color3 == "yellow" ) {
//     console.log( "The player just earned 10 points" );
// }
// else if ( alien_color3 == "red" ) {
//     console.log( "The player just earned 15 points" );
// }
// // (third version)
// alien_color3 = "red";
// if ( alien_color3 == "green" ) {
//     console.log( "The player just earned 5 points" );
// }
// else if ( alien_color3 == "yellow" ) {
//     console.log( "The player just earned 10 points" );
// }
// else if ( alien_color3 == "red" ) {
//     console.log( "The player just earned 15 points" );
// }
// // 28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// //• If the person is less than 2 years old, print a message that the person is a baby.
// let age: number = 1.5;
// if ( age < 2 ) {
//     console.log( "The person is a baby" );
// }
// else if ( age < 4 ) {
//     console.log( "The person is a toddler" )
// }
// else if ( age < 13 ) {
//     console.log( "The person is a kid" );
// }
// else if ( age < 20 ) {
//     console.log( "The person is a teenager" );
// }
// else if ( age < 65 ) {
//     console.log( "The person is a adult" );
// }
// else {
//     console.log( "the person is a elder " );
// }
// //• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// age = 3;
// if ( age >= 1 && age <= 1.99 ) {
//     console.log( "The person is a baby" );
// }
// else if ( age >= 2 && age <= 3.99 ) {
//     console.log( "The person is a toddler" )
// }
// else if ( age >= 4 && age <= 12.99 ) {
//     console.log( "The person is a kid" );
// }
// else if ( age >= 13 && age <= 19.99 ) {
//     console.log( "The person is a teenager" );
// }
// else if ( age >= 20 && age <= 64.99 ) {
//     console.log( "The person is a adult" );
// }
// else {
//     console.log( "the person is a elder " );
// }
// //• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// age = 10;
// if ( age >= 1 && age <= 1.99 ) {
//     console.log( "The person is a baby" );
// }
// else if ( age >= 2 && age <= 3.99 ) {
//     console.log( "The person is a toddler" )
// }
// else if ( age >= 4 && age <= 12.99 ) {
//     console.log( "The person is a kid" );
// }
// else if ( age >= 13 && age <= 19.99 ) {
//     console.log( "The person is a teenager" );
// }
// else if ( age >= 20 && age <= 64.99 ) {
//     console.log( "The person is a adult" );
// }
// else {
//     console.log( "the person is a elder " );
// }
// //• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// age = 17;
// if ( age >= 1 && age <= 1.99 ) {
//     console.log( "The person is a baby" );
// }
// else if ( age >= 2 && age <= 3.99 ) {
//     console.log( "The person is a toddler" )
// }
// else if ( age >= 4 && age <= 12.99 ) {
//     console.log( "The person is a kid" );
// }
// else if ( age >= 13 && age <= 19.99 ) {
//     console.log( "The person is a teenager" );
// }
// else if ( age >= 20 && age <= 64.99 ) {
//     console.log( "The person is a adult" );
// }
// else {
//     console.log( "the person is a elder " );
// }
// //• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// age = 45;
// if ( age >= 1 && age <= 1.99 ) {
//     console.log( "The person is a baby" );
// }
// else if ( age >= 2 && age <= 3.99 ) {
//     console.log( "The person is a toddler" )
// }
// else if ( age >= 4 && age <= 12.99 ) {
//     console.log( "The person is a kid" );
// }
// else if ( age >= 13 && age <= 19.99 ) {
//     console.log( "The person is a teenager" );
// }
// else if ( age >= 20 && age <= 64.99 ) {
//     console.log( "The person is a adult" );
// }
// else {
//     console.log( "the person is a elder " );
// }
// //• If the person is age 65 or older, print a message that the person is an elder.
// age = 65;
// if ( age >= 1 && age <= 1.99 ) {
//     console.log( "The person is a baby" );
// }
// else if ( age >= 2 && age <= 3.99 ) {
//     console.log( "The person is a toddler" )
// }
// else if ( age >= 4 && age <= 12.99 ) {
//     console.log( "The person is a kid" );
// }
// else if ( age >= 13 && age <= 19.99 ) {
//     console.log( "The person is a teenager" );
// }
// else if ( age >= 20 && age <= 64.99 ) {
//     console.log( "The person is a adult" );
// }
// else {
//     console.log( "the person is a elder " );
// }
// // 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// //• Make a array of your three favorite fruits and call it favorite_fruits.
// //• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favorite_Fruits: string[] = [ "Mango", "Strawberry", "Pineapple" ]
// if ( favorite_Fruits[ 0 ] == "Mango" ) {
//     console.log( "You really like Mango!" );
// }
// if ( favorite_Fruits.includes( "Strawberry" ) ) {
//     console.log( "You really like Strawberry!" );
// }
// if ( favorite_Fruits.includes( "Pineapple" ) ) {
//     console.log( "You really like Pineapple!" );
// }
// if ( favorite_Fruits.includes( "Banana" ) ) {
//     console.log( "You really like banana!" );
// }
// if ( favorite_Fruits.includes( "Apple" ) ) {
//     console.log( "You really like Apple!" );
// }
// // check specific fruits using independent if statements
// let a = favorite_Fruits.includes( "Banana" );
// console.log( a );
// let b = favorite_Fruits.includes( "Apple" );
// console.log( b );
// // 30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let usernames: string[] = [ "admin", "Eric", "Yashwa", "John", "Ahmed" ];
// for ( let username of usernames ) {
//     if ( username.toLowerCase() === "admin" ) {
//         console.log( "Hello admin, would you like to see a status report?" );
//     }
//     else {
//         console.log( `Hello ${ username },thank you for logging in again` );
//     }
// }
// // 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// // • If the list is empty, print the message We need to find some users!
// // • Remove all of the usernames from your array, and make sure the correct message is printed.
// let webUser: string[] = [ 'Sahil', 'Sheza', 'Liza', 'Honey', 'Ayesha' ];
// if ( webUser.length === 0 ) {
//     console.log( `I Have Users` );
// } else {
//     webUser = [];
//     console.log( `We need to find some users!` );
// };
// // 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// //• Make a list of five or more usernames called current_users.
// //• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// //• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// //• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
// let current_users: string[] = [ "danish", "saba", "mahad", "sobia", "KHALID" ]
// let new_users: string[] = [ "khalid", "eschell", "DANISH", "maHad", "janice" ]
// for ( let newNames of new_users ) {
//     let newNamesToLower = newNames.toLowerCase()
//     let found: boolean = false
//     for ( let exitsUser of current_users ) {
//         if ( exitsUser.toLowerCase() === newNamesToLower ) {
//             found = true
//         }
//     }
//     if ( found ) {
//         console.log( `Sorry ${ newNames } is already user` );
//     } else {
//         console.log( `${ newNames } is available` );
//     }
// }
// // 33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// //• Store the numbers 1 through 9 in a array.
// //• Loop through the array.
// //• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let numbers: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// for ( const number of numbers ) {
//     if ( number == 1 ) {
//         console.log( `${ number }st` );
//     }
//     else if ( number == 2 ) {
//         console.log( `${ number }nd` );
//     }
//     else if ( number == 3 ) {
//         console.log( `${ number }rd` );
//     }
//     else if ( number == 4 || 4 < 9 ) {
//         console.log( `${ number }th` );
//     }
// }
// // 34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// //• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line output containing a simple statement like I like pepperoni pizza.
// //• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let Pizzas: string[] = [ "super creamy pizza", "chicken tikka pizza", "fajita pizza" ]
// Pizzas.forEach( pizza => {
//     console.log( pizza );
// } );
// Pizzas.forEach( pizza => {
//     console.log( `I like ${ pizza }` );
// } );
// console.log( "\n I really like pizza! \n" );
// // 35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let animals: string[] = [ "dog", "cat", "rabbit" ]
// animals.forEach( animal => {
//     console.log( animal );
// } );
// animals.forEach( animal => {
//     console.log( `A ${ animal } would make a great pet` );
// } );
// console.log( "\n Any of these animals would make a great pet! \n" );
// // 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function makeShirt ( size: string, message: string ) {
//     console.log( `make a ${ size } t-shirt with the message ${ message } print on it` );
// }
// makeShirt( "XL", "pakistan zindabad" );
// // 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message)
// function make_Shirt ( size: string = "large", message: string = "I Love Typescript" ) {
//     console.log( `make a ${ size } t-shirt with the message ${ message } print on it` );
// }
// make_Shirt()                                      // default size and message value
// make_Shirt( "Medium" )                             // default message value
// make_Shirt( "small", "I love coding" )            // different size and message
// // 38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function desccribe_city ( city: string, country: string = 'Pakistan' ): string {
//     return `${ city } is in ${ country }`
// }
// console.log( desccribe_city( "Karachi" ) );
// console.log( desccribe_city( "Lahore" ) );
// console.log( desccribe_city( "Islamabad", "Pakistan" ) );
// // 39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// //"Lahore, Pakistan"
// //Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_Country ( city: string, country: string ): string {
//     return `${ city } ${ country }`
// }
// console.log( city_Country( "paris", "France" ) );
// console.log( city_Country( "Dubai", "United Arab Emirates" ) );
// console.log( city_Country( "Baku", "Azerbaijan" ) );
// // 40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// //Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// interface Album {
//     artist: string,
//     title: string,
//     tracks?: number
// }
// function make_album ( artist: string, title: string, tracks?: number ): Album {
//     const album: Album = { artist, title }
//     if ( tracks ) {
//         album.tracks = tracks;
//     }
//     return album
// }
// const album1 = make_album( "Artist1", "Album Title1" );
// const album2 = make_album( "Artist2", "Album Title2", 10 ); // example with tracks specified
// const album3 = make_album( "Artist3", "Album Title3" );
// console.log( album1 );
// console.log( album2 );
// console.log( album3 );
// // 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function show_magicians ( magician: string[] ) {
//     for ( const magicians of magician ) {
//         console.log( magicians );
//     }
// }
// let magicianName: string[] = [ "Harry Houdini", "David Blaine", "Chris Angel", "Derren Brown", "Harry Anderson" ];
// show_magicians( magicianName )
// // 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name
// // Call show_magicians() to see that the list has actually been modified.
// function make_great ( magician: string[] ) {
//     for ( const magicians of magician ) {
//         console.log( `The Great ${ magicians }` );
//     }
// }
// make_great( magicianName );
// show_magicians( magicianName );
// // 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// // Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// function showMagicians ( magicians: string[] ) {
//     magicians.forEach( name => {
//         console.log( name );
//     } );
// }
// function GreatMagicain ( magicians: string[] ) {
//     return magicians.map( name => `The Great ${ name }` )
// }
// let magician1: string[] = [ 'zack', 'joel', 'jonson', 'jarred' ];
// let GreatMagicainVar: string[] = GreatMagicain( [ ...magician1 ] )
// console.log( 'Original Array' );
// show_magicians( magician1 )
// console.log( '\n Great Magicains' );
// show_magicians( GreatMagicainVar )
// // 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function Sandwiches ( ...items: string[] ) {
//     console.log( 'You ordered a sandwich with the following items:' );
//     items.forEach( item => {
//         console.log( "-" + item );
//     } );
// }
// // console.log("Enjoy your sandwich!");
// Sandwiches( "chesse", "tomato", "ham", "lettuce" )
// Sandwiches( "roast beef", "egg", "grilled chesse" )
// Sandwiches( "grilled chicken", "cucumber" )
// // 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
// type Cars = {
//     manufacture: string,
//     modelName: string,
//     [ key: string ]: any
// }
// function carInfo ( manufacture: string, modelName: string, option: Partial<Cars> ): Cars {
//     let car = {
//         manufacture: manufacture,
//         modelName: modelName,
//         ...option
//     }
//     return car
// };
// let myCar = carInfo( 'honda', 'civic', { color: 'red', gair: 5 } );
// console.log( myCar );
