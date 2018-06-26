# gui-test-example
Purpose: Run tests "headless" (without a screen or a window environment set up), for example in a CI pipeline.

Run tests:
```
docker build -t gui-test .
docker run -t --rm -v $(pwd):/tests gui-test npm install && npm test
```

## On mac:
Enter container shell:
```
docker build -t gui-test .
docker run -t --rm -v $(pwd):/tests gui-test
```
Run tests:
```
npm install && npm test
```