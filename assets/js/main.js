const cookieStorage = {
  getItem: (key) => {
    const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {})

    return cookies[key];
  },
  setItem: (key, value) => {
    document.cookie = `${key}=${value}`;
  }
}

const storageType = cookieStorage;

const key = 'tkey'

const shouldShowPopup = () => !storageType.getItem(key);
const saveToStorage = () => storageType.setItem(key, true);

window.onload = () => {
  const disAllowBtn = document.getElementById('dis-allow');
  const allowBtn = document.getElementById('allow');
  const cookieBox = document.getElementById('cookie-box');

  if (shouldShowPopup()) {

    if (!sessionStorage.getItem(key)) {
      setTimeout(() => {
        cookieBox.classList.add('in');
      }, 1500);
    }

    allowBtn.addEventListener('click', () => {
      saveToStorage();
      cookieBox.classList.remove('in');
    });

    disAllowBtn.addEventListener('click', () => {
      cookieBox.classList.remove('in');
      sessionStorage.setItem(key, true);
    });
  }
};