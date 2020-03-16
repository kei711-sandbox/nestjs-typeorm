import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePrimaryKey1583674020362 implements MigrationInterface {
  name = 'UpdatePrimaryKey1583674020362';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "PK_ba01f0a3e0123651915008bc578"`, undefined);
    await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "id"`, undefined);
    await queryRunner.query(`ALTER TABLE "message" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
    await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id")`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
    await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`, undefined);
    await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`, undefined);
    await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "PK_ba01f0a3e0123651915008bc578"`, undefined);
    await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "id"`, undefined);
    await queryRunner.query(`ALTER TABLE "message" ADD "id" SERIAL NOT NULL`, undefined);
    await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id")`, undefined);
  }

}
