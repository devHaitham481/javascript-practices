class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

L1 = {
  data: 1,
  next: {
    data: 3,
    next: {
      data: 10,
      next: null,
    },
  },
};

L2 = {
  data: 5,
  next: {
    data: 6,
    next: {
      data: 9,
      next: null,
    },
  },
};

function merge(L1, L2) {
  var L3 = new Node(null, null); // a new Node

  // // L3 = {
  //     data: null,
  //     next: null,
  // }
  var prev = L3;

  while (L1 !== null && L2 !== null) {
    if (L1.data <= L2.data) {
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }

    prev = prev.next;
  }
  prev = {
    data: null,
    next: null,
  };

  prev.next = L1;
  prev = {
    data: null,
    next: {
      data: 1,
      next: {
        data: 3,
        next: {
          data: 10,
          next: null,
        },
      },
    },
  };

  console.log("L3", L3);
}

console.log("output", merge(1, 2));
