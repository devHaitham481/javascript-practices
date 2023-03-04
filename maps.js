const items = new Map([[1, { name: "John" }][(2, { name: "Mary" })]]);

items.set(4, { name: "Alan" });

items.size;

items.has(4);
items.get(2); // get by key

items.delete(2);

items.size;

[...items.keys()];

[...items.values()];
