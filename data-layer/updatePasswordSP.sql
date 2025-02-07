CREATE OR ALTER Procedure [dbo].[UpdatePassword]
	@InPassword VARCHAR(16)
    , @OutSuccessful BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        DECLARE  @UsernameId INT;
        SELECT @UsernameId = U.Id
            FROM dbo.[User] U
            WHERE U.[Password] = @InPassword
        IF @UsernameId IS NOT NULL 
        BEGIN
            UPDATE dbo.[User]
            SET [Password] = @InPassword
            WHERE Id = @UsernameId 
            SET @OutSuccessful = 1;
        END
        ELSE
        BEGIN
            SET @OutSuccessful= 0;
        END;
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