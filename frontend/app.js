async function send() {
  const cmd = document.getElementById('command').value;
  const res = await fetch('/jarvis_listen', { method: 'POST', body: cmd });
  document.getElementById('history').value += '\nDu: ' + cmd;
}