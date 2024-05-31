# 0.6: New note in Single page app diagram

```mermaid

sequenceDiagram
    Note over Browser: User types a message into the text box in the HTML form
    Note over Browser: User presses "Save" button

    Note over Browser: The event handler prevents the default submit behavior,<br>pushes the new note to the notes list, and redraws the notes.
    Note over Browser: The request is initialized within the sendToServer function,<br> which is called within the event handler.

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate Server
    Note right of Browser: The Browser sends a JSON object containing content and date.
    Server-->>Browser: 201 Created. JSON object returned: {message: 'note created'}
    deactivate Server


```