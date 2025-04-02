// Caesar Cipher in JavaScript
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function caesar(originalText, shiftAmount, encodeOrDecode) {
    let outputText = "";
    
    // Reverse shift if decoding
    if (encodeOrDecode === "decode") {
        shiftAmount *= -1;
    }
    
    for (let letter of originalText) {
        if (alphabet.includes(letter)) {
            let shiftedPosition = alphabet.indexOf(letter) + shiftAmount;
            shiftedPosition = (shiftedPosition + alphabet.length) % alphabet.length;
            outputText += alphabet[shiftedPosition];
        } else {
            outputText += letter; // Keep non-alphabet characters as is
        }
    }
    
    console.log(`Here is the ${encodeOrDecode}d result: ${outputText}`);
}

function startCipher() {
    let again = "yes";
    while (again === "yes") {
        let direction = prompt("Type 'encode' to encrypt, type 'decode' to decrypt:").toLowerCase();
        let text = prompt("Type your message:").toLowerCase();
        let shift = parseInt(prompt("Type the shift number:"), 10);

        caesar(text, shift, direction);
        
        again = prompt("Type 'yes' if you want to go again. Otherwise, type 'no'").toLowerCase();
    }
    console.log("Game Over!");
}

// Start the program
startCipher();
