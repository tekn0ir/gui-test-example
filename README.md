# gui-test-example

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