export default function getWeekDay(locationTimezone) {
    const locationDate = new Date().toLocaleString("default", { timeZone: locationTimezone });

    // Get the numeric representation of the day of the week (0-6, where 0 is Sunday)
    const weekdayIndex = new Date(locationDate).getDay();

    // Map the numeric representation to the corresponding weekday name
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekdayName = weekdays[weekdayIndex];
    console.log(weekdayName)

    return weekdayName;
}