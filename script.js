function generateNotes() {
    const topic = document.getElementById("noteTopic").value.trim();
    const output = document.getElementById("notesOutput");

    if (topic === "") {
        output.innerHTML = "<p>Please enter a topic.</p>";
        return;
    }

    // Static AI-style Notes Generator
    let notes = `Notes on <b>${topic}</b>:<br><br>`;

    notes += `1. Introduction to ${topic}.<br>`;
    notes += `2. Key concepts related to ${topic}.<br>`;
    notes += `3. Importance of ${topic} in real life.<br>`;
    notes += `4. Applications and examples of ${topic}.<br>`;
    notes += `5. Summary and conclusion about ${topic}.<br>`;

    output.innerHTML = notes;
}
