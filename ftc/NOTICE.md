# Third-party code in this folder

`blockly/`, `blocks/` and `ftcblockly/` are taken unmodified from the FIRST Tech Challenge
Blocks library, `org.firstinspires.ftc:Blocks:12.0.0`, published on Maven Central.

    Copyright 2016 Google LLC
    Licensed under the Apache License, Version 2.0
    http://www.apache.org/licenses/LICENSE-2.0

They are included so that students can use the **real** FTC Blocks — the same block
definitions and the same Java generator that run on a Robot Controller — rather than an
imitation of them.

`ftc-shim.js` is not theirs. It is a small stand-in for four helper functions that normally
come from the Robot Controller's own web server and read the robot's hardware configuration.
Here they return the device names of the simulated robot instead.
