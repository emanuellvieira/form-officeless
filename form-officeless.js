(function() {
    function getParam(name) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.has(name) ? urlParams.get(name) : 'unknown';
    }

    function appendHiddenFields(form) {
        let fields = [
            {name: 'utm_source', id: 83},
            {name: 'utm_medium', id: 84},
            {name: 'utm_campaign', id: 85},
            {name: 'utm_term', id: 86},
            {name: 'utm_content', id: 87},
            {name: 'ofc_source', id: 212},
            {name: 'ofc_medium', id: 213},
            {name: 'ofc_campaign', id: 214},
            {name: 'ofc_term', id: 215},
            {name: 'ofc_content', id: 216},
            {name: 'current_url', id: 228, value: window.location.href}
        ];
        fields.forEach(field => {
            if (!form.querySelector('#' + field.name)) {
                let input = document.createElement('input');
                input.type = 'hidden';
                input.name = 'field[' + field.id + ']';
                input.id = field.name;
                input.value = field.value || getParam(field.name.replace('ofc_', 'utm_'));
                form.appendChild(input);
            }
        });
    }

    document.querySelectorAll('form[data-track]').forEach(form => {
        appendHiddenFields(form);
    });
})();