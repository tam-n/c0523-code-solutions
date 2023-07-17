SELECT "customers"."firstName",
       "customers"."lastName"
  FROM "customers"
  JOIN "rentals" USING ('customerId')
  JOIN "inventory" USING ('inventoryId')
  WHERE "filmId" = (547)
