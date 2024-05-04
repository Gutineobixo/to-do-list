document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    var input = document.getElementById('taskInput');
    var newTask = input.value.trim();
    if (newTask) {
        var listItem = document.createElement('li');
        var taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = newTask;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            listItem.remove();
        };

        var completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.className = 'complete-btn';
        completeButton.onclick = function() {
            listItem.classList.toggle('completed');
        };

        var actionsSpan = document.createElement('span');
        actionsSpan.className = 'task-actions';
        actionsSpan.appendChild(completeButton);
        actionsSpan.appendChild(deleteButton);

        listItem.appendChild(taskTextSpan);
        listItem.appendChild(actionsSpan);

        document.getElementById('taskList').appendChild(listItem);
        input.value = ''; // Limpa o input após adicionar
    }
}

var timerId;
function startTimer() {
    var timerInput = document.getElementById('timerInput');
    var time = parseInt(timerInput.value) * 60; // Convertendo minutos para segundos
    if (isNaN(time) || time <= 0) {
        alert('Por favor, insira um número válido de minutos.');
        return;
    }

    clearInterval(timerId); // Para qualquer temporizador existente
    timerId = setInterval(function() {
        if (time <= 0) {
            clearInterval(timerId);
            document.getElementById('timeRemaining').innerText = 'Tempo Expirado!';
            alert('O tempo expirou!');
        } else {
            var minutes = Math.floor(time / 60);
            var seconds = time % 60;
            document.getElementById('timeRemaining').innerText = 'Tempo Restante: ' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
            time--;
        }
    }, 1000);
}

// Notes handling
document.getElementById('notesInput').addEventListener('input', function() {
    localStorage.setItem('notes', this.value);
});

window.onload = function() {
    var savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        document.getElementById('notesInput').value = savedNotes;
    }
};

function insertSymbol(symbol) {
    document.execCommand('insertText', false, symbol + ' ');
}

function highlightText() {
    document.execCommand('hiliteColor', false, 'yellow');
}

function changeTextColor(color) {
    document.execCommand('foreColor', false, color);
}
