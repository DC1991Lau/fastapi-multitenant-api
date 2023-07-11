ALTER TABLE "usersToRoles" RENAME COLUMN "roleId" TO "roledId";
ALTER TABLE "usersToRoles" DROP CONSTRAINT "usersToRoles_applicationId_roleId_userId";
ALTER TABLE "usersToRoles" DROP CONSTRAINT "usersToRoles_roleId_roles_id_fk";

DO $$ BEGIN
 ALTER TABLE "usersToRoles" ADD CONSTRAINT "usersToRoles_roledId_roles_id_fk" FOREIGN KEY ("roledId") REFERENCES "roles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "usersToRoles" ADD CONSTRAINT "usersToRoles_applicationId_roledId_userId" PRIMARY KEY("applicationId","roledId","userId");