import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1696629334717 implements MigrationInterface {
    name = 'Init1696629334717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "group" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "bussinessUnit_id" uuid, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "group"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bussiness_unit"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "group_id" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD "bussinessUnit_id" uuid`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_f99daa27c0f3d1bd858dcf17832" FOREIGN KEY ("bussinessUnit_id") REFERENCES "bussiness-unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_b8d62b3714f81341caa13ab0ff0" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_4ff18695da61dd106acc6333524" FOREIGN KEY ("bussinessUnit_id") REFERENCES "bussiness-unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_4ff18695da61dd106acc6333524"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_b8d62b3714f81341caa13ab0ff0"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_f99daa27c0f3d1bd858dcf17832"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bussinessUnit_id"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "group_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "bussiness_unit" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "group" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "group"`);
    }

}
