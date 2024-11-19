document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const todoList = document.getElementById('todoList');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        addTodoItem(title, description);

        // Clear form fields after adding
        todoForm.reset();
    });

    // Set custom validation messages
    // title.setCustomValidity('');
    // description.setCustomValidity('');

    // if (!title.value) {
    //     title.setCustomValidity('Please fill out this field.');
    // }

    // if (!description.value) {
    //     description.setCustomValidity('Please fill out this field.');
    // }

    // Check validity and prevent form submission if invalid
    //     if (!this.checkValidity()) {
    //         event.preventDefault(); // Prevent form submission
    //     }
    // });

    // Clear custom validity message on input
    document.getElementById('title').addEventListener('input', function() {
        this.setCustomValidity('');
    });

    document.getElementById('description').addEventListener('input', function() {
        this.setCustomValidity('');
    });

    function addTodoItem(title, description) {
        const row = document.createElement('tr');

        // Title Column
        const titleCol = document.createElement('td');
        titleCol.textContent = title;
        row.appendChild(titleCol);

        // Description Column
        const descriptionCol = document.createElement('td');
        descriptionCol.textContent = description;
        row.appendChild(descriptionCol);

        // Delete Button Column
        const deleteCol = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-delete';
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => {
            row.remove();
        });
        deleteCol.appendChild(deleteBtn);
        row.appendChild(deleteCol);

        // Append row to the todoList
        todoList.appendChild(row);
    }
});