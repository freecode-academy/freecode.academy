/*
  Warnings:

  - You are about to drop the `_RelatedTasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_RelatedTasks` DROP FOREIGN KEY `_RelatedTasks_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_RelatedTasks` DROP FOREIGN KEY `_RelatedTasks_ibfk_2`;

-- AlterTable
ALTER TABLE `Task` ADD COLUMN `projectId` VARCHAR(32) NULL,
    MODIFY `content` MEDIUMTEXT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `content` MEDIUMTEXT NOT NULL DEFAULT '',
    MODIFY `intro` TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `_RelatedTasks`;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- Migrate old data
UPDATE `Task` as t 
  INNER join `ProjectTask` as pt on pt.Task = t.id 
  SET t.projectId = pt.Project
    where t.projectId is null;
