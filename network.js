let type = navigator.connection.effectiveType;

function updateConnectionStatus() {
  console.log(`Connection type changed from ${type} to ${navigator.connection.effectiveType}`);
  type = navigator.connection.effectiveType;
}

navigator.connection.addEventListener('change', updateConnectionStatus);

