// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.height * this.width * this.length;
  }

  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

//   CuboidMaker.prototype.volume = function() {
//     return this.height * this.width * this.length;
//   };

// CuboidMaker.prototype.surfaceArea = function() {
//   return (
//     2 *
//     (this.length * this.width +
//       this.length * this.height +
//       this.width * this.height)
//   );
// };

const myCuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(myCuboid.volume()); // 100
console.log(myCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
//Find out the formulas for volume and surface area for cubes and create those methods using
//the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(length, width, height) {
    super(length, width, height);
  }

  cubeVolume() {
    return this.height * this.width * this.length;
  }

  cubeSurfaceArea() {
    return this.length * this.width * 6;
  }
}

const myCube = new CubeMaker(3, 3, 3);
console.log(myCube.cubeVolume());
console.log(myCube.cubeSurfaceArea());
