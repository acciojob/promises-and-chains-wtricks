//your JS code here. If required.
const form = document.getElementById('myForm');
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');
const submitBtn = document.getElementById('btn');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const age = parseInt(ageInput.value);
    const name = nameInput.value;

    if (!age || isNaN(age) || !name) {
        alert('Both age and name are required fields.');
        return;
    }

    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    alert(`Welcome, ${name}. You can vote.`);
                    resolve('You can vote.');
                } else {
                    alert(`Oh sorry ${name}. You aren't old enough.`);
                    reject('You aren\'t old enough.');
                }
            }, 4000);
        });

        console.log(result);
    } catch (error) {
        console.error(error);
    }
});
