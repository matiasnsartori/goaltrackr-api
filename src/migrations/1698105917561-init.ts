import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1698105917561 implements MigrationInterface {
    name = 'Init1698105917561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "address" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "address" SET NOT NULL`);
    }

}
