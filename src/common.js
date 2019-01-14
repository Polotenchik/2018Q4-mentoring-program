export const pause = time => new Promise(resolve => setTimeout(resolve, time));

export const showError = (err) => {
    const errorBlock = document.querySelector('.error-block');
    const p = document.createElement('p');
    p.textContent = `Error ${err.messaage}. Try to reload page.`;
    errorBlock.appendChild(p);
    errorBlock.classList.add('active');
};