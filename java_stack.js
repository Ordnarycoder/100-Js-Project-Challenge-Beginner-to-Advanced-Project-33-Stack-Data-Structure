class Stack {
    constructor() {
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop()

    }
    peek(){
        if(this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];

    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length
    }
    printStack(){
        return this.items.toString();
    }
}

const stack = new Stack();

stack.push(10)
stack.push(40);
stack.push(160);
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.printStack())
