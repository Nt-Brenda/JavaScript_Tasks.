const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// Using the join() method
const joinedString = colors.join(',');

// Using the splice() method
colors.splice(1, 2, 'purple', 'pink');

// Using the copyWithin() method
colors.copyWithin(0, 1, 4);

// Using the toUnode task1pperCase() method
const uppercaseColors = colors.map(color => color.toUpperCase());

// Using the find() method
const firstBElement = colors.find(color => color.startsWith('b'));

// Using the slice() method
const selectedColors = colors.slice(1, 4);

console.log('Joined String:', joinedString);
console.log('Modified Colors Array:', colors);
console.log('Uppercase Colors:', uppercaseColors);
console.log('First Element Starting with "b":', firstBElement);
console.log('Selected Colors:', selectedColors);
