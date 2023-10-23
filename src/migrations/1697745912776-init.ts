import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1697745912776 implements MigrationInterface {
    name = 'Init1697745912776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_f99daa27c0f3d1bd858dcf17832"`);
        await queryRunner.query(`ALTER TABLE "group" RENAME COLUMN "bussinessUnit_id" TO "bussiness_unit_id"`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_5b4ee8a23f460f5db83fd674f0d" FOREIGN KEY ("bussiness_unit_id") REFERENCES "bussiness-unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_5b4ee8a23f460f5db83fd674f0d"`);
        await queryRunner.query(`ALTER TABLE "group" RENAME COLUMN "bussiness_unit_id" TO "bussinessUnit_id"`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_f99daa27c0f3d1bd858dcf17832" FOREIGN KEY ("bussinessUnit_id") REFERENCES "bussiness-unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
