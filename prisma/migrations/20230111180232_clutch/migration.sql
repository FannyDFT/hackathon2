/*
  Warnings:

  - Added the required column `clutch` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeClutch" AS ENUM ('MANUAL', 'AUTOMATIC');

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "clutch" "TypeClutch" NOT NULL;
