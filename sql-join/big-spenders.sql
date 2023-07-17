SELECT "amount",
       "firstName",
       "lastName"
  FROM "payments"
  JOIN "customers" USING ("customerId")
  order by "amount" desc
  limit 10;
