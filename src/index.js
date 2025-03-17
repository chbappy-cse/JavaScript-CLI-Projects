#!/usr/bin/env node

const yargs = require('yargs');
const path = require('path');
const Todo = require('./Todo');
const { saveFile, readFile } = require('./utils');
const { ADD, UPDATE, NEXT, DONE, FIND, LIST } = require('./commands');

const filePath = path.resolve(__dirname, '../data.json');

// Initialize To-Do List
const data = readFile(filePath) || [];
const todo = new Todo(data);

// Setup CLI Commands
const argv = yargs
    .command('add', 'Add a new task', {
        text: { type: 'string', demandOption: true, alias: 't' }
    })
    .command('update', 'Update an existing task', {
        id: { type: 'number', demandOption: true, alias: 'i' },
        text: { type: 'string', demandOption: true, alias: 't' }
    })
    .command('next', 'Show next task')
    .command('done', 'Mark the next task as done')
    .command('find', 'Search tasks', {
        term: { type: 'string', demandOption: true, alias: 's' }
    })
    .command('list', 'List all tasks')
    .demandCommand(1, 'You must provide a valid command')
    .help()
    .argv;

// Handle Commands
switch (argv._[0]) {
    case ADD:
        todo.addItem(argv.text);
        console.log('✅ Task Added!');
        saveFile(todo.todoList, filePath);
        break;

    case UPDATE:
        todo.update(argv.id, argv.text);
        console.log('✅ Task Updated!');
        saveFile(todo.todoList, filePath);
        break;

    case NEXT:
        const item = todo.next();
        if (item) {
            console.log(`➡️ Next Task: ${item.id} - ${item.text} [${item.created}]`);
        } else {
            console.log('✅ No pending tasks.');
        }
        break;

    case DONE:
        const removed = todo.done();
        if (removed) {
            console.log(`✅ Task Completed: ${removed.id} - ${removed.text}`);
            saveFile(todo.todoList, filePath);
        } else {
            console.log('⚠️ No tasks to complete.');
        }
        break;

    case FIND:
        const results = todo.find(argv.term);
        if (results.length === 0) {
            console.log('❌ No matching tasks found.');
        } else {
            results.forEach(item => {
                console.log(`🔍 Found: ${item.id} - ${item.text} [${item.created}]`);
            });
        }
        break;

    case LIST:
        if (todo.todoList.length === 0) {
            console.log('📭 No tasks found.');
        } else {
            todo.todoList.forEach(item => {
                console.log(`📝 ${item.id} - ${item.text} [${item.created}]`);
            });
        }
        break;

    default:
        console.log('❌ Command Not Found. Use --help to see available commands.');
}
