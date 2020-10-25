"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(_, _2, descriptor) {
    const { value } = descriptor;
    return {
        configurable: true,
        get() {
            return value.bind(this);
        },
    };
}
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(title, description, people, id, status) {
        this.title = title;
        this.description = description;
        this.people = people;
        this.id = id;
        this.status = status;
    }
}
class ProjectState {
    constructor() {
        this.projectItems = [];
        this.listeners = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addListeners(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addProject(title, description, people) {
        const redundancy = this.projectItems.filter((item) => item.title == title);
        if (redundancy.length) {
            return;
        }
        else {
            this.projectItems.push(new Project(title, description, people, Math.random().toString(), ProjectStatus.Active));
            for (const listenerFn of this.listeners) {
                listenerFn(this.projectItems.filter((project) => project.title == title));
            }
        }
    }
}
const projectStates = ProjectState.getInstance();
class ProjectsList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${type}-projects`;
        projectStates.addListeners((projects) => {
            const relevantProjects = projects.filter((project) => {
                if (this.type == 'active') {
                    return project.status === ProjectStatus.Active;
                }
                else {
                    return project.status === ProjectStatus.Finished;
                }
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
        this.renderContent();
        this.attach();
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        for (const projectItem of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = projectItem.title;
            listEl.appendChild(listItem);
        }
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent =
            this.type.toUpperCase() + 'PROJECTS';
    }
    attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.handleSubmit();
        this.attach();
    }
    resettingInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    validateInputs() {
        const titleVal = this.titleInputElement.value;
        const descriptionVal = this.descriptionInputElement.value;
        const peopleVal = this.peopleInputElement.value;
        if (!titleVal.trim().length ||
            !descriptionVal.trim().length ||
            !peopleVal.trim().length) {
            alert('please enter valid values and try again');
            return;
        }
        else {
            console.log({ titleVal, descriptionVal, peopleVal });
            projectStates.addProject(titleVal, descriptionVal, +peopleVal);
            this.resettingInputs();
            return [titleVal, descriptionVal, +peopleVal];
        }
    }
    onSubmmit(event) {
        event.preventDefault();
        this.validateInputs();
    }
    handleSubmit() {
        this.element.addEventListener('submit', this.onSubmmit);
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "onSubmmit", null);
__decorate([
    autobind
], ProjectInput.prototype, "handleSubmit", null);
const prjInput = new ProjectInput();
const activeList = new ProjectsList('active');
const finishedList = new ProjectsList('finished');
//# sourceMappingURL=app.js.map