document.addEventListener('DOMContentLoaded', function () {
    const reasonSelect = document.getElementById('reason');
    const fileInputContainer = document.getElementById('file-input-container');
    const additionalComboFields = document.getElementById('additional-combo-fields');

    function toggleFields() {
        if (reasonSelect.value === 'new_kombo') {
            fileInputContainer.style.display = 'block';
            additionalComboFields.style.display = 'block';
        } else {
            fileInputContainer.style.display = 'none';
            additionalComboFields.style.display = 'none';
        }
    }

    reasonSelect.addEventListener('change', toggleFields);
    toggleFields(); // Call on initial load
});
