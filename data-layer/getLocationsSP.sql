-- Stored Procedure
-- Gets the equipment locations

CREATE Procedure dbo.GetLocations
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT L.[Name]
        FROM dbo.[Location] L
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