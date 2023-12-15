-- Copyright (C) 2023 Ryan Hallock, Muqadam Sabir, David Ben-Yaakov
-- This program was developed using codermerlin.academy resources.
-- This program is free software: you can redistribute it and/or modify
-- it under the terms of the GNU General Public License as published by
-- the Free Software Foundation, either version 3 of the License, or
-- (at your option) any later version.
-- This program is distributed in the hope that it will be useful,
-- but WITHOUT ANY WARRANTY; without even the implied warranty of
-- MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
-- GNU General Public License for more details.
-- You should have received a copy of the GNU General Public License
-- along with this program.  If not, see https://www.gnu.org/licenses/.

-- ================================================================================================
-- UserShiftsView
-- Augments UserShifts with data from Contexts, Roles, Users, Shifts, Days, and Positions
-- ================================================================================================
CREATE VIEW UserShiftsView
AS
SELECT us.id AS userShiftID,
       us.externalID AS userShiftExternalID,
       us.externalIDText AS userShiftExternalIDText,
       us.supplementaryJSON AS userShiftSupplementaryJSON,

       c.id AS contextID,
       c.externalID AS contextExternalID,
       c.externalIDText AS contextExternalIDText,
       c.name AS contextName,
       c.supplementaryJSON AS contextSupplementaryJSON,

       r.id AS roleID,
       r.externalID AS roleExternalID,
       r.externalIDText AS roleExternalIDText,
       r.role AS roleRole,
       r.supplementaryJSON AS roleSupplementaryJSON,

       u.id AS userID,
       u.firstName AS userFirstName,
       u.lastName AS userLastName,
       u.emailAddress AS userEmailAddress,
       u.supplementaryJSON AS userSupplementaryJSON,

       s.id AS shiftID,
       s.externalID AS shiftExternalID,
       s.externalIDText AS shiftExternalIDText,
       s.startTime AS shiftStartTime,
       s.endTime AS shiftEndTime,
       s.supplementaryJSON AS shiftSupplementaryJSON,

       d.id AS dayID,
       d.externalID AS dayExternalID,
       d.externalIDText AS dayExternalIDText,
       d.day AS dayDay,
       d.supplementaryJSON AS daySupplementaryJSON,
       d.dayOfWeek AS dayDayOfWeek
       
  FROM UserShifts us
 INNER JOIN Users u
    ON us.userID = u.id
 INNER JOIN UserRoles ur
    ON ur.userID = u.id
 INNER JOIN Roles r
    ON r.id = ur.roleID
 INNER JOIN Shifts s
    ON us.shiftID = s.id
 INNER JOIN Days d
    ON s.dayID = d.id
 INNER JOIN Positions p
    ON s.positionID = p.id
 INNER JOIN Contexts c
    ON r.contextID = c.id
   AND d.contextID = c.id;
   
      
