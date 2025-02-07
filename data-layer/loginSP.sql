CREATE OR ALTER Procedure [dbo].[Login]
	@InEmail VARCHAR(32)
	, @InPassword VARCHAR(16)
    , @OutIsAllowed BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SET @OutIsAllowed = 0;
        IF EXISTS (
            SELECT U.Username
            FROM dbo.[User] U
            WHERE U.[Email] = @InEmail
            AND U.[Password] = @InPassword
            AND U.IsActive = 1
            )
        SET @OutIsAllowed = 1;
        ELSE
        SET @OutIsAllowed = 0;
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