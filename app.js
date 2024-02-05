const animes = [{
        title: 'naruto',
        rating: 89,
        year: 1998,
    },
    {
        title: 'tang san',
        rating: 90,
        year: 2020,
    },
    {
        title: 'hunter',
        rating: 81,
        year: 2021,
    },
    {
        title: 'boruto',
        rating: 83,
        year: 2010,
    },
]

const anime = animes.map(({ title, year, rating }) => {
    return `${title}(${year}) rating ${rating}`;
})