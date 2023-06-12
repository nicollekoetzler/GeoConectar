function getAbbrevMonthName(month) {
    const monthNames = [
        "jan.", "fev.", "mar.", "abr.", "mai.", "jun.",
        "jul.", "ago.", "set.", "out.", "nov.", "dez."
    ];

    return monthNames[month];
}

function getMonthName(month) {
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    return monthNames[month];
}

function formatDate(date, type) {
    if(!date) return;

    const formatedDate = new Date(date);
    
    let monthName;

    if(type === "full-month") {
        monthName = getMonthName(formatedDate.getMonth())
    } else if(type === "abbrev-month") {
        monthName = getAbbrevMonthName(formatedDate.getMonth())
    }

    return `${ formatedDate.getDate() } de ${ monthName } de ${ formatedDate.getFullYear() }`;
}

export { formatDate };