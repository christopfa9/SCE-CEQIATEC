-- Stored Procedure
-- Gets the equipment Types

CREATE Procedure dbo.EquipmentTypes
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT ET.[Name]
        FROM dbo.EquipmentType ET
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