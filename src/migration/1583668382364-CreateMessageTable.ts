import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMessageTable1583668382364 implements MigrationInterface {
  name = 'CreateMessageTable1583668382364';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "message" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "message" character varying NOT NULL, "createdAt" character varying NOT NULL, "updatedAt" character varying NOT NULL, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "message"`, undefined);
  }

}
