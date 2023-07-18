SELECT "actors"."firstName",
       "actors"."lastName"
  FROM "castMembers"
  JOIN "actors" using ("actorId")
  JOIN "films" using ("filmId")
  Where "title" = ('Jersey Sassy')
