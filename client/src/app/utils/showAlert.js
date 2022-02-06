export const showAlert = (content, timeout = 5000) => {
  const modal = document.getElementById('alert');

  modal.textContent = content;
  modal.removeAttribute('hidden');

  setTimeout(() => {
    modal.setAttribute('hidden', true);
    modal.textContent = '';
  }, timeout);
};

export default showAlert;
