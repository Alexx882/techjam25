const gamejamName = "Klagenfurt Game Jam, Tech Edition"
const gamejamNameAndDate = gamejamName + ", April 11-13, 2025"

const registrationFormURL = "https://forms.gle/EnbDaZPMGjjsnS3N9"
const itchIoUrl = "https://itch.io/jam/klagenfurt-game-jam-tech-edition"
const discordUrl = "https://discord.gg/4BWEHGm4nN"
const previousJamsUrl = "https://www.itec.aau.at/gamejam/"

// details for the program
const fridayDateShort = "Fr, 11.04."
const saturdayDateShort = "Sa, 12.04."
const sundayDateShort = "Sun, 13.04."
const lectureHallName = "HS 3"
const seminarRoomsName = "jam rooms" 


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
});
