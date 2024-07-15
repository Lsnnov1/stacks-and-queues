// list, in order, of people who want tickets
ticketBuyers = ["Elie", "Alissa", "Matt", "Michael"];

// ... lots of code

// sell tickets, in order
while (ticketBuyers.length) {
  buyer = ticketBuyers.pop();
  purchase(buyer);
}



// list of print jobs
jobs = ["resume.doc", "budget.xls", "plan.pdf", "css.css"];

// process list of print jobs in order
while (jobs.length) {
  let job = jobs.shift();
  printJob(job);
}


// ***enqueue(item)***

// Add to end

// ***dequeue()***

// Remove & return first item

// ***peek()***

// Return first item, but don’t remove

// ***isEmpty()***

// Are there items in the queue?





class Queues{
    constructor(){
        this.data = [];
    }
}

class Stacks {
    constructor(){
        this.data = [];
    }
}