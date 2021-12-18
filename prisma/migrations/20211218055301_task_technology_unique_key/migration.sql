/*
  Warnings:

  - A unique constraint covering the columns `[Task,Technology]` on the table `TaskTechnology` will be added. If there are existing duplicate values, this will fail.

*/

-- CreateIndex
CREATE UNIQUE INDEX `TaskTechnology.Task_Technology_unique` ON `TaskTechnology`(`Task`, `Technology`);
