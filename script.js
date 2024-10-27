const calculate = () => {
    let name = document.getElementById('name').value;
    let price = Number(document.getElementById('startingBid').value);


    if (!name || !price) {
        alert("Please enter name and starting bid.");
        return;
    }

    const education = Number(document.getElementById('education').value);
    price *= education;

    const networth = Number(document.getElementById('networth').value);
    price *= networth;

    const caste = Number(document.getElementById('caste').value);
    price += caste;

    const skills = Array.from(document.getElementsByClassName('skills'));
    const skillsBonus = skills
        .filter(skill => skill.checked)
        .reduce((sum, skill) => sum + Number(skill.value), 0);
    price += skillsBonus;

    const ageRadios = document.querySelectorAll('input[name="age"]');
    ageRadios.forEach(radio => {
        if (radio.checked) {
            price *= Number(radio.value);
        }
    });

    const reputations = document.getElementsByClassName('reputation');
    for (let i = 0; i < reputations.length; i++) {
        if (reputations[i].checked) {
            price *= reputations[i].value > 0 ? reputations[i].value : 1;
            if (reputations[i].value < 0) {
                price += Number(reputations[i].value);
            }
        }
    }


    const loveLetter = document.getElementById('loveLetter').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your price for ${name} is $${price.toFixed(2)}. Here's your love letter: "${loveLetter}"</p>`;
};


document.getElementById('calculateBtn').addEventListener('click', calculate);