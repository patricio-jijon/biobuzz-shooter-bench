# BIOBUZZ Shooter Bench

An interactive bench for the **FIRST Tech Challenge 2026–27 season, BIOBUZZ presented by RTX**.
Build a shooter from real goBILDA parts, test the ballistics on a 3D field, and export a
working autonomous OpMode.

**Live:** https://patricio-jijon.github.io/biobuzz-shooter-bench/

---

## What it does

- **3D field** built to the V1 Competition Manual — 144″ tiles, the HIVE on its bi-stable
  rocker, four FLOWERs, AprilTag clusters, POLLEN and NECTAR.
- **Ballistics that respond to your build.** Wheel diameter, gear ratio, motor free speed,
  durometer and hood curvature all change where the ball lands. The motor is a real ceiling:
  ask for more rpm than it has and the shot falls short.
- **Editable hood curve.** Three nodes with bezier handles. The wrap sets the backspin, the
  tangent at the exit *is* the launch angle, the arc length sets the contact force.
- **Drive it.** Tank drive on W A S D / I J K L, a real gamepad if you plug one in, or just
  click the field to place the robot.
- **Game rules modelled**, not just drawn: the HIVE tips on accumulated *mass*, the damper
  contact scores the TIP (§10.5.1), spilled balls fall out under their own gravity, and
  G409 stops you catching them before they hit the tiles.
- **Physics lab** — the motor→ball arithmetic step by step, overlaid trajectories for any one
  variable, and a least-squares / interpolation / model comparison on your own measured shots.
- **Autonomous recorder → Java.** Record a run and export a `LinearOpMode`. The generated file
  compiles (verified with `javac` against the SDK interfaces).
- **Curvature & Z tab.** The hood editor full width, with the wheel and ball drawn to true
  relative size and always in contact. Beside it the launch-height stack-up — floor to base
  plate, base to flywheel axis, plus the flywheel and ball radii — measured off *your* robot
  and checked against the 29″ R105 ceiling.
- **Play a match.** Your robot plus three that drive themselves, two per alliance. They hunt
  POLLEN, carry it to their own lane in front of their CELL, and shoot, steering around each
  other — two 18″ frames never share a tile.
- **Official clock.** 2:30 → 0:00 across the match, holding at 2:00 through the transition
  (V1 Table 9-1), with the AUTO buzzer, the 1:00 FLOWER unlock and the final-20 warning.
  Live scoring on the field itself, itemised against Table 10-2, plus ranking points.
- **Tag readout.** Point a camera at a CELL and it names the cluster, which CELL and face it
  belongs to, range and bearing — and prints the Java that switches on those IDs.
- **⌂ Home** puts back the open practice field full of balls whenever you want to just shoot.

## Where the numbers come from

Every dimension in the **Spec sheet** tab is labelled with its source.

| Source | Meaning |
|---|---|
| Manual | Stated in the V1 Competition Manual. Note §9.1: illustrations carry **±1″**, and the **3D CAD model is the official geometry**. |
| AndyMark | From the catalogue, not the manual — ball masses in particular. Weigh your own. |
| Estimate | Worked out here and **not published anywhere**. Verify before relying on it. |

### Known estimates

- **Raised CELL mouth height.** The manual gives it only in Figures 9-10/9-11. Bracketed by the
  rocker constraint (CELLs 18.8″ apart, pivot 43.95″, cage 12″ deep) to 41″–59″; defaults to 51″.
- **CELL cage profile.** The bounding numbers (20 × 14 mouth, 12 deep) are the manual's. The
  hopper outline is read from field reference renders, not a measured section.
- **Transfer efficiency and drag coefficient.** Fitted parameters, not constants. Shoot at a
  known distance and tune them until the page agrees with the floor.
- **TIP threshold.** The manual never gives a count — §9.6.2 says "enough POLLEN or NECTAR",
  because tipping is a balance. Default is 200 g ≈ 8 POLLEN.
- Camera fields of view are manufacturer-typical, not manual figures.

## Rules worth knowing

- **R105** — 18″ cube at start, 18 × 24 × 29″ expanded. The ball cannot leave above 29″, which
  is why every HIVE shot is a lob.
- **R503** — 8 motors total. Four on the chassis leaves four for everything else.
- **R702 / Table 12-9** — the Limelight 3A is the *only* allowed programmable vision
  coprocessor. The **Limelight 3G is prohibited** (R702 Example 6). UVC webcams are fine (R708).
- **G409** — you may not catch a ball a tipped HIVE releases until it contacts something else.
  Repeatedly parking under the HIVE to wait for a tip is called out as likely STRATEGIC.

## Running it

One self-contained `index.html`. Open it, or serve the folder:

```bash
python3 -m http.server 8000
```

It loads three.js from cdnjs and fonts from Google Fonts, so it needs a network connection.

## Not affiliated

*FIRST*, FTC and BIOBUZZ are trademarks of FIRST. This is an independent study tool, not an
official resource. Always check the current Competition Manual and the official field CAD.
