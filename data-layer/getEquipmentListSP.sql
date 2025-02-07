-- Stored Procedure
-- Gets the equipment List

CREATE OR ALTER Procedure [dbo].[GetEquipmentList]
	@InEquipmentTypenName VARCHAR(32)
	, @InEquipmentLocationName VARCHAR(32)
	, @InEquipmentResposibleAlias VARCHAR(16)
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
		SELECT E.[Id]
		  ,ET.[Name]
		  ,L.[Name]
		  , U.Alias AS Responsible
		FROM [dbo].[Equipment] E
		INNER JOIN dbo.EquipmentType ET
			on E.EquipmentTypeId = ET.Id
		INNER JOIN dbo.[User] U
			on E.UserId = U.Id
		INNER JOIN dbo.[Location] L
			on E.LocationId = L.Id
		 WHERE (ET.[Name] = @InEquipmentTypenName
            OR @InEquipmentTypenName IS NULL OR @InEquipmentTypenName = '')
          AND (L.[Name] = @InEquipmentLocationName
            OR @InEquipmentLocationName IS NULL OR @InEquipmentLocationName = '')
          AND (U.Alias = @InEquipmentResposibleAlias
            OR @InEquipmentResposibleAlias IS NULL OR @InEquipmentResposibleAlias = '')
    END TRY
    BEGIN CATCH
        INSERT INTO dbo.DBErrors VALUES (
            SUSER_SNAME(),
            ERROR_NUMBER(),
            ERROR_STATE(),
            ERROR_SEVERITY(),
            ERROR_LINE(),
            ERROR_PROCEDURE(),
            ERROR_MESSAGE(),
            GETDATE()
        );
    END CATCH
    SET NOCOUNT OFF;
END;