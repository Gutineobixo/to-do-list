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