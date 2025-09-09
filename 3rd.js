function calculateKenyaNetSalary(grossSalary) {
    const nssfTier1LEL = 8000; 
    const nssfTier2UEL = 72000; 
    const nssfRate = 0.06; 

    let nssfContribution = 0;
    if (grossSalary <= nssfTier1LEL) {
        nssfContribution = grossSalary * nssfRate;
    } else if (grossSalary <= nssfTier2UEL) {
        nssfContribution = (nssfTier1LEL * nssfRate)                                            
        ((grossSalary - nssfTier1LEL) * nssfRate);
    } else {
        nssfContribution = (nssfTier1LEL * nssfRate) +
        ((nssfTier2UEL - nssfTier1LEL) * nssfRate); 
    }

    const shifRate = 0.0275; 
    const shifMinimum = 300; 
    let shifContribution = Math.max(grossSalary * shifRate, shifMinimum);

    const housingLevyRate = 0.015; 
    let housingLevy = grossSalary * housingLevyRate;

    let taxableIncome = grossSalary - nssfContribution - shifContribution - housingLevy;

    
    let payeTax = 0;
    const personalRelief = 2400; 

    if (taxableIncome <= 24000) {
        payeTax = taxableIncome * 0.10;
    }

    else if (taxableIncome <= 32333) {
        payeTax = (24000 * 0.10) + ((taxableIncome - 24000) * 0.25);
    }

    else if (taxableIncome <= 500000) {
        payeTax = (24000 * 0.10) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.30);
    }

    else if (taxableIncome <= 800000) {
        payeTax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((taxableIncome - 500000) * 0.325);
    }

    else {
        payeTax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((taxableIncome - 800000) * 0.35);
    }

    let totalDeductions = nssfContribution + shifContribution + housingLevy + payeTax;

    let netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary,
        nssfContribution: nssfContribution,
        shifContribution: shifContribution,
        housingLevy: housingLevy,
        payeTax: payeTax,
        totalDeductions: totalDeductions,
        netSalary: netSalary
    };
}

