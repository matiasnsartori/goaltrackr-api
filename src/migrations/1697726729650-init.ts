import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1697726729650 implements MigrationInterface {
    name = 'Init1697726729650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_4ff18695da61dd106acc6333524"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "bussinessUnit_id" TO "bussiness_unit_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_9938126a621ba18042297354194" FOREIGN KEY ("bussiness_unit_id") REFERENCES "bussiness-unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_9938126a621ba18042297354194"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "bussiness_unit_id" TO "bussinessUnit_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_4ff18695da61dd106acc6333524" FOREIGN KEY ("bussinessUnit_id") REFERENCES "bussiness-unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
