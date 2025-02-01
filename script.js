document.getElementById('revealMessageBtn').addEventListener('click', function() {
    var message = document.getElementById('revealMessage');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
});
