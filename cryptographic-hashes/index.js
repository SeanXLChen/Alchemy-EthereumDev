const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    for (let i = 0; i < COLORS.length; i++) {
        const color = COLORS[i];
        const colorHash = sha256(utf8ToBytes(color));
        if (toHex(colorHash) === toHex(hash)) {
            return color;
        }
    }
}


const hashOfRed = sha256(utf8ToBytes('red'));
console.log(`Hash of red: ${toHex(hashOfRed)}`);
console.log(`Color of hash: ${findColor(hashOfRed)}`);