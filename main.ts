let guestslist : string [] = [`Faria`,`Sundas`,`Iqra`,`Bushra`];
let canNotAttend : string = "Sundas";

let new_Guest = "Babar Azam";

guestslist [guestslist.indexOf(canNotAttend)] = new_Guest;

guestslist.map((items) => console.log(`Dear ${items} You Are Invited In My home For Dinner. `));
