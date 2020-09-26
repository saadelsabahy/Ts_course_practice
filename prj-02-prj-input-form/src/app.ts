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
