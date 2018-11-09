export function loadFilms() {
  let films = [
      {
          id: "2",
          title: "Mamma Mia! 2",
          date: new Date(2013, 10, 2),
          rating: 8.3,
          picture: "/images/film3.jpg",
          categories: ["Комедия"]
      },
      {
          id: "4",
          title: "Django Unchained",
          date: new Date(2013, 11, 2),
          rating: 2,
          picture: "/images/iphone360_586397.jpg",
          categories: ["Комедия","Боевик"]
      },
      {
          id: "1",
          title: "Mortal Engines",
          date: new Date(2012, 11, 2),
          rating: 5,
          picture: "/images/film6.jpg",
          categories: ["Комедия","Боевик"]
      },
      {
          id: "3",
          title: "Medici: The Magnificent",
          date: new Date(2015, 11, 2),
          rating: 10,
          picture: "/images/film5.jpg",
          categories: ["Комедия","Боевик"]
      },
      {
          id: "4",
          title: "Bohemian Rhapsody",
          date: new Date(2018, 11, 1),
          rating: 7,
          picture: "/images/film4.jpg",
          categories: ["Комедия","Боевик"]
      },
      {
          id: "4",
          title: "Aquaman",
          date: new Date(2013, 11, 2),
          rating: 2,
          picture: "/images/film8.jpg",
          categories: ["Комедия","Боевик"]
      },
      {
          id: "4",
          title: "Fantastic Beasts and Where to Find Them",
          date: new Date(2013, 11, 2),
          rating: 2,
          picture: "/images/films2.jpg",
          categories: ["Комедия","Боевик"]
      }]
      .sort((a, b) => a.title.localeCompare(b.title));

  return films;
}