# Sync vs Async Networking

This example web app demonstrates the power of asynchronous programming over
synchronous.

Firstly, client code listens for click events. Event-based programming is
implicitly async.

Secondly, we demonstrate a sync and async network request. Notice how the page
is frozen during the sync request, and how it keeps running during the async
one.

To use this, `cd` to this directory, run `node server.js` in a command-prompt,
and navigate to [localhost:3000/index.html](http://localhost:3000/index.html).
