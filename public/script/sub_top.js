async function loadSubjects() {
    const response = await fetch('/subjects');
    const subjects = await response.json();
    const subjectSelect = document.getElementById('subject');

    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });
}

async function loadTopics() {
    const subject = document.getElementById('subject').value;
    const response = await fetch(`/topics/${subject}`);
    const topics = await response.json();
    const topicSelect = document.getElementById('topic');

    topicSelect.innerHTML = '<option value="">Select a topic</option>';

    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicSelect.appendChild(option);
    });
}

document.getElementById('subject').addEventListener('change', loadTopics);
loadSubjects();