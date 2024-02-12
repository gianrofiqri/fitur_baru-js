const form = document.querySelector('#search-form');

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    // const searchQuery = form.elements.query.value;
    // const config = { params: { q: searchQuery } };

    document.querySelectorAll('img').forEach((img) => img.remove());

    const keyword = form.elements.query.value;
    const config = {
        params: { q: keyword },
    };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    showImages(res.data);
    getImages(res.data);
    form.elements.query.value = '';
});

const showImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
};