# ASP.NET Core DropdownList Remote Binding WebAPI

## Repository Description
This repository demonstrates remote data binding for ASP.NET Core Dropdown List using Web API. It showcases fetching data dynamically and enabling server-side filtering, sorting, and pagination.

## Overview
Remote data binding with Web API efficiently loads large datasets without requiring all data in memory, enabling real-time updates.

## Features
- Web API: connect to REST endpoints
- Dynamic Binding: fetch from remote sources
- Server-Side Filtering: filter data
- Sorting: sort on the server
- Pagination: handle large datasets
- Real-Time Updates: dynamic content

## Prerequisites
- .NET 6.0 or higher
- Visual Studio or VS Code
- ASP.NET Core SDK
- C# knowledge
- REST endpoint knowledge

## Installation
1. Clone repository
2. Navigate to project directory
3. Run `dotnet restore`
4. Execute `dotnet build`
5. Run `dotnet run`

## Usage
Implement remote data binding:
1. Create Web API endpoint returning JSON
2. Configure dropdown with API URL
3. Set filtering and sorting
4. Handle selection events
5. Implement pagination

## Configuration
- API Endpoint: Web API URL
- HTTP Method: GET or POST
- Response Format: JSON
- Filter Parameters: query filters
- Page Size: records per request
- Sort Order: ascending or descending

## Resources

You can also refer the below resources to know more details about Syncfusion Javascript Grid components.

* [Demo](https://ej2.syncfusion.com/javascript/demos/#/bootstrap/grid/over-view)
* [Documentation](https://ej2.syncfusion.com/javascript/documentation/grid/getting-started)
* [UrlAdaptor with Syncfusion DataManager](https://ej2.syncfusion.com/javascript/documentation/grid/connecting-to-adaptors/url-adaptor)
