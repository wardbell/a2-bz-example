/* tslint:disable:quotemark */
const metadata = {
  "resourceEntityTypeMap": {
    "Users": "User:#northwind.model",
    "Customers": "Customer:#northwind.model",
    "Products": "Product:#northwind.model",
    "OrderDetails": "OrderDetail:#northwind.model",
    "Employees": "Employee:#northwind.model",
    "NextIds": "NextId:#northwind.model",
    "Regions": "Region:#northwind.model",
    "Orders": "Order:#northwind.model",
    "InternationalOrders": "InternationalOrder:#northwind.model",
    "Categories": "Category:#northwind.model",
    "Territories": "Territory:#northwind.model",
    "UserRoles": "UserRole:#northwind.model",
    "EmployeeTerritories": "EmployeeTerritory:#northwind.model",
    "Roles": "Role:#northwind.model",
    "Suppliers": "Supplier:#northwind.model"
  },
  "structuralTypes": [
    {
      "dataProperties": [
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "60",
              "name": "maxLength"
            }
          ],
          "maxLength": 60,
          "isNullable": true,
          "nameOnServer": "address"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "city"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "region"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "10",
              "name": "maxLength"
            }
          ],
          "maxLength": 10,
          "isNullable": true,
          "nameOnServer": "postalCode"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "country"
        }
      ],
      "isComplexType": true,
      "shortName": "Location",
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "255",
              "name": "maxLength"
            }
          ],
          "maxLength": 255,
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "customerID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "5",
              "name": "maxLength"
            }
          ],
          "maxLength": 5,
          "isNullable": true,
          "nameOnServer": "customerID_OLD"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "40",
              "name": "maxLength"
            }
          ],
          "maxLength": 40,
          "isNullable": false,
          "nameOnServer": "companyName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "30",
              "name": "maxLength"
            }
          ],
          "maxLength": 30,
          "isNullable": true,
          "nameOnServer": "contactName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "30",
              "name": "maxLength"
            }
          ],
          "maxLength": 30,
          "isNullable": true,
          "nameOnServer": "contactTitle"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "60",
              "name": "maxLength"
            }
          ],
          "maxLength": 60,
          "isNullable": true,
          "nameOnServer": "address"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "city"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "region"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "10",
              "name": "maxLength"
            }
          ],
          "maxLength": 10,
          "isNullable": true,
          "nameOnServer": "postalCode"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "country"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "24",
              "name": "maxLength"
            }
          ],
          "maxLength": 24,
          "isNullable": true,
          "nameOnServer": "phone"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "24",
              "name": "maxLength"
            }
          ],
          "maxLength": 24,
          "isNullable": true,
          "nameOnServer": "fax"
        }
      ],
      "autoGeneratedKeyType": "KeyGenerator",
      "defaultResourceName": "Customers",
      "shortName": "Customer",
      "navigationProperties": [
        {
          "associationName": "AN_Customer_Order",
          "entityTypeName": "Order:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "customerID"
          ],
          "isScalar": false,
          "nameOnServer": "orders"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "supplierID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "40",
              "name": "maxLength"
            }
          ],
          "maxLength": 40,
          "isNullable": false,
          "nameOnServer": "companyName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "30",
              "name": "maxLength"
            }
          ],
          "maxLength": 30,
          "isNullable": true,
          "nameOnServer": "contactName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "30",
              "name": "maxLength"
            }
          ],
          "maxLength": 30,
          "isNullable": true,
          "nameOnServer": "contactTitle"
        },
        {
          "complexTypeName": "Location:#northwind.model",
          "isNullable": true,
          "nameOnServer": "location"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "24",
              "name": "maxLength"
            }
          ],
          "maxLength": 24,
          "isNullable": true,
          "nameOnServer": "phone"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "24",
              "name": "maxLength"
            }
          ],
          "maxLength": 24,
          "isNullable": true,
          "nameOnServer": "fax"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "1073741823",
              "name": "maxLength"
            }
          ],
          "maxLength": 1073741823,
          "isNullable": true,
          "nameOnServer": "homePage"
        }
      ],
      "autoGeneratedKeyType": "Identity",
      "defaultResourceName": "Suppliers",
      "shortName": "Supplier",
      "navigationProperties": [
        {
          "associationName": "AN_Product_Supplier",
          "entityTypeName": "Product:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "supplierID"
          ],
          "isScalar": false,
          "nameOnServer": "products"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int64",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int64"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "id"
        },
        {
          "dataType": "Decimal",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "255",
              "name": "maxLength"
            },
            {
              "name": "number"
            }
          ],
          "maxLength": 255,
          "isNullable": false,
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "100",
              "name": "maxLength"
            }
          ],
          "maxLength": 100,
          "isNullable": false,
          "nameOnServer": "userName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "200",
              "name": "maxLength"
            }
          ],
          "maxLength": 200,
          "isNullable": true,
          "nameOnServer": "userPassword"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "100",
              "name": "maxLength"
            }
          ],
          "maxLength": 100,
          "isNullable": false,
          "nameOnServer": "firstName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "100",
              "name": "maxLength"
            }
          ],
          "maxLength": 100,
          "isNullable": false,
          "nameOnServer": "lastName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "100",
              "name": "maxLength"
            }
          ],
          "maxLength": 100,
          "isNullable": false,
          "nameOnServer": "email"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "100",
              "name": "maxLength"
            }
          ],
          "maxLength": 100,
          "isNullable": false,
          "nameOnServer": "createdBy"
        },
        {
          "dataType": "Int64",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int64"
            }
          ],
          "isNullable": false,
          "nameOnServer": "createdByUserId"
        },
        {
          "dataType": "DateTime",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "date"
            }
          ],
          "isNullable": false,
          "nameOnServer": "createdDate"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "100",
              "name": "maxLength"
            }
          ],
          "maxLength": 100,
          "isNullable": false,
          "nameOnServer": "modifiedBy"
        },
        {
          "dataType": "Int64",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int64"
            }
          ],
          "isNullable": false,
          "nameOnServer": "modifiedByUserId"
        },
        {
          "dataType": "DateTime",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "date"
            }
          ],
          "isNullable": false,
          "nameOnServer": "modifiedDate"
        }
      ],
      "autoGeneratedKeyType": "Identity",
      "defaultResourceName": "Users",
      "shortName": "User",
      "navigationProperties": [
        {
          "associationName": "AN_User_UserRole",
          "entityTypeName": "UserRole:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "id"
          ],
          "isScalar": false,
          "nameOnServer": "userRoles"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "productID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "int32"
            }
          ],
          "isNullable": true,
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "40",
              "name": "maxLength"
            }
          ],
          "maxLength": 40,
          "isNullable": false,
          "nameOnServer": "productName"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "int32"
            }
          ],
          "isNullable": true,
          "nameOnServer": "supplierID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "int32"
            }
          ],
          "isNullable": true,
          "nameOnServer": "categoryID"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "20",
              "name": "maxLength"
            }
          ],
          "maxLength": 20,
          "isNullable": true,
          "nameOnServer": "quantityPerUnit"
        },
        {
          "dataType": "Decimal",
          "validators": [
            {
              "maxLength": "255",
              "name": "maxLength"
            },
            {
              "name": "number"
            }
          ],
          "maxLength": 255,
          "isNullable": true,
          "nameOnServer": "unitPrice"
        },
        {
          "dataType": "Int16",
          "validators": [
            {
              "name": "int16"
            }
          ],
          "isNullable": true,
          "nameOnServer": "unitsInStock"
        },
        {
          "dataType": "Int16",
          "validators": [
            {
              "name": "int16"
            }
          ],
          "isNullable": true,
          "nameOnServer": "unitsOnOrder"
        },
        {
          "dataType": "Int16",
          "validators": [
            {
              "name": "int16"
            }
          ],
          "isNullable": true,
          "nameOnServer": "reorderLevel"
        }
      ],
      "autoGeneratedKeyType": "Identity",
      "defaultResourceName": "Products",
      "shortName": "Product",
      "navigationProperties": [
        {
          "foreignKeyNamesOnServer": [
            "supplierID"
          ],
          "associationName": "AN_Product_Supplier",
          "entityTypeName": "Supplier:#northwind.model",
          "isScalar": true,
          "nameOnServer": "supplier"
        },
        {
          "foreignKeyNamesOnServer": [
            "categoryID"
          ],
          "associationName": "AN_Category_Product",
          "entityTypeName": "Category:#northwind.model",
          "isScalar": true,
          "nameOnServer": "category"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "employeeID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "30",
              "name": "maxLength"
            }
          ],
          "maxLength": 30,
          "isNullable": false,
          "nameOnServer": "lastName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "30",
              "name": "maxLength"
            }
          ],
          "maxLength": 30,
          "isNullable": false,
          "nameOnServer": "firstName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "30",
              "name": "maxLength"
            }
          ],
          "maxLength": 30,
          "isNullable": true,
          "nameOnServer": "title"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "25",
              "name": "maxLength"
            }
          ],
          "maxLength": 25,
          "isNullable": true,
          "nameOnServer": "titleOfCourtesy"
        },
        {
          "dataType": "DateTime",
          "validators": [
            {
              "name": "date"
            }
          ],
          "isNullable": true,
          "nameOnServer": "birthDate"
        },
        {
          "dataType": "DateTime",
          "validators": [
            {
              "name": "date"
            }
          ],
          "isNullable": true,
          "nameOnServer": "hireDate"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "60",
              "name": "maxLength"
            }
          ],
          "maxLength": 60,
          "isNullable": true,
          "nameOnServer": "address"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "city"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "region"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "10",
              "name": "maxLength"
            }
          ],
          "maxLength": 10,
          "isNullable": true,
          "nameOnServer": "postalCode"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "country"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "24",
              "name": "maxLength"
            }
          ],
          "maxLength": 24,
          "isNullable": true,
          "nameOnServer": "homePhone"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "4",
              "name": "maxLength"
            }
          ],
          "maxLength": 4,
          "isNullable": true,
          "nameOnServer": "extension"
        },
        {
          "dataType": "Binary",
          "validators": [
            {
              "maxLength": "1073741823",
              "name": "maxLength"
            }
          ],
          "maxLength": 1073741823,
          "isNullable": true,
          "nameOnServer": "photo"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "1073741823",
              "name": "maxLength"
            }
          ],
          "maxLength": 1073741823,
          "isNullable": true,
          "nameOnServer": "notes"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "255",
              "name": "maxLength"
            }
          ],
          "maxLength": 255,
          "isNullable": true,
          "nameOnServer": "photoPath"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "int32"
            }
          ],
          "isNullable": true,
          "nameOnServer": "reportsToEmployeeID"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "255",
              "name": "maxLength"
            }
          ],
          "maxLength": 255,
          "isNullable": true,
          "nameOnServer": "fullName"
        }
      ],
      "autoGeneratedKeyType": "Identity",
      "defaultResourceName": "Employees",
      "shortName": "Employee",
      "navigationProperties": [
        {
          "foreignKeyNamesOnServer": [
            "reportsToEmployeeID"
          ],
          "associationName": "AN_Employee_Employee",
          "entityTypeName": "Employee:#northwind.model",
          "isScalar": true,
          "nameOnServer": "manager"
        },
        {
          "associationName": "AN_Employee_Employee",
          "entityTypeName": "Employee:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "employeeID"
          ],
          "isScalar": false,
          "nameOnServer": "directReports"
        },
        {
          "associationName": "AN_Employee_EmployeeTerritory",
          "entityTypeName": "EmployeeTerritory:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "employeeID"
          ],
          "isScalar": false,
          "nameOnServer": "employeeTerritories"
        },
        {
          "associationName": "AN_Employee_Order",
          "entityTypeName": "Order:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "employeeID"
          ],
          "isScalar": false,
          "nameOnServer": "orders"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "id"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "nameOnServer": "employeeID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "nameOnServer": "territoryID"
        }
      ],
      "autoGeneratedKeyType": "Identity",
      "defaultResourceName": "EmployeeTerritories",
      "shortName": "EmployeeTerritory",
      "navigationProperties": [
        {
          "foreignKeyNamesOnServer": [
            "employeeID"
          ],
          "associationName": "AN_Employee_EmployeeTerritory",
          "entityTypeName": "Employee:#northwind.model",
          "isScalar": true,
          "nameOnServer": "employee"
        },
        {
          "foreignKeyNamesOnServer": [
            "territoryID"
          ],
          "associationName": "AN_EmployeeTerritory_Territory",
          "entityTypeName": "Territory:#northwind.model",
          "isScalar": true,
          "nameOnServer": "territory"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "regionID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "50",
              "name": "maxLength"
            }
          ],
          "maxLength": 50,
          "isNullable": false,
          "nameOnServer": "regionDescription"
        }
      ],
      "autoGeneratedKeyType": "KeyGenerator",
      "defaultResourceName": "Regions",
      "shortName": "Region",
      "navigationProperties": [
        {
          "associationName": "AN_Region_Territory",
          "entityTypeName": "Territory:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "regionID"
          ],
          "isScalar": false,
          "nameOnServer": "territories"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "50",
              "name": "maxLength"
            }
          ],
          "maxLength": 50,
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "name"
        },
        {
          "dataType": "Int64",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int64"
            }
          ],
          "isNullable": false,
          "nameOnServer": "nextId1"
        }
      ],
      "autoGeneratedKeyType": "None",
      "defaultResourceName": "NextIds",
      "shortName": "NextId",
      "navigationProperties": [],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "orderID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "255",
              "name": "maxLength"
            }
          ],
          "maxLength": 255,
          "isNullable": true,
          "nameOnServer": "customerID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "int32"
            }
          ],
          "isNullable": true,
          "nameOnServer": "employeeID"
        },
        {
          "dataType": "DateTime",
          "validators": [
            {
              "name": "date"
            }
          ],
          "isNullable": true,
          "nameOnServer": "orderDate"
        },
        {
          "dataType": "DateTime",
          "validators": [
            {
              "name": "date"
            }
          ],
          "isNullable": true,
          "nameOnServer": "requiredDate"
        },
        {
          "dataType": "DateTime",
          "validators": [
            {
              "name": "date"
            }
          ],
          "isNullable": true,
          "nameOnServer": "shippedDate"
        },
        {
          "dataType": "Decimal",
          "validators": [
            {
              "maxLength": "255",
              "name": "maxLength"
            },
            {
              "name": "number"
            }
          ],
          "maxLength": 255,
          "isNullable": true,
          "nameOnServer": "freight"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "40",
              "name": "maxLength"
            }
          ],
          "maxLength": 40,
          "isNullable": true,
          "nameOnServer": "shipName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "60",
              "name": "maxLength"
            }
          ],
          "maxLength": 60,
          "isNullable": true,
          "nameOnServer": "shipAddress"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "shipCity"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "shipRegion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "10",
              "name": "maxLength"
            }
          ],
          "maxLength": 10,
          "isNullable": true,
          "nameOnServer": "shipPostalCode"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": true,
          "nameOnServer": "shipCountry"
        }
      ],
      "autoGeneratedKeyType": "Identity",
      "defaultResourceName": "Orders",
      "shortName": "Order",
      "navigationProperties": [
        {
          "foreignKeyNamesOnServer": [
            "customerID"
          ],
          "associationName": "AN_Customer_Order",
          "entityTypeName": "Customer:#northwind.model",
          "isScalar": true,
          "nameOnServer": "customer"
        },
        {
          "foreignKeyNamesOnServer": [
            "employeeID"
          ],
          "associationName": "AN_Employee_Order",
          "entityTypeName": "Employee:#northwind.model",
          "isScalar": true,
          "nameOnServer": "employee"
        },
        {
          "associationName": "AN_InternationalOrder_Order_1to1",
          "entityTypeName": "InternationalOrder:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "orderID"
          ],
          "isScalar": true,
          "nameOnServer": "internationalOrder"
        },
        {
          "associationName": "AN_Order_OrderDetail",
          "entityTypeName": "OrderDetail:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "orderID"
          ],
          "isScalar": false,
          "nameOnServer": "orderDetails"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int64",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int64"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "id"
        },
        {
          "dataType": "Int64",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int64"
            }
          ],
          "isNullable": false,
          "nameOnServer": "userId"
        },
        {
          "dataType": "Int64",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int64"
            }
          ],
          "isNullable": false,
          "nameOnServer": "roleId"
        }
      ],
      "autoGeneratedKeyType": "Identity",
      "defaultResourceName": "UserRoles",
      "shortName": "UserRole",
      "navigationProperties": [
        {
          "foreignKeyNamesOnServer": [
            "userId"
          ],
          "associationName": "AN_User_UserRole",
          "entityTypeName": "User:#northwind.model",
          "isScalar": true,
          "nameOnServer": "user"
        },
        {
          "foreignKeyNamesOnServer": [
            "roleId"
          ],
          "associationName": "AN_Role_UserRole",
          "entityTypeName": "Role:#northwind.model",
          "isScalar": true,
          "nameOnServer": "role"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "territoryID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "50",
              "name": "maxLength"
            }
          ],
          "maxLength": 50,
          "isNullable": false,
          "nameOnServer": "territoryDescription"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "nameOnServer": "regionID"
        }
      ],
      "autoGeneratedKeyType": "KeyGenerator",
      "defaultResourceName": "Territories",
      "shortName": "Territory",
      "navigationProperties": [
        {
          "foreignKeyNamesOnServer": [
            "regionID"
          ],
          "associationName": "AN_Region_Territory",
          "entityTypeName": "Region:#northwind.model",
          "isScalar": true,
          "nameOnServer": "region"
        },
        {
          "associationName": "AN_EmployeeTerritory_Territory",
          "entityTypeName": "EmployeeTerritory:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "territoryID"
          ],
          "isScalar": false,
          "nameOnServer": "employeeTerritories"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "orderID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "100",
              "name": "maxLength"
            }
          ],
          "maxLength": 100,
          "isNullable": false,
          "nameOnServer": "customsDescription"
        },
        {
          "dataType": "Decimal",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "255",
              "name": "maxLength"
            },
            {
              "name": "number"
            }
          ],
          "maxLength": 255,
          "isNullable": false,
          "nameOnServer": "exciseTax"
        }
      ],
      "autoGeneratedKeyType": "None",
      "defaultResourceName": "InternationalOrders",
      "shortName": "InternationalOrder",
      "navigationProperties": [
        {
          "foreignKeyNamesOnServer": [
            "orderID"
          ],
          "associationName": "AN_InternationalOrder_Order_1to1",
          "entityTypeName": "Order:#northwind.model",
          "isScalar": true,
          "nameOnServer": "order"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "orderID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "productID"
        },
        {
          "dataType": "Decimal",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "255",
              "name": "maxLength"
            },
            {
              "name": "number"
            }
          ],
          "maxLength": 255,
          "isNullable": false,
          "nameOnServer": "unitPrice"
        },
        {
          "dataType": "Int16",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int16"
            }
          ],
          "isNullable": false,
          "nameOnServer": "quantity"
        },
        {
          "dataType": "Single",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "255",
              "name": "maxLength"
            },
            {
              "name": "number"
            }
          ],
          "maxLength": 255,
          "isNullable": false,
          "nameOnServer": "discount"
        }
      ],
      "autoGeneratedKeyType": "KeyGenerator",
      "defaultResourceName": "OrderDetails",
      "shortName": "OrderDetail",
      "navigationProperties": [
        {
          "foreignKeyNamesOnServer": [
            "orderID"
          ],
          "associationName": "AN_Order_OrderDetail",
          "entityTypeName": "Order:#northwind.model",
          "isScalar": true,
          "nameOnServer": "order"
        },
        {
          "foreignKeyNamesOnServer": [
            "productID"
          ],
          "associationName": "AN_OrderDetail_Product",
          "entityTypeName": "Product:#northwind.model",
          "isScalar": true,
          "nameOnServer": "product"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int64",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int64"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "id"
        },
        {
          "dataType": "DateTime",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "date"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "ts"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "50",
              "name": "maxLength"
            }
          ],
          "maxLength": 50,
          "isNullable": false,
          "nameOnServer": "name"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "2000",
              "name": "maxLength"
            }
          ],
          "maxLength": 2000,
          "isNullable": true,
          "nameOnServer": "description"
        },
        {
          "dataType": "northwind.model.RoleType",
          "validators": [
            {
              "maxLength": "255",
              "name": "maxLength"
            }
          ],
          "maxLength": 255,
          "isNullable": true,
          "nameOnServer": "roleType"
        }
      ],
      "autoGeneratedKeyType": "Identity",
      "defaultResourceName": "Roles",
      "shortName": "Role",
      "navigationProperties": [
        {
          "associationName": "AN_Role_UserRole",
          "entityTypeName": "UserRole:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "id"
          ],
          "isScalar": false,
          "nameOnServer": "userRoles"
        }
      ],
      "namespace": "northwind.model"
    },
    {
      "dataProperties": [
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "isPartOfKey": true,
          "nameOnServer": "categoryID"
        },
        {
          "dataType": "Int32",
          "validators": [
            {
              "name": "required"
            },
            {
              "name": "int32"
            }
          ],
          "isNullable": false,
          "concurrencyMode": "Fixed",
          "nameOnServer": "rowVersion"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "name": "required"
            },
            {
              "maxLength": "15",
              "name": "maxLength"
            }
          ],
          "maxLength": 15,
          "isNullable": false,
          "nameOnServer": "categoryName"
        },
        {
          "dataType": "String",
          "validators": [
            {
              "maxLength": "255",
              "name": "maxLength"
            }
          ],
          "maxLength": 255,
          "isNullable": true,
          "nameOnServer": "description"
        },
        {
          "dataType": "Binary",
          "validators": [
            {
              "maxLength": "10000000",
              "name": "maxLength"
            }
          ],
          "maxLength": 10000000,
          "isNullable": true,
          "nameOnServer": "picture"
        }
      ],
      "autoGeneratedKeyType": "Identity",
      "defaultResourceName": "Categories",
      "shortName": "Category",
      "navigationProperties": [
        {
          "associationName": "AN_Category_Product",
          "entityTypeName": "Product:#northwind.model",
          "invForeignKeyNamesOnServer": [
            "categoryID"
          ],
          "isScalar": false,
          "nameOnServer": "products"
        }
      ],
      "namespace": "northwind.model"
    }
  ],
  "localQueryComparisonOptions": "caseInsensitiveSQL"
}
;
export const METADATA = JSON.stringify(metadata);