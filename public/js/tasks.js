window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	// Get current date 

	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;

	// Status

	let ON = "✅"
	let OFF = "❌"

	// Count numbers of task

	function countTasks() {
		const directChildren = list_el.children.length;
		console.log(directChildren);

		document.getElementById("total-tasks").innerHTML = directChildren

		return directChildren
	}

	setInterval(countTasks, 1000)

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');
		task_content_el.innerText = task

		task_el.appendChild(task_content_el);

		const task_date_el = document.createElement('div');
		task_date_el.classList.add('task');

		// Date 
		const task_date_content_el = document.createElement('div');
		task_date_content_el.classList.add('date');
		task_date_content_el.innerText = today

		task_el.appendChild(task_date_content_el);


		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		// Status

		const task_status_content_el = document.createElement('div');
		task_status_content_el.classList.add('status');
		task_status_content_el.innerText = ON 

		task_el.appendChild(task_status_content_el);


		const task_status_el = document.createElement('div');
		task_status_el.classList.add('actions');

		// Buttons
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';


		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});

	});
});
