-- AlterTable
ALTER TABLE `User` ADD COLUMN `isMentor` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `UserTechnology` ADD COLUMN `isMentor` BOOLEAN NOT NULL DEFAULT false;
