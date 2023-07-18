SELECT "customers"."firstName",
       "customers"."lastName",
  sum ("payments"."amount") as "total"
  FROM "customers"
  JOIN "rentals" USING ("customerId")
  JOIN "payments" USING ("rentalId")
  GROUP BY "payments"."amount", "customers"."firstName", "customers"."lastName"
