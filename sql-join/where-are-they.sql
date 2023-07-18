SELECT "line1" as "address",
       "cities"."name" as "cityName",
       "district"
  FROM "addresses"
  JOIN "cities" USING ("cityId")
