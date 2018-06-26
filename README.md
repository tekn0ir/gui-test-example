# gui-test-example
Purpose: Run tests "headless" (without a screen or a window environment set up), for example in a CI pipeline.

Run tests:
```
docker build -t gui-test .
docker run -ti --rm -v $(pwd):/tests gui-test npm install && npm test
```
