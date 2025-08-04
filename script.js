function generateNotes() {
    const topic = document.getElementById("noteTopic").value;
    const output = document.getElementById("notesOutput");

    if (topic.trim() === "") {
        output.innerHTML = "<p>Please enter a topic to generate notes.</p>";
        return;
    }

    output.innerHTML = `<p><strong>${topic}</strong>: This is a dummy AI-generated note for the topic "${topic}". (Replace this with real AI output later)</p>`;
}
