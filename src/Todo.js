/**
 * Generate Unique ID for new task
 * @param {Array} arr 
 * @returns {number}
 */
function generateID(arr) {
    return arr.length === 0 ? 1 : arr[arr.length - 1].id + 1;
}

class Todo {
    constructor(todoList = []) {
        this.todoList = todoList;
    }

    addItem(text) {
        const item = {
            text,
            id: generateID(this.todoList),
            created: new Date().toISOString()
        };
        this.todoList.push(item);
    }

    update(id, text) {
        id = Number(id);
        const item = this.todoList.find(task => task.id === id);
        if (item) {
            item.text = text;
        } else {
            console.log(`❌ Task with ID ${id} not found.`);
        }
    }

    done() {
        return this.todoList.shift();
    }

    next() {
        return this.todoList[0] || null;
    }

    list() {
        return this.todoList;
    }

    find(term) {
        return this.todoList.filter(item => item.text.toLowerCase().includes(term.toLowerCase()));
    }
}

module.exports = Todo;
