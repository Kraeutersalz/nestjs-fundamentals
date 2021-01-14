import { MigrationInterface, QueryRunner } from "typeorm";

export class ColaRefactor1610660311480 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE "cola" RENAME COLUMN "name" TO "title"',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE "cola" RENAME COLUMN "title" TO "name"',
        );
    }

}
