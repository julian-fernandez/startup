class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  on(event, listener) {
    if (this.listeners[event] === undefined) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }
  emit(event) {
    this.listeners[event].forEach(function(fn){
      console.log("Now listening");
    })
  }
  off(event, listener) {
    if (this.listeners[event] === undefined){
      console.log("Listeners already cleared");
    }
    else {
      this.listeners[event].length = 0;
      let deletedListener = this.listeners[event];
      console.log("Cleared" + deletedListener);
    }
  }
};
/*
let emitter = new EventEmitter();
emitter.on('test', data => {
 console.log(data);
});

emitter.emit('test','ok');
*/
class Movie extends EventEmitter{
  constructor(title, year, duration, cast) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = Array();
  }
  greeting() { // this is just a test
   return "My favorite movie is " + this.title + ". It came out in " + this.year;
 };

 play(){
  console.log(this.title + " is now playing");
  super.emit('play');
  this.info = "playing";
};
pause(){
 super.emit('pause');
 console.log(this.title + " is now paused");
};
resume(){
  super.emit('resume');
  console.log(this.title + " has resumed playing");
};
addCast(actor){
  this.cast.push(actor);
  console.log(this.cast);
};
};


var twinPeaks = new Movie("Twin Peaks", 1992, 134);
var starWars = new Movie("Star Wars", 1977, 125);

document.getElementById("demo").innerHTML =
starWars.greeting(); 


class Logger {
  constructor(){}
  log(info){
    console.log(info);
  }
};
var logger = new Logger();

Movie.prototype = Object.create(EventEmitter.prototype);

var social = {
  share(name) {
    console.log(this.title + " shared with " + name);
  }
};

let newObj = Object.assign(twinPeaks, social);

class Actor{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}


let luke = new Actor("Mark Hamill", 23);
let otherCast = [
new Actor("Harrison Ford", 29),
new Actor("Carrie Fisher", 28),
new Actor("Alec Guiness", 58)
]