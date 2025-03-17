# Todo CLI Project

A simple Command Line Interface (CLI) Todo application built with Node.js. This CLI allows you to manage your todo list directly from the command line.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Testing](#testing)
- [License](#license)

## Features
- Add new todo items
- Update existing todo items
- Mark items as done (remove from list)
- Find items by search term
- List all todo items
- Retrieve the next item from the todo list

## Installation

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your system.

To check if you have Node.js and npm installed, run the following commands:

```bash
node -v
npm -v

```

## Steps to Set Up the Project
```bash
```
git clone <repository_url>

1.Clone this repository to your local machine:
```bash
git clone <repository_url>
```
2.Navigate to the project directory:
```bash
cd todo-cli
```
3.Install the dependencies:
```bash
npm install
```
4.Link the project globally so you can use the todo-cli command from anywhere:
```bash
npm link
```

## Usage Commands

### 1. Add a Todo Item
Add a new item to the todo list.
```bash
todo-cli add --text="Your task here"
```
### 2. List All Todo Items
View all the current todo items in your list.
```bash
todo-cli list
```
### 3. Find Todo Items
Search for todo items containing a specific term.
```bash
todo-cli find --term="Find Text"
```
### 4. Update a Todo Item
Update an existing todo item by its ID.
```bash
todo-cli update --id=<id> --text="Updated task text"
```
### 5. Mark a Todo Item as Done
Remove the first item from the todo list (mark it as done).
```bash
todo-cli done
```
6. Get the Next Todo Item
Get the next item from the todo list (the first item).
```bash
todo-cli next
```

