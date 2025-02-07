CREATE OR ALTER Procedure [dbo].[DeleteUser]
    @InUserId VARCHAR(32)
AS
BEGIN
	SET NOCOUNT ON;
	BEGIN TRY
		DELETE FROM dbo.[User] 
		WHERE Id = @InUserId
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