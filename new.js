const diseases = JSON.parse(localStorage.getItem('diseases')) || {
    "Hipertensão": ["Captopril 25mg", "Losartana 50mg", "Hidroclorotiazida 25mg"],
    "Diabetes": ["Metformina 500mg", "Insulina 100UI/ml", "Glibenclamida 5mg"],
    "Asma": ["Salbutamol 100mcg", "Budesonida 200mcg", "Ipratrópio 0.5mg"],
    "Infecção Urinária": ["Nitrofurantoína 100mg", "Ciprofloxacina 500mg", "Sulfametoxazol+Trimetoprima 800/160mg"],
    "Enxaqueca": ["Sumatriptano 50mg", "Propranolol 40mg", "Amitriptilina 25mg"]
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const diseaseSelect = document.getElementById('diseaseSelect');
    const newDiseaseInput = document.getElementById('newDisease');
    const medicationNameInput = document.getElementById('medicationName');
    const addMedicationForm = document.getElementById('addMedicationForm');
  
    // Popula o select com as doenças existentes
    for (const disease in diseases) {
      const option = document.createElement('option');
      option.value = disease;
      option.textContent = disease;
      diseaseSelect.appendChild(option);
    }
  
    addMedicationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const selectedDisease = diseaseSelect.value;
      const newDisease = newDiseaseInput.value.trim();
      const medicationName = medicationNameInput.value.trim();
  
      if (!medicationName) {
        alert('Por favor, insira o nome da medicação.');
        return;
      }
  
      if (!selectedDisease && !newDisease) {
        alert('Por favor, escolha uma doença ou adicione uma nova.');
        return;
      }
  
      const disease = newDisease || selectedDisease;
  
      if (!diseases[disease]) {
        diseases[disease] = [];
      }
  
      diseases[disease].push(medicationName);
      localStorage.setItem('diseases', JSON.stringify(diseases));
      alert('Medicação adicionada com sucesso!');
      window.location.href = 'popup.html';
    });
  });
  