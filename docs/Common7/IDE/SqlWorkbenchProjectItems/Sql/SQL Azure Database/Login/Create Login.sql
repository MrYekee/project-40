-- =============================================================================================================================
-- Create SQL Login template for Azure SQL Database, Azure Synapse Analytics Database, and Azure Synapse SQL Analytics on-demand
-- =============================================================================================================================

CREATE LOGIN <SQL_login_name, sysname, login_name> 
	WITH PASSWORD = '<password, sysname, Change_Password>' 
GO

-- =============================================================================================================================
-- Create Azure Active Directory Login template for Azure SQL Database, Azure Synapse Analytics Database, and Azure Synapse SQL Analytics on-demand
-- =============================================================================================================================

-- CREATE LOGIN <Azure Active Directory Principal, sysname, login_name> FROM EXTERNAL PROVIDER