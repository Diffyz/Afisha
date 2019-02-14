const IS_DEVELOPMENT = false;
const KINO_AFISHA_DOMAIN = 'https://kinoafisha';
const FULL_URL_KINO_AFISHA = `${KINO_AFISHA_DOMAIN}.ua`;
const PORT_KINO_AFISHA_API = '9000';
const DEVELOPMENT_API = `http://localhost:${PORT_KINO_AFISHA_API}/api/`;
const RELEASE_API = `${KINO_AFISHA_DOMAIN}.herokuapp.com/api/`;
const DOMAIN_NAME = IS_DEVELOPMENT ? DEVELOPMENT_API : RELEASE_API;
const NOT_FOUND_URI = '/not-found';
const SCHEDULE_URI = '/schedule';

export { DOMAIN_NAME, FULL_URL_KINO_AFISHA,NOT_FOUND_URI,SCHEDULE_URI };
