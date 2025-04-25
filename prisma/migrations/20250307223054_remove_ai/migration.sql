/*
  Warnings:

  - You are about to drop the `AiMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AiSummary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `AiMessage` DROP FOREIGN KEY `AiMessage_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `AiSummary` DROP FOREIGN KEY `AiSummary_createdById_fkey`;

-- DropTable
DROP TABLE `AiMessage`;

-- DropTable
DROP TABLE `AiSummary`;
