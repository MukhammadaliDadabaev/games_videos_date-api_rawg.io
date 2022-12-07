// API-key -> f41c7aa3dce94a6695982957330c72f2
// API
const api_key = "f41c7aa3dce94a6695982957330c72f2";
// Base Url
const base_url = "https://api.rawg.io/api/";

// Getting current dates
// MONTH
const getMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  else return month;
};
// DAY
const getDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  else return day;
};
// YEAR va VARIABLES
const currentYear = new Date().getFullYear();
const currentMonth = getMonth();
const currentDay = getDay();
// Current-Date ALL
// NOW
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// LAST-YEAR
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// NEXT-YEAR
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// POPULAR GAMES
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// UPCOMING GAMES
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// NEW GAMES
const new_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// ALL-GAMES_API-FUNC
export const popularGamesURL = () => `${base_url}${popular_games}`;

// NEXT-GAMES_API-FUNC
export const upconingGamesURL = () => `${base_url}${upcoming_games}`;

// NEW-GAMES_API-FUNC
export const newGamesURL = () => `${base_url}${new_games}`;
