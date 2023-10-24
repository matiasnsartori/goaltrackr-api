import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1698106035736 implements MigrationInterface {
    name = 'Init1698106035736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "experience"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "position"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "position" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "experience" boolean NOT NULL`);
    }

}
