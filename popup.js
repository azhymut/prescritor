const diseases = JSON.parse(localStorage.getItem('diseases')) || {
  "Hipertensão": ["Captopril 25mg", "Losartana 50mg", "Hidroclorotiazida 25mg"],
  "Diabetes": ["Metformina 500mg", "Insulina 100UI/ml", "Glibenclamida 5mg"],
  "Asma": ["Salbutamol 100mcg", "Budesonida 200mcg", "Ipratrópio 0.5mg"],
  "Infecção Urinária": ["Nitrofurantoína 100mg", "Ciprofloxacina 500mg", "Sulfametoxazol+Trimetoprima 800/160mg"],
  "Enxaqueca": ["Sumatriptano 50mg", "Propranolol 40mg", "Amitriptilina 25mg"]
};

document.addEventListener('DOMContentLoaded', () => {
  const diseasesDiv = document.getElementById('diseases');
  const medicationsDiv = document.getElementById('medications');
  const medicationList = document.getElementById('medicationList');
  const backButton = document.getElementById('backButton');

  // Botão Novo
  const newButton = document.getElementById('newButton');
  newButton.addEventListener('click', () => {
    window.location.href = 'new.html';
  });

  for (const [disease, meds] of Object.entries(diseases)) {
    const diseaseButton = document.createElement('button');
    diseaseButton.textContent = disease;
    diseaseButton.className = 'disease-button';
    diseaseButton.addEventListener('click', () => {
      showMedications(disease);
    });
    diseasesDiv.appendChild(diseaseButton);
  }

  backButton.addEventListener('click', () => {
    diseasesDiv.style.display = 'block';
    medicationsDiv.style.display = 'none';
  });

  function showMedications(disease) {
    diseasesDiv.style.display = 'none';
    medicationsDiv.style.display = 'block';
    medicationList.innerHTML = '';
    diseases[disease].forEach(med => {
      const medButton = document.createElement('button');
      medButton.textContent = med;
      medButton.className = 'medication-button';
      medButton.addEventListener('click', () => {
        navigator.clipboard.writeText(med).then(() => {
          alert(`${med} copiado para a área de transferência.`);
        });
      });
      medicationList.appendChild(medButton);
    });
  }
});
