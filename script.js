async function fetch_data() {
    const barcode_id = document.getElementById('barcode').value;  
    if (!barcode_id) {
        window.alert('Please enter a valid barcode ID');
        return;
    }

    try {
        const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode_id}`);
        if (!response.ok) {
            throw new Error("Item not found");
        } else {
            const data = await response.json();

            // Extract product information
            const productName = data.product.product_name || "N/A";
            const ingredients = data.product.ingredients_text || "No ingredients listed";
            const allergens = data.product.allergens_tags.join(", ") || "No allergens listed";
            const nutritionE = data.product.nutriments["energy-kcal"] || "Data not available";
            const nutritionP = data.product.nutriments.proteins_100g || "Data not available";
            const nutritionF = data.product.nutriments.fat_100g || "Data not available";
            const nutritionC = data.product.nutriments.carbohydrates_100g || "Data not available";
            const nutritionS = data.product.nutriments.sugars_100g || "Data not available";
            const nutritionSalt = data.product.nutriments.salt_100g || "Data not available";

            
            document.querySelector('#info1 .dynamic-content').textContent = productName;
document.querySelector('#info2 .dynamic-content').textContent = ingredients;
document.querySelector('#info3 .dynamic-content').textContent = allergens;
document.querySelector('#info4 .dynamic-content').textContent = `${nutritionE} kcal`;
document.querySelector('#info5 .dynamic-content').textContent = `${nutritionP} g per 100g`;
document.querySelector('#info6 .dynamic-content').textContent = `${nutritionF} g per 100g`;
document.querySelector('#info7 .dynamic-content').textContent = `${nutritionC} g per 100g`;
document.querySelector('#info8 .dynamic-content').textContent = `${nutritionS} g per 100g`;
document.querySelector('#info9 .dynamic-content').textContent = `${nutritionSalt} g per 100g`;

        }
    } catch (error) {
        window.alert(error.message);
    }
}
