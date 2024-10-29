


let data = new ej.data.DataManager({
    url: 'https://localhost:7029/api/Grid',
    insertUrl: 'https://localhost:7029/api/Grid/Insert',
    updateUrl: 'https://localhost:7029/api/Grid/Update',
    removeUrl: 'https://localhost:7029/api/Grid/Remove',
    adaptor: new ej.data.UrlAdaptor()
});
let connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7029/ChatHub")  //Use remote server host instead number ****
    .build();

var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    allowPaging: true,
    actionComplete: actionComplete,
    created: onCreated,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'ShipCity', width: 140 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 140 }
    ]
});
grid.appendTo('#Grid');




function onCreated() {
    connection.on("ReceiveMessage", (message) => {
        if (grid) {
            grid.refresh();
        }

    });
    connection.start()
        .then(() => {
            console.log("SignalR connection established successfully");
            connection.invoke('SendMessage', "refreshPages")
                .catch((err) => {
                    console.error("Error sending data:", err.toString());
                });
        })
        .catch((err) => {
            console.error("Error establishing SignalR connection:", err.toString());
        });
}
function actionComplete(args) {
    if (args.requestType === "save" || args.requestType === "delete") {
        connection.invoke('SendMessage', "refreshPages")
            .catch((err) => {
                console.error(err.toString());
            });
    }
}