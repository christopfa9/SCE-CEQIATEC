-- Stored Procedure
-- Gets the equipments brands

CREATE Procedure dbo.GetEquipmentBrands
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        SELECT EB.BrandName
        FROM dbo.EquipmentBrand EB
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