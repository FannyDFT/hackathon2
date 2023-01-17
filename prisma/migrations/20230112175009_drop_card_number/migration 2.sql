/*
  Warnings:

  - You are about to drop the column `cardNumber` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "cardNumber",
ALTER COLUMN "birthDate" DROP NOT NULL,
ALTER COLUMN "licence" DROP NOT NULL;
