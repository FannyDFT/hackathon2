-- CreateEnum
CREATE TYPE "RoleName" AS ENUM ('CLIENT', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "RoleName" NOT NULL DEFAULT 'CLIENT';
