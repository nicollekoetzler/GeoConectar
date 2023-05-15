export function showPopupErrorMessage(message, setError) {
  setError(message);
  setTimeout(() => setError(""), 1000);
}