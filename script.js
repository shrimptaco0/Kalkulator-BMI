document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightInCm = parseFloat(document.getElementById('height').value);
    
    if (weight > 0 && heightInCm > 0) {
        // Mengonversi tinggi badan dari cm ke m
        const heightInM = heightInCm / 100;
        const bmi = weight / (heightInM * heightInM);
        let category = '';

        if (bmi < 18.5) {
            category = 'Kekurangan berat badan';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Berat badan normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Kelebihan berat badan';
        } else {
            category = 'Kegemukan (Obesitas)';
        }

        document.getElementById('result').innerText = `BMI Anda: ${bmi.toFixed(2)} - ${category}`;
    } else {
        document.getElementById('result').innerText = 'Silakan masukkan nilai yang valid.';
    }
});