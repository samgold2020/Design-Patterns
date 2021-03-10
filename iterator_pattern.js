//Pattern #2 - Iterator Pattern
  //Allows clients to effectively loop over a collection of objects
  //Collections may be stored as an array or a tree or graph structure. You can access items in an order such as front to back, back to front, depth first (for tree searches), etc...

const items = [1, "sam", true, 1.48]

//function takes in the collection we want to iterate over
function Iterator(items){
  // stores a reference to the collection we want to iterate over
  this.items = items 
  //storing the index of our iterator, or where we want to start in that collection
  this.index = 0
}

//Creat methods for our iterator
Iterator.prototype = {
//Two critical methods an iterator must have: 
  //hasNext - will return true or false based on whether or not the iterater has a next value
  hasNext: function(){
    //if the index is less than the number of items in the collection return true and continue processing. Otherwise, return false
    return this.index < this.items.length
  },
  next: function(){
    //looks in our collection and says if there is a next item increase the index
    return this.items[this.index++]
  }
}
  const iter = new Iterator(items)
  // console.log(iter.next())

  while (iter.hasNext()){
    console.log(iter.next())
  }

  //forward iterator 

//Followed tutorial here: https://www.youtube.com/watch?v=c85EStPZR8M