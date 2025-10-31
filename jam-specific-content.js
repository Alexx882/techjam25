const gamejamName = "Klagenfurt Game Jam, 2nd Tech Edition"
const gamejamNameAndDate = gamejamName + ", November 28-30, 2025"

const registrationFormURL = "https://forms.gle/PWPVK1pNyvCJ6iVj8"
const itchIoUrl = "https://itch.io/jam/klagenfurt-game-jam-2nd-tech-edition"
const discordUrl = "https://discord.gg/4BWEHGm4nN"
const previousJamsUrl = "https://www.itec.aau.at/gamejam/"

// details for the program
const showJamProgramDetails = true;

const fridayDateShort = "Fr, 28.11."
const saturdayDateShort = "Sa, 29.11."
const sundayDateShort = "Sun, 30.11."
const lectureHallName = "tba"
const seminarRoomsName = "tba" 



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.placeholder-jam-title').forEach(el => el.textContent = gamejamName);
    document.querySelectorAll('.placeholder-carousel-jam-title').forEach(el => el.textContent = gamejamName);
    document.querySelectorAll('.placeholder-jam-title-date').forEach(el => el.textContent = gamejamNameAndDate);

    document.querySelectorAll('.placeholder-registration-form-url').forEach(el => el.href = registrationFormURL);
    document.querySelectorAll('.placeholder-itch-io-url').forEach(el => el.href = itchIoUrl);
    document.querySelectorAll('.placeholder-discord-url').forEach(el => el.href = discordUrl);
    document.querySelectorAll('.placeholder-previous-jams-url').forEach(el => el.href = previousJamsUrl);

    document.querySelectorAll('.placeholder-jam-date-friday').forEach(el => el.textContent = fridayDateShort);
    document.querySelectorAll('.placeholder-jam-date-saturday').forEach(el => el.textContent = saturdayDateShort);
    document.querySelectorAll('.placeholder-jam-date-sunday').forEach(el => el.textContent = sundayDateShort);
    document.querySelectorAll('.placeholder-lecture-hall-name').forEach(el => el.textContent = lectureHallName);
    document.querySelectorAll('.placeholder-seminar-rooms-name').forEach(el => el.textContent = seminarRoomsName);

    document.querySelectorAll('.program-table').forEach(el => { el.style.display = showJamProgramDetails ? 'table' : 'none'; });
});
