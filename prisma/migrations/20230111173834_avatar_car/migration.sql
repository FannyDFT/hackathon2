/*
  Warnings:

  - Added the required column `avatarUrl` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "avatarUrl" TEXT NOT NULL;
