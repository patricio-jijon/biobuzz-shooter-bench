/* ============================================================================================
   FTC BLOCKS, RUNNING OUTSIDE A ROBOT CONTROLLER.

   The block definitions in ftc/blocks are the real ones, lifted unmodified from
   org.firstinspires.ftc:Blocks (Apache 2.0, Copyright Google LLC). On a real Robot Controller
   they are served alongside js/FtcOfflineBlocks.js, which supplies four helpers that read the
   robot's hardware configuration. That file is part of the Robot Controller's web server, not
   the Blocks library, so it is not in the .aar - these are stand-ins that feed the blocks the
   device names from the BIOBUZZ Shooter Bench instead of from a phone.

   Everything else - the blocks, the toolbox entries, and the FtcJava generator that turns them
   into Java - is the genuine article.
   ============================================================================================ */

/* The device names this simulated robot answers to. They match the names the exported OpMode
   uses, so a program written here refers to the same hardware as the Java the bench emits. */
var FTC_DEVICES = {
  dcMotor:   ["front_left_drive", "back_left_drive", "front_right_drive", "back_right_drive",
              "shooter", "intake"],
  dcMotorEx: ["shooter"],
  servo:     ["feeder"],
  crServo:   [],
  colorSensor:    ["color_sensor"],
  touchSensor:    [],
  distanceSensor: [],
  imu:       ["imu"]
};

function ftcDropdown(list, emptyLabel) {
  var opts = (list && list.length)
    ? list.map(function (n) { return [n, n]; })
    : [[emptyLabel || "(none configured)", "none"]];
  return new Blockly.FieldDropdown(opts);
}

/* the four the block files call */
function createDcMotorDropdown()   { return ftcDropdown(FTC_DEVICES.dcMotor,   "(no motors)"); }
function createDcMotorExDropdown() { return ftcDropdown(FTC_DEVICES.dcMotorEx, "(no motors)"); }
function createServoDropdown()     { return ftcDropdown(FTC_DEVICES.servo,     "(no servos)"); }
function createFieldDropdown(choices) { return new Blockly.FieldDropdown(choices); }

/* a few more the wider block set reaches for, harmless if unused */
function createCRServoDropdown()        { return ftcDropdown(FTC_DEVICES.crServo, "(none)"); }
function createColorSensorDropdown()    { return ftcDropdown(FTC_DEVICES.colorSensor, "(none)"); }
function createTouchSensorDropdown()    { return ftcDropdown(FTC_DEVICES.touchSensor, "(none)"); }
function createDistanceSensorDropdown() { return ftcDropdown(FTC_DEVICES.distanceSensor, "(none)"); }
function createImuDropdown()            { return ftcDropdown(FTC_DEVICES.imu, "(none)"); }
function createBNO055ImuDropdown()      { return ftcDropdown(FTC_DEVICES.imu, "(none)"); }

/* FtcBlocks_common reserves identifiers so generated Java cannot collide with a variable the
   student named. Nothing here generates to a runtime, so these are no-ops. */
function addReservedWordsForJavaScriptRuntime() {}
function addReservedWordsForFtcJava() {}
function knownTypeToClassName(t) { return t; }
function getHardwareItemDeviceName(id) { return id; }

/* The FtcJava generator asks the Robot Controller for a Java-safe field name for each device,
   and for the device's configured name. On a Control Hub those two come from the robot's
   configuration file; here they come from FTC_DEVICES above. Without them the generator falls
   into its error path and emits "Sorry, FTC Blocks-to-Java has a bug!" instead of your code. */
function getHardwareItemIdentifierForFtcJava(id) {
  if (!id || id === "none") throw "no such device";
  return (typeof makeIdentifier === "function") ? makeIdentifier(id) : String(id);
}
function removeHardwareIdentifierSuffix(id) {
  return String(id).replace(/AsDcMotorEx$|AsDcMotor$|AsServo$|AsCRServo$/, "");
}
/* blocks carry their visible device names in block.data as JSON; absent here, and the
   generator treats a null as "fall back to the identifier", which is what we want */
function parseBlockDataJSON(block) {
  try { return block && block.data ? JSON.parse(block.data) : null; }
  catch (e) { return null; }
}
