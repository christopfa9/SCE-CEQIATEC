-- Stored Procedure
-- Gets the User List

CREATE OR ALTER   Procedure [dbo].[GetUserList]
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY       
		SELECT [Id]
			  ,[Username]
			  ,[Alias]
			  ,IIF(IsAdmin = 1, 'Adminstrador', 'Encargado de Laboratorio')
		FROM [dbo].[User]
		WHERE IsActive = 1
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
