# 0.4: New note diagram

```mermaid

sequenceDiagram
    Note over Browser: User types a message into the text box in the HTML form
    Note over Browser: User presses "Save" button

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate Server
    Note right of Browser: The POST request sends the form data, as well as headers with metadata about the request.<br> This includes message length, content type, information about the sender, etc.
    Server-->>Browser: 302 Found (redirect) to /notes
    deactivate Server
    Note left of Server: The redirect response tells the browser to create a new GET request to /notes.

    Note over Browser: Browser refreshes to initiate a GET request
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate Server
    Server-->>Browser: HTML document
    deactivate Server
    Note right of Browser: The head section of the HTML document references a CSS stylesheet and a JS source,<br> which are requested next.

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: main.css
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate Server
    Server-->>Browser: main.js
    deactivate Server
    Note right of Browser: The last two lines of main.js initiate the following GET request.

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: data.json
    deactivate Server

```