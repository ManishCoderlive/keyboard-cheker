document.addEventListener('DOMContentLoaded', function () {
    let pressedKey;

    document.addEventListener('keyup', function (event) {
        pressedKey = event.key.toLowerCase(); // Convert to lowercase for case-insensitivity
        // console.log(pressedKey);
        check();
    });
    
    function check() {
        var keys = document.querySelectorAll('.key');

        keys.forEach(function (key) {
            const keyId = key.id;
            
            if (keyId === pressedKey) {
                key.classList.add('selected');
            } else {
                key.classList.remove('selected');
            }
        });
    }
});
