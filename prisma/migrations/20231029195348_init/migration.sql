-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "displayname" TEXT NOT NULL,
    "avatar" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Doubt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Doubt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Question" (
    "questid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "code" TEXT,
    "lang" TEXT NOT NULL,
    CONSTRAINT "Question_questid_fkey" FOREIGN KEY ("questid") REFERENCES "Doubt" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "code" TEXT,
    "displayname" TEXT,
    "avatar" TEXT,
    "doubtId" INTEGER NOT NULL,
    CONSTRAINT "Answer_doubtId_fkey" FOREIGN KEY ("doubtId") REFERENCES "Doubt" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Doubt_uuid_key" ON "Doubt"("uuid");
