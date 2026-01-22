/*
  Warnings:

  - You are about to drop the `ChatGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChatGroup" DROP CONSTRAINT "ChatGroup_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_group_id_fkey";

-- DropForeignKey
ALTER TABLE "GroupUsers" DROP CONSTRAINT "GroupUsers_group_id_fkey";

-- DropTable
DROP TABLE "ChatGroup";

-- CreateTable
CREATE TABLE "GroupChat" (
    "id" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "passcode" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GroupChat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GroupChat_user_id_created_at_idx" ON "GroupChat"("user_id", "created_at");

-- AddForeignKey
ALTER TABLE "GroupChat" ADD CONSTRAINT "GroupChat_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupUsers" ADD CONSTRAINT "GroupUsers_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "GroupChat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "GroupChat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
