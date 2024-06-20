const gstStateCodes = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38'
];


const calculateChecksum = (gstWithoutChecksum) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let factor = 1;
    let sum = 0;
    const mod = chars.length;

    for (let i = gstWithoutChecksum.length - 1; i >= 0; i--) {
    const codePoint = chars.indexOf(gstWithoutChecksum[i]);
    const addend = factor * codePoint;

    // Alternate the factor between 1 and 2
    factor = (factor === 2) ? 1 : 2;

    // Sum the digits of the addend as expressed in base mod
    sum += Math.floor(addend / mod) + (addend % mod);
    }

    // Calculate the checksum character
    const remainder = sum % mod;
    const checkCodePoint = (mod - remainder) % mod;

    return chars[checkCodePoint];
};

    
const validateGSTIN = (gstin) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
    if (!gstRegex.test(gstin)) {
    return false;
    }

    // Validate state code
    const stateCode = gstin.slice(0, 2);
    if (!gstStateCodes.includes(stateCode)) {
    return false;
    }

    // Validate checksum
    const gstWithoutChecksum = gstin.slice(0, 14);
    const checksumChar = gstin[14];
    const checksum = calculateChecksum(gstWithoutChecksum);
    if (checksumChar !== checksum) {
    return false;
    }

    return true;
};

export default validateGSTIN;