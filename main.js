var guestslist = ["Faria", "Sundas", "Iqra", "Bushra"];
var canNotAttend = "Sundas";
var new_Guest = "Babar Azam";
guestslist[guestslist.indexOf(canNotAttend)] = new_Guest;
guestslist.map(function (items) { return console.log("Dear ".concat(items, " You Are Invited In My home For Dinner. ")); });
