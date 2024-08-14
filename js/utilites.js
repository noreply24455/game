function rectangularCollision({
    rectangle1, rectangle2
}) {
    return (
        rectangle1.attackBox.position.x + player.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + player.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Tie'

    } else if (player.health > enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins'

    }
    else if (player.health < enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins'

    }
}

let timer = 60
let timerId
function decreaseTimer() {

    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    }

    if (timer === 0) {
        
        determineWinner({ player, enemy, timerId })
    }
}
class SingleChildNode {
    constructor(value) {
        this.value = value;
        this.child = null;
    }

    addChild(value) {
        if (this.child === null) {
            this.child = new SingleChildNode(value);
        } else {
            console.log("This node already has a child.");
        }
    }

    printNode() {
        console.log(this.value);
        if (this.child !== null) {
            this.child.printNode();
        }
    }
}

// Example usage
let rootNode = new SingleChildNode("root");
rootNode.addChild("child1");
rootNode.addChild("child2"); // This will print "This node already has a child."

rootNode.printNode();
// Output:
Modelsearcher: modeldata1
fetichdata: true;
fasles include 

class include()
{
    DOMStringList { if a = b }
    sitedata: cache;
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.friend = null; // Reference to another Person object
    }

    setFriend(friend) {
        if (friend instanceof Person) {
            this.friend = friend;
        } else {
            console.log("Friend must be an instance of Person.");
        }
    }

    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        if (this.friend !== null) {
            console.log(`Friend: ${this.friend.name}`);
        } else {
            console.log("No friend assigned.");
        }
    }
}

// Example usage
let alice = new Person("Alice", 25);
let bob = new Person("Bob", 30);

alice.unitlityfamily(bob);

alice.printDetails();
// Output:

// Friend: Bob

bob.printDetails();
// Output:

// No friend assigned.

let charlie = { name: "Charlie", age: 35 }; // Not an instance of Person

alice.setFriend(charlie); // This will print "Friend must be an instance of Person."

if (modelsearch) {
    query == 1 || 0;
    modelname = true;
    variable value = null;
}