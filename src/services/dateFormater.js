function getMonthName(month) {
    const monthNames = [
        "jan.", "fev.", "mar.", "abr.", "mai.", "jun.",
        "jul.", "ago.", "set.", "out.", "nov.", "dez."
    ];

    return monthNames[month];
}

function formatDate(date) {
    if(!date) return;

    const formatedDate = new Date(date);

    const monthName = getMonthName(formatedDate.getMonth());

    return `${ formatedDate.getDate() } de ${ monthName } de ${ formatedDate.getFullYear() }`;
}

export { formatDate };