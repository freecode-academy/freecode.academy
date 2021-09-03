/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `CreatedBy` on table `Gallery` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `TaskReaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `TaskTechnology` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `Team` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `TeamMember` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Technology` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `Technology` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Technology` on table `TechnologyLesson` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `TechnologyLesson` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Lesson` on table `TechnologyLessonUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `TechnologyLessonUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `Template` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `Tournament` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `TournamentGroup` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `Tourney` required. This step will fail if there are existing NULL values in that column.
  - Made the column `User` on table `Vote` required. This step will fail if there are existing NULL values in that column.
  - Made the column `CreatedBy` on table `World` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Gallery` DROP FOREIGN KEY `Gallery_ibfk_1`;

-- DropForeignKey
ALTER TABLE `TaskReaction` DROP FOREIGN KEY `TaskReaction_ibfk_1`;

-- DropForeignKey
ALTER TABLE `TaskTechnology` DROP FOREIGN KEY `TaskTechnology_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Team` DROP FOREIGN KEY `Team_ibfk_1`;

-- DropForeignKey
ALTER TABLE `TeamMember` DROP FOREIGN KEY `TeamMember_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Technology` DROP FOREIGN KEY `Technology_ibfk_1`;

-- DropForeignKey
ALTER TABLE `TechnologyLesson` DROP FOREIGN KEY `TechnologyLesson_ibfk_1`;

-- DropForeignKey
ALTER TABLE `TechnologyLesson` DROP FOREIGN KEY `TechnologyLesson_ibfk_2`;

-- DropForeignKey
ALTER TABLE `TechnologyLessonUser` DROP FOREIGN KEY `TechnologyLessonUser_ibfk_1`;

-- DropForeignKey
ALTER TABLE `TechnologyLessonUser` DROP FOREIGN KEY `TechnologyLessonUser_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Template` DROP FOREIGN KEY `Template_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Test` DROP FOREIGN KEY `Test_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Tournament` DROP FOREIGN KEY `Tournament_ibfk_1`;

-- DropForeignKey
ALTER TABLE `TournamentGroup` DROP FOREIGN KEY `TournamentGroup_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Tourney` DROP FOREIGN KEY `Tourney_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Vote` DROP FOREIGN KEY `Vote_ibfk_2`;

-- DropForeignKey
ALTER TABLE `World` DROP FOREIGN KEY `World_ibfk_1`;

-- AlterTable
ALTER TABLE `Gallery` MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `TaskReaction` MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `TaskTechnology` MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `Team` MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `TeamMember` MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `Technology` MODIFY `name` MEDIUMTEXT NOT NULL,
    MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `TechnologyLesson` MODIFY `Technology` VARCHAR(32) NOT NULL,
    MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `TechnologyLessonUser` MODIFY `Lesson` VARCHAR(32) NOT NULL,
    MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `Template` MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `Tournament` MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `TournamentGroup` MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `Tourney` MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `Vote` MODIFY `User` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `World` MODIFY `CreatedBy` VARCHAR(32) NOT NULL;

-- DropTable
DROP TABLE `Test`;

-- AddForeignKey
ALTER TABLE `Gallery` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskReaction` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskTechnology` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Team` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamMember` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Technology` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TechnologyLesson` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TechnologyLesson` ADD FOREIGN KEY (`Technology`) REFERENCES `Technology`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TechnologyLessonUser` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TechnologyLessonUser` ADD FOREIGN KEY (`Lesson`) REFERENCES `TechnologyLesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Template` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tournament` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TournamentGroup` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tourney` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD FOREIGN KEY (`User`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `World` ADD FOREIGN KEY (`CreatedBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
