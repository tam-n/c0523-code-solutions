SELECT "genres"."name",
  COUNT ("genreId")
  FROM "castmembers"
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId")
  WHERE "actorId" = 178
  GROUP BY "genreId"
