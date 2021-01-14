import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1610661024235 implements MigrationInterface {
    name = 'SchemaSync1610661024235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "flavor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_934fe79b3d8131395c29a040ee5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cola" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "brand" character varying NOT NULL, "description" character varying, "recommendations" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_c3af80badb96c924d6978295e6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "name" character varying NOT NULL, "payload" json NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b535fbe8ec6d832dde22065ebd" ON "event" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e1de41532ad6af403d3ceb4f2" ON "event" ("name", "type") `);
        await queryRunner.query(`CREATE TABLE "cola_flavors_flavor" ("colaId" integer NOT NULL, "flavorId" integer NOT NULL, CONSTRAINT "PK_ec6f4bd3a01d1987b693399a614" PRIMARY KEY ("colaId", "flavorId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3011431f0d88e34a2287c01c71" ON "cola_flavors_flavor" ("colaId") `);
        await queryRunner.query(`CREATE INDEX "IDX_920c4ab17d9144a1189350a7da" ON "cola_flavors_flavor" ("flavorId") `);
        await queryRunner.query(`ALTER TABLE "cola_flavors_flavor" ADD CONSTRAINT "FK_3011431f0d88e34a2287c01c71e" FOREIGN KEY ("colaId") REFERENCES "cola"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cola_flavors_flavor" ADD CONSTRAINT "FK_920c4ab17d9144a1189350a7daf" FOREIGN KEY ("flavorId") REFERENCES "flavor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cola_flavors_flavor" DROP CONSTRAINT "FK_920c4ab17d9144a1189350a7daf"`);
        await queryRunner.query(`ALTER TABLE "cola_flavors_flavor" DROP CONSTRAINT "FK_3011431f0d88e34a2287c01c71e"`);
        await queryRunner.query(`DROP INDEX "IDX_920c4ab17d9144a1189350a7da"`);
        await queryRunner.query(`DROP INDEX "IDX_3011431f0d88e34a2287c01c71"`);
        await queryRunner.query(`DROP TABLE "cola_flavors_flavor"`);
        await queryRunner.query(`DROP INDEX "IDX_6e1de41532ad6af403d3ceb4f2"`);
        await queryRunner.query(`DROP INDEX "IDX_b535fbe8ec6d832dde22065ebd"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "cola"`);
        await queryRunner.query(`DROP TABLE "flavor"`);
    }

}
