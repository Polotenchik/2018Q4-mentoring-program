export const promiseDelay = (time,data) => {
    new Promise(res => setTimeout(() => res(data), data));
};

export const showError = (err) => {
    const errorBlock = document.querySelector('error-block');
    const p = document.createElement('p');
    p.textContent = `Error ${err.messaage}. Try to reload page.`;
    errorBlock.prepend(p);
    errorBlock.classList.add('active');
};