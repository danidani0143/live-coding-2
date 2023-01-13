
const API_ENDPOINT = 'https://yesno.wtf/api';
const btn = document.querySelector('#button');
const resEl = document.querySelector('#answer');
const inputEl = document.querySelector('#input');
const answer = [];
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

const fetchAnswer = async function () {
    const response = await fetch(API_ENDPOINT);
    const data = response.json();
    return data;
};

fetchAnswer().then((resvolve, reject) => console.log(answer.push(resvolve), reject));

btn.addEventListener('click', e => {
    e.preventDefault();
    if (!inputEl.value) return;
    resEl.innerHTML = '';
    fetchAnswer().then((resvolve, reject) => answer.push(resvolve));
    resEl.insertAdjacentHTML(
        'beforeend',
        `
      <span>
        ${answer[0].answer}
      </span>
    `
    );
    answer.length = 0;
});
