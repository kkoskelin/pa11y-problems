

When `pa11y-ci@2.3.0` is installed, it has a dependency of `pa11y@5.3.0` which in turn has a dependency upon `puppeteer@1.20`.

This project also contains a dependency on `puppeteer@4.0.1` and the pa11y tests are then run within a Docker instance
using the following:
 - CPU: 2
 - Memory: 4GB
 - Swap: 1GB

The pa11y configuration uses very high concurrency (16) and runs on a list of 30 instances of what are URLs on the same
local expressjs server.  To see how these tests perform, execute `docker-pa11y-run.sh`.  In my tests, frequently less
than 10 of the 30 tests would pass. During these times, the Docker utility will frequently show the active container
appears to deadlock and CPU usage will drop to 0.0%.

If you `npm uninstall --save puppeteer` and then execute `docker-pa11y-run.sh` again, you may find that the tests complete
very quickly, and all of them pass.


