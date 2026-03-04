-- CreateTable
CREATE TABLE "Cat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "birtyear" INTEGER NOT NULL,
    "gender" BOOLEAN NOT NULL,
    "color" TEXT NOT NULL,
    "eyes" TEXT NOT NULL,
    "spayed" BOOLEAN NOT NULL
);
