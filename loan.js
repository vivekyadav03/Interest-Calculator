// Function to calculate Simple Interest & Total Amount
function calcAmount() {
    // Collect input values
    const p = parseFloat(document.getElementById("pamt").value);
    const t = parseFloat(document.getElementById("time").value);
    const r = parseFloat(document.getElementById("roi").value);

    // Output elements
    const intAmt = document.getElementById("intAmt");
    const totAmt = document.getElementById("totAmt");

    // Validate input
    if (isNaN(p) || isNaN(t) || isNaN(r) || p <= 0 || t <= 0 || r <= 0) {
        intAmt.textContent = "⚠ Please enter valid positive numbers.";
        totAmt.textContent = "";
        return;
    }

    // Calculate Simple Interest & Total Amount
    const si = (p * t * r) / 100;
    const tamt = p + si;

    // Format numbers as Indian currency
    const formatter = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2
    });

    // Display results
    intAmt.textContent = "Interest Amount: " + formatter.format(si);
    totAmt.textContent = "Total Amount: " + formatter.format(tamt);
}