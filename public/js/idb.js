// create variable to hold db connection
let db;

// establish a connection to IndexedDB database
const request = indexedDB.open('budget_tracker', 1);


request.onupgradeneeded = function(event) {
    // save a reference to the database
    const db = event.target.result;
    // create an object store (table) called 'new_budget'
    db.createObjectStore('new_budget', { autoIncrement: true });
};


// upon a success
request.onsuccess = function(event) {
    // when db is successfully created, save reference to db in global variable
    db = event.target.result;

    // check if app is online,
    if (navigator.onLine) {
        // insert function below
        // budgetDataBase()
    }
};


request.onerror = function(event) {
    console.log(event.target.errorCode);
};


// function to write data
function saveRecord(record) {
    // open a new transaction with the database with read and write
    const transaction = db.transaction(['new_budget'], 'readwrite');

    // access the object strore for 'new_budget'
    const budgetObjectStore = transaction.objectStore('new_budget');

    // add record to store with add method
    budgetObjectStore.add(record);
}