const WEEKDAY = [
    "Sunnuntai",
    "Maanantai",
    "Tiistai",
    "Keskiviikko",
    "Torstai",
    "Perjantai",
    "Lauantai"
];

export const getWeekday = (day, month, year = 2021) => {

    const d = new Date(year, month, day);
    let dayOfWeek = d.getDay();

    return WEEKDAY[dayOfWeek];
}