function submitData() {
    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;
    let combo = document.getElementById('combobox').value;
    let radios = document.getElementsByName('radio');
    let radioValue;
    for (let radio of radios) {
        if (radio.checked) {
            radioValue = radio.value;
            break;
        }
    }

    let checkboxes = document.getElementsByName('checkbox');
    let selectedPrograms = [];
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            selectedPrograms.push(checkbox.value);
        }
    }

    if (text1 && text2 && combo && radioValue && selectedPrograms.length > 0) {
        let output = `
            <p>Ime: ${text1}</p>
            <p>Prezime: ${text2}</p>
            <p>Grad: ${combo}</p>
            <p>Programi: ${selectedPrograms.join(', ')}</p>
            <p>Service: ${radioValue}</p>
        `;
        document.getElementById('output').innerHTML = output;
        document.getElementById('mainForm').reset();
        createButton();
    } else {
        alert('Molimo popunite sva polja i izvršite izbor.');
    }
}

function resetForm() {
    document.getElementById('mainForm').reset();
    document.getElementById('output').innerHTML = '';
    document.getElementById('button_part').innerHTML = '';
    document.getElementById('css_indexID').setAttribute("href", "style2.css");
}

function createButton() {
    let btn = document.createElement("button");
    btn.innerHTML = "Click me";
    btn.onclick = function () {
        document.getElementById("css_indexID").setAttribute("href", "style1.css");
    }
    document.getElementById("button_part").appendChild(btn);
}