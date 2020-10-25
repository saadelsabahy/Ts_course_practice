// auto bind decorator
function autobind(
	_: any,
	_2: string,
	descriptor: PropertyDescriptor
): PropertyDescriptor {
	const { value } = descriptor;
	return {
		configurable: true,
		get() {
			return value.bind(this);
		},
	};
}
enum ProjectStatus {
	Active,
	Finished,
}
class Project {
	constructor(
		public title: string,
		public description: string,
		public people: number,
		public id: string,
		public status: ProjectStatus
	) {}
}
type Listeners = (item: Project[]) => void;
//project state
class ProjectState {
	projectItems: Project[] = [];
	private static instance: ProjectState;
	private constructor() {}
	listeners: Listeners[] = [];

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ProjectState();
		return this.instance;
	}
	addListeners(listenerFn: Listeners) {
		this.listeners.push(listenerFn);
	}
	addProject(title: string, description: string, people: number) {
		const redundancy = this.projectItems.filter(
			(item) => item.title == title
		);
		if (redundancy.length) {
			return;
		} else {
			this.projectItems.push(
				new Project(
					title,
					description,
					people,
					Math.random().toString(),
					ProjectStatus.Active
				)
			);

			for (const listenerFn of this.listeners) {
				listenerFn(
					this.projectItems.filter((project) => project.title == title)
				);
			}
		}
	}
}
const projectStates = ProjectState.getInstance();
/// projects list
class ProjectsList {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;
	assignedProjects: any[] = [];
	constructor(private type: 'active' | 'finished') {
		this.templateElement = document.getElementById(
			'project-list'
		)! as HTMLTemplateElement;
		this.hostElement = document.getElementById('app')! as HTMLDivElement;

		const importedNode = document.importNode(
			this.templateElement.content,
			true
		);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.element.id = `${type}-projects`;
		projectStates.addListeners((projects: Project[]) => {
			const relevantProjects = projects.filter((project) => {
				if (this.type == 'active') {
					return project.status === ProjectStatus.Active;
				} else {
					return project.status === ProjectStatus.Finished;
				}
			});
			this.assignedProjects = relevantProjects;
			this.renderProjects();
		});

		this.renderContent();
		this.attach();
	}
	private renderProjects() {
		const listEl = document.getElementById(
			`${this.type}-projects-list`
		)! as HTMLLIElement;
		for (const projectItem of this.assignedProjects) {
			const listItem = document.createElement('li');
			listItem.textContent = projectItem.title;
			listEl.appendChild(listItem);
		}
	}
	private renderContent() {
		const listId = `${this.type}-projects-list`;
		this.element.querySelector('ul')!.id = listId;
		this.element.querySelector('h2')!.textContent =
			this.type.toUpperCase() + 'PROJECTS';
	}
	private attach() {
		this.hostElement.insertAdjacentElement('beforeend', this.element);
	}
}

//inputs
class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;
	constructor() {
		this.templateElement = document.getElementById(
			'project-input'
		)! as HTMLTemplateElement;
		this.hostElement = document.getElementById('app')! as HTMLDivElement;

		const importedNode = document.importNode(
			this.templateElement.content,
			true
		);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.element.id = 'user-input';
		this.titleInputElement = this.element.querySelector(
			'#title'
		) as HTMLInputElement;
		this.descriptionInputElement = this.element.querySelector(
			'#description'
		) as HTMLInputElement;
		this.peopleInputElement = this.element.querySelector(
			'#people'
		) as HTMLInputElement;
		this.handleSubmit();
		this.attach();
	}
	private resettingInputs() {
		this.titleInputElement.value = '';
		this.descriptionInputElement.value = '';
		this.peopleInputElement.value = '';
	}
	private validateInputs(): [string, string, number] | undefined {
		const titleVal = this.titleInputElement.value;
		const descriptionVal = this.descriptionInputElement.value;
		const peopleVal = this.peopleInputElement.value;
		if (
			!titleVal.trim().length ||
			!descriptionVal.trim().length ||
			!peopleVal.trim().length
		) {
			alert('please enter valid values and try again');
			return;
		} else {
			console.log({ titleVal, descriptionVal, peopleVal });
			projectStates.addProject(titleVal, descriptionVal, +peopleVal);
			this.resettingInputs();
			return [titleVal, descriptionVal, +peopleVal];
		}
	}
	@autobind
	private onSubmmit(event: Event) {
		event.preventDefault();
		this.validateInputs();

		// console.log(
		// 	this.titleInputElement.value,
		// 	this.peopleInputElement.value,
		// 	this.descriptionInputElement.value
		// );
	}
	@autobind
	private handleSubmit() {
		this.element.addEventListener('submit', this.onSubmmit);
	}
	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	}
}

const prjInput = new ProjectInput();
const activeList = new ProjectsList('active');
const finishedList = new ProjectsList('finished');
