# Intro
- JavaScript runtime environment
- Single-threaded, event-driven non-blocking I/O

# Usages
- Scalable web servers
- Command-line utilities
- Front-end web development build tools
- Cross-platform desktop apps e.g. Atom
- Web browser applications of the future

# Excels at
- I/O
- Streaming
- Real-time
- JSON APIs

# Not so good at
- Computation

# Interactive portion
- Hello world
  - Create simple http server
  - Launch it via cmd

# Asynchrony
- JavaScript uses an "event loop" to do deferred processing
  - See [timeout.js](misc/timeout.js), [eeny-meeny.js](misc/eeny-meeny.js)
- Why bother with this confusing paradigm?
  - See [ajax/](ajax/)
- Blocking vs non-blocking I/O
  - See [io/](io/)

# Libraries

> I choose a lazy person to do a hard job. Because a lazy person will find an
> easy way to do it.

- The easy way is libraries
- Java, Python... large standard libraries
- JavaScript... basically nothing

# NPM
- Package (library) manager for Node
- Nearly 200,000 software packages
- [npmjs.com](http://npmjs.com)
- Recursive dependency structure
- See [packaging/](packaging/)
