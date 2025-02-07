CREATE OR ALTER Procedure [dbo].[CreateUser]
    @InUsername VARCHAR(32)
	, @InPassword VARCHAR(16)
    , @InEmail VARCHAR(32)
    , @InIsAdmin BIT
AS
BEGIN
	SET NOCOUNT ON;
	BEGIN TRY
		DECLARE @Alias VARCHAR(16) = LEFT(UPPER(SUBSTRING(@InUsername, 1, 1)), 1) +
						LEFT(UPPER(SUBSTRING(@InUsername, CHARINDEX(' ', @InUsername) + 1, 1)), 1) +
						LEFT(UPPER(SUBSTRING(@InUsername, CHARINDEX(' ', @InUsername, CHARINDEX(' ', @InUsername) + 1) + 1, 1)), 1);
		INSERT INTO [dbo].[User]
           ([Username]
           ,[Password]
           ,[Email]
           ,[Alias]
           ,[IsActive]
           ,[IsAdmin])
		 VALUES
           (@InUsername
           , @InPassword
           , @InEmail
           ,  @Alias
		   , 1
           , @InIsAdmin
		   )
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