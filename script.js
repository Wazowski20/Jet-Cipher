// Hash map based on the provided data
const hashMap = {
    'A': 'F5D Skylancer', 'B': 'Canadair Sabre', 'C': 'N1K', 'D': 'K-43 Hayabusa',
    'E': 'Hurricane', 'F': 'Lockheed U-2', 'G': 'B-52', 'H': 'F-16',
    'I': 'MiG-21', 'J': 'Tupolev', 'K': 'P-51', 'L': 'Mirage III(A)', 
    'M': 'A-10', 'N': 'Me 109', 'O': 'Zero', 'P': 'Avro 504',
    'Q': 'B-2 Spirit', 'R': 'EA-18G', 'S': 'MQ-9 Reaper', 'T': 'AH-1Z Viper',
    'U': 'F/A-18F', 'V': 'RQ-7B Shadow', 'W': 'C-12F Huron', 'X': 'T-6 Texan',
    'Y': 'WC-130', 'Z': 'QF-4 Aerial', '0': 'CH-47D', '1': 'AH-64',
    '2': 'R/MQ-8', '3': 'UH-60N', '4': 'OH-58D', '5': 'IAI Heron',
    '6': 'A4I RO-2', '7': 'XQ-58A', '8': 'UH-1Y', '9': 'SH-60'
};
const reverseHashMap = Object.fromEntries(Object.entries(hashMap).map(([key, value]) => [value, key]));

// Dark Mode Toggle
const darkModeSwitch = document.getElementById("dark-mode-switch");
darkModeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", darkModeSwitch.checked);
});

// Encryption
document.getElementById("encrypt-btn").addEventListener("click", () => {
    const inputText = document.getElementById("input-text").value.toUpperCase();
    const encryptedText = [...inputText].map(char => hashMap[char] || char).join(" | "); // Use a delimiter
    document.getElementById("output-text").value = encryptedText;
});

// Decryption
document.getElementById("decrypt-btn").addEventListener("click", () => {
    const inputText = document.getElementById("input-text").value.split(" | "); // Split by delimiter
    const decryptedText = inputText.map(word => reverseHashMap[word.trim()] || word).join("");
    document.getElementById("output-text").value = decryptedText;
});

// Voice Command
document.getElementById("voice-btn").addEventListener("click", () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript.toUpperCase();
        document.getElementById("input-text").value = spokenText;
    };
    recognition.start();
});
