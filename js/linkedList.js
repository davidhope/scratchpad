class LinkedList {
  constructor(head = null) {
      this.head = head
  }
}

class ListNode {
  constructor(data) {
      this.val = data;
      this.next = null                
  }
}

var mergeTwoLists = function(list1, list2) {
  
  let node = new ListNode(null);
  let parentNode = new ListNode(null).next = node;
  
  while(list1 && list2){

    if(list1.val < list2.val){
      node.next = list1;
      list1 = list1.next;
    }else{
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }
  node.next = list1 || list2;

  return parentNode.next;
}

// console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([1,2,4],[1,3,4]));
// console.log(mergeTwoLists([],[]));
// console.log(mergeTwoLists([],[0]));