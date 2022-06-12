const currentDateSpan = document.querySelector('#current-date');

function renderCurrentDate(element) {
    let date = new Date();
    let dayNumber = date.getDate()
    let dayName = date.getDay();
    dayName = weekDays[dayName-1];
    let monthName = date.getMonth();
    monthName = months[monthName-1];
    let year = date.getFullYear();

    element.textContent = `${dayName}, ${dayNumber} ${monthName} ${year} roku`
}

const weekDays = [
    "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"
];

const months = [
    "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września",
    "października", "listopada", "grudnia"
];

renderCurrentDate(currentDateSpan);