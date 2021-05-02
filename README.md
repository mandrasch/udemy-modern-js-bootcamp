# udemy-modern-js-bootcamp

Personal learning notes, I want to update my basic js knowledge :)

"Modernes JavaScript (ES6): jQuery, node.js, und viel Praxis!" - Hosted by Jannis Seemann https://www.udemy.com/course/javascript-bootcamp/

*(If you want to take an english course, see for example https://www.udemy.com/course/javascript-beginners-complete-tutorial/, thanks for suggestion [@kino_auge](https://twitter.com/kino_auge/status/1381891206351880192))*

# Pomodoros

- 11.04.2021 🍅 🍅 🍅
- 12.04.2021 🍅
- 02.05.2021 🍅 🍅 🍅 🍅

# Notes

- let (block scope, new) vs. var (program scope, oldschool) https://www.mediaevent.de/javascript/let.html
- strict mode:

```javascript
// strict mode
"use strict";
a = 9; // -> error: ReferenceError, because 'let a' is missing
// without strict mode there would be no error
console.log(a);
```

- Javascript Standards
    - ES5 (ECMAScript 5 - JSON, Objects) 2009
    - ES6 (ECMAScript 6 - let, etc.) 2016 => better debugging
- Javascript uses Eventloop, no sleep() calls possible as in other languages
    - "Was zum Henker ist überhaupt die Ereignisschleife? | Philip Roberts | JSConf EU" (English) https://www.youtube.com/watch?v=8aGhZQkoFbQ

## Document Object Model

- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName();

### Event listeners

```javascript
window.addEventListener("load", function(){
    let h3s = document.getElementsByTagName("h3");
    console.log('h3s',h3s);

    heading.addEventListener("click",function(){
        console.log('Click event');
    },false);

},false);
```

- Event listener: set third parameter (useCapture) always to false for backwards capability (it is now optional and defaults to `false`, but that may not be the case for older browsers
    - target.addEventListener(type, listener, useCapture);
    - see: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

#### ❓ Open question: No "live" listener for attached events?

How to achieve `$(document).on('click','.boxes',function(){});`?

https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/#event-listening-for-dynamically-added-elements 

- there is also event bubbling? (this is more like document.on(click)?)
https://dev.to/baransel/how-to-add-an-event-listener-to-multiple-elements-in-javascript-aco

❓ Which is best?

### document.querySelector (first) vs. document.querySelectorAll

- document.querySelector => first element, null
- document.querySelectorAll => array, .length == 0

### Modify elements / classes / styles

- element.innerHTML => HTML Code
- element.innerText => Text
- element.className/classList => CSS classes
- element.style => CSS props

```javascript
"use strict";

window.addEventListener("load", function(){

    let heading = document.getElementById("heading");
    console.log(heading);

    heading.addEventListener("click",function(){
        console.log('Click event',this);
        // why not this?
        this.style.color="gold";
    },false);

},false);
```

- classList for adding/removing classes, prevents overwriting (same as jQuerys removeClass(),addClass()) - nice!

```javascript
element.classList.remove("panel-info");
element.classList.add("panel-danger");
```

- toggling is also possible

```javascript
element.classList.toggle("hide");
```
 
### Finding parent element - closest()

https://gomakethings.com/how-to-get-a-parent-element-with-vanilla-js/


### Adding/Removing

```javascript
let imgEl = document.createElement("img");
imgEl.src = "test.svg";
element.appendChild(imgEl);
```

## Arrays

```javascript
    let persons = ['Max','Mia'];
    persons.push("Paula");
    let justAnotherStudent = "Mira";
    // add at end of array:
    persons.push(justAnotherStudent);
    // length
    console.log("persons.length =",persons.length);
    console.log("First person",persons[0]);
    // add at beginning
    persons.unshift("Erster");
    console.log("Persons after unshift:",persons.toString());
    // remove last el
    let removedPerson =  persons.pop();
    console.log("Persons after pop()",persons.toString(),"// removed person:",removedPerson);
    // remove first el
    persons.shift();
    console.log("Persons after shift()",persons.toString());
```

```javascript
    for (let person of persons){
        console.log('Person: ',person);
    }
```

Multidimensional:

```javascript
    let personsMultiDimensional = [
        ['Max','Mira'],
        ['Tom','Tina']
    ];
    console.log(personsMultiDimensional[1][1]);

    for(let personGroup of personsMultiDimensional){
        console.log('Group:',personGroup);
        for(let person of personGroup){
            console.log('Person: ',person);
        }
    }
```



## Debugging

- ❓ Use `debugger` instead of console.log()?
- ❓ Or use breakpoints in chrome dev tools?


## Off-Topic Easiest experience for devs?

- Gulp/Grunt - hard to understand sometimes? PRO: package.json install possible, just run "npm install" and "grunt dev"
    - PRO: if setup correctly, you can also use it in Bitbucket/Github/Gitlab pipeline
- Codekit => easy with GUI for scss/livereload, but needs pausing while pull in teams (But when sourcetree is opened, auto-paused), BUT mac-only / for single-dev/mac-only projects 
    - https://codekitapp.com/help/git/
- https://code.visualstudio.com/docs/editor/tasks => what about dependencies? 
- https://scout-app.io/ => easy, but no livereload
- https://www.npmjs.com/package/livereload (no updates since two years?)