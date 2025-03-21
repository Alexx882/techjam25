const gamejamName = "Klagenfurt Game Jam, Tech Edition"
const gamejamNameAndDate = gamejamName + ", April 11-13, 2025"
const registrationFormURL = "https://forms.gle/EnbDaZPMGjjsnS3N9"
const itchIoUrl = "https://itch.io/jam/klagenfurt-game-jam-tech-edition"
const discordUrl = "https://discord.gg/4BWEHGm4nN"
const previousJamsUrl = "https://www.itec.aau.at/gamejam/"

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.placeholder-jam-title').forEach(el => el.textContent = gamejamName);
    document.querySelectorAll('.placeholder-carousel-jam-title').forEach(el => el.textContent = gamejamName);
    document.querySelectorAll('.placeholder-jam-title-date').forEach(el => el.textContent = gamejamNameAndDate);
    document.querySelectorAll('.placeholder-registration-form-url').forEach(el => el.href = registrationFormURL);
    document.querySelectorAll('.placeholder-itch-io-url').forEach(el => el.href = itchIoUrl);
    document.querySelectorAll('.placeholder-discord-url').forEach(el => el.href = discordUrl);
    document.querySelectorAll('.placeholder-previous-jams-url').forEach(el => el.href = previousJamsUrl);
});
