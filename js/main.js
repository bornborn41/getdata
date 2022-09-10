async function populate() {

    const requestURL = 'https://script.google.com/macros/s/AKfycbw1qI1o-xbDFGVNdo9rreIPRk3JoYNJCgDM9VvPG0JNgpiIsoFSvE4Ueq9VproYQjJnhQ/exec';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroes = await response.json();

    populateHeader(superHeroes);
    populateHeroes(superHeroes);

}