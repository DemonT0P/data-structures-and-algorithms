/*
A function that calls itself
Must have a condition to stop it
*/

function countDownRec(number) {
  if (number <= 0) {
    console.log("Hooray");
    return;
  } else {
    console.log(number);
    countDownRec(number - 1);
  }
}

function sumRangeRec(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + sumRangeRec(number - 1);
  }
}

const tree = {
  name: "John",
  children: [
    { name: "Jim", children: [] },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        {
          name: "Jake",
          children: [],
        },
      ],
    },
  ],
};

function printChildrenRecursive(t) {
  if (t.children.length == 0) {
    return;
  } else {
    t.children.forEach((child) => {
      console.log(child.name);
      printChildrenRecursive(child);
    });
  }
}

function sumRangeRec(x, range = 1) {
  if (range == x) {
    return range;
  } else {
    return range + sumRangeRec(x, range + 1);
  }
}

function powerRec(x, y) {
  if (y == 0) {
    return 1;
  } else {
    return x * powerRec(x, y - 1);
  }
}

function factorialRec(number) {
  if (number == 1) {
    return 1;
  } else {
    return number * factorialRec(number - 1);
  }
}
