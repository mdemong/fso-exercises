# 0.5: Single page app diagram

The SPA version of the app is very similar to the original version of the web app, although the contents of the HTML and JS files differ from their non-SPA counterparts.

```mermaid

sequenceDiagram

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Browser: HTML document (spa)
    deactivate Server
    Note right of Browser: The head section of the HTML document causes requests for a CSS stylesheet and a JS source.

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: main.css
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Server
    Server-->>Browser: spa.js
    deactivate Server
    Note right of Browser: Lines 30 and 31 of spa.js initiate the following GET request.

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: data.json
    deactivate Server

```