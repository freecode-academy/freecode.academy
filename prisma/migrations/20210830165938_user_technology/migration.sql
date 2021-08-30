/*
  Warnings:

  - A unique constraint covering the columns `[CreatedBy,Technology]` on the table `UserTechnology` will be added. If there are existing duplicate values, this will fail.
  - Made the column `CreatedBy` on table `UserTechnology` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Technology` on table `UserTechnology` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `UserTechnology` DROP FOREIGN KEY `UserTechnology_ibfk_1`;

-- DropForeignKey
ALTER TABLE `UserTechnology` DROP FOREIGN KEY `UserTechnology_ibfk_2`;

-- AlterTable
ALTER TABLE `UserTechnology` ADD COLUMN `hiring_status` ENUM('Active', 'Neutral', 'Negative'),
    MODIFY `CreatedBy` VARCHAR(32) NOT NULL,
    MODIFY `Technology` VARCHAR(32) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `UserTechnology.CreatedBy_Technology_unique` ON `UserTechnology`(`CreatedBy`, `Technology`);

-- AddForeignKey
ALTER TABLE `UserTechnology` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTechnology` ADD FOREIGN KEY (`Technology`) REFERENCES `Technology`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
