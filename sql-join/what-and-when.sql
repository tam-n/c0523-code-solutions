SELECT "releaseYear",
       "genres"."name" as "genre",
       "films"."title" as "movieTitle"
  FROM "films"
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId")
  WHERE "films"."title" = 'Boogie Amelie'
