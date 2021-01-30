CREATE TYPE ROLES AS ENUM('user','admin');
CREATE TYPE FAMILY_TYPE AS ENUM('child','husband','caretaker');
CREATE TYPE SEX AS ENUM('male','female');

CREATE TABLE users(
  "userId" SERIAL PRIMARY KEY,
  "role" ROLES DEFAULT 'user',
  "username" VARCHAR(32) UNIQUE NOT NULL,
  "password" VARCHAR(128) NOT NULL,
  "fullname" VARCHAR(128) DEFAULT NULL,
  "birthDate" TIMESTAMP DEFAULT NULL,
  "profileImg" VARCHAR(256) DEFAULT NULL,
  "gender" SEX NOT NULL,
  "phone" VARCHAR[] DEFAULT NULL,
  "diseases" VARCHAR[] DEFAULT '{}',
  "receivedVaccines" VARCHAR[] DEFAULT '{}',
  "createAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updateAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE families(
  "userId" INT NOT NULL,
  "familyId" SERIAL PRIMARY KEY,
  "fullname" VARCHAR(128) DEFAULT NULL,
  "birthDate" TIMESTAMP DEFAULT NULL,
  "profileImg" VARCHAR(256) DEFAULT NULL,
  "gender" SEX NOT NULL,
  "phone" VARCHAR[] DEFAULT NULL,
  "diseases" VARCHAR[] DEFAULT '{}',
  "receivedVaccines" VARCHAR[] DEFAULT '{}',
  "createAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updateAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- alter foreign key
ALTER TABLE public.families ADD FOREIGN KEY ("userId") REFERENCES public.users("userId");

CREATE TYPE APPOINTMENT_STATUS AS ENUM('in-progress','vaccinated', 'vaccinating', 'overdue');

CREATE TABLE appointments(
  "appointmentId" SERIAL PRIMARY KEY,
  "offlineAppointmentId" INT NOT NULL,
  "childId" INT NOT NULL,
  "status" APPOINTMENT_STATUS DEFAULT 'in-progress',
  "selectedVaccines" VARCHAR[] NOT NULL,
  "time" VARCHAR(16) DEFAULT '09:30',
  "dates" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "createAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updateAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  -- PRIMARY KEY("appointmentId","offlineAppointmentId")
);

ALTER TABLE public.appointments ADD FOREIGN KEY ("childId") REFERENCES public.families("familyId");


CREATE TABLE records(
  "recordId" SERIAL PRIMARY KEY,
  "offlineRecordId" INT NOT NULL,
  "appointmentId" INT NOT NULL,
  "batchNO" VARCHAR(32) DEFAULT NULL,
  "childId" INT NOT NULL,
  "doctorInfo" VARCHAR(128) DEFAULT NULL,
  "freetext" VARCHAR(1024) DEFAULT NULL,
  "hostpitalName" VARCHAR(128) DEFAULT NULL,
  "photoDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "receivingDate" TIMESTAMP NOT NULL,
  "recordImage" VARCHAR(128) NOT NULL,
  "selectedVaccines" VARCHAR[] NOT NULL,
  "createAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updateAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  -- PRIMARY KEY ("recordId","offlineRecordId")
);

ALTER TABLE public.records ADD FOREIGN KEY ("appointmentId") REFERENCES public.appointments("appointmentId");

-- -- function for generate default family
-- CREATE OR REPLACE FUNCTION generate_default_family ()
-- 	RETURNS TRIGGER
-- 	AS $BODY$
-- BEGIN
--   INSERT INTO families 
--   SELECT 
--     "userId", 
--     "fullname", 
--     "birthDate", 
--     "profileImg", 
--     "gender", 
--     "phone" 
--   FROM users 
--   WHERE 
--     "userId" = NEW.userId;

--   RETURN NEW;
-- END;
-- $BODY$
-- LANGUAGE plpgsql;

-- -- trigger for creating family after create user
-- CREATE TRIGGER create_default_inv_item
-- 	AFTER INSERT ON users
-- 	FOR EACH ROW
-- 	EXECUTE PROCEDURE generate_default_family ();


