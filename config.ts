const options: Options = {
  wallThickness: 1,
  wallShrouding: 0,
  wallXYOffset: 5,
  wallZOffset: 15,
  webThickness: 0,
  webMinThicknessFactor: 0.8,
  verticalClearance: 0.1,
  plateThickness: 3,
  keyBasis: "xda",
  screwIndices: [-1, -1, -1, -1, -1, -1, -1],
  screwCountersink: true,
  screwSize: "M3",
  screwType: "screw insert",
  clearScrews: true,
  rounded: { top: { horizontal: 1/4, vertical: 0.67 }, side: { divisor: 6, concavity: 1.5 } },
  connectors: [
    { preset: "trrs" },
    { preset: "usb", size: "average" }
  ],
  connectorIndex: -1,
  microcontroller: "waveshare-rp2040-zero",
  microcontrollerAngle: 0,
  fastenMicrocontroller: true,
  flipConnectors: false,
  wristRestOrigin: new Trsf().translate(10, -110, 0),
  shell: { type: "basic", lip: true }
}
// NOTE: Screws / the connector with
// negative indices are placed automatically.
// In the basic/advanced tab, these values were:
// [left] screwIndices: [7.5, 16.5, 35.5, 21.5, 2.5, 11.5, 31.5]
// [left] connectorIndex: 29
// [right] screwIndices: [7.5, 16.5, 35.5, 21.5, 2.5, 11.5, 31.5]
// [right] connectorIndex: 29

/**
 * The planes used to position the clusters.
 * It's rotated by the tenting and x rotation
 */
const rightFingersPlane = new Trsf().translate(18, 35.6, -15.2)

const rightThumbsPlane = new Trsf()
  .transformBy(new Trsf().translate(-18, -35.6, 15.2)
  )
  .transformBy(new Trsf().translate(18, 35.6, -15.2)
  )

const leftFingersPlane = new Trsf().translate(-18, 35.6, -15.2)

const leftThumbsPlane = new Trsf()
  .transformBy(new Trsf().translate(18, -35.6, 15.2)
  )
  .transformBy(new Trsf().translate(-18, 35.6, -15.2)
  )


/** Definitions for all keys. */
const fingersLeft: Key[] = [
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -5.8, 0)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "q",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -5.8, 0)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "a",
      home: "pinky",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, -5.8, 0)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "z",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "w",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "s",
      home: "ring",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "x",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 12, 0)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "e",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 12, 0)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "d",
      home: "middle",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 12, 0)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "c",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "r",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "f",
      home: "index",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "v",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "blank",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: -2,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    keycap: {
      letter: "5",
      row: 1,
      profile: "xda"
    },
    size: { height: 2 }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: -1,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "t",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: 0,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "g",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: 1,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "b",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .translate(-4.2, -1.4, 0)
      .placeOnMatrix({
        column: 2.5,
        row: 2,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: { row: 4, profile: "xda" }
  },
  {
    type: "mx-hotswap",
    aspect: 1.5,
    cluster: "fingers",
    position: new Trsf()
      .rotate(0, [0, 0, 0], [1, 0, 0])
      .rotate(0, [0, 0, 0], [0, 1, 0])
      .rotate(-90, [0, 0, 0], [0, 0, 1])
      .translate(5, -22, 0)
      .placeRow({
        row: 0,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -2.76
      })
      .transformBy(new Trsf().translate(0, 11.3, 0)
      )
      .placeColumn({
        column: -2.76,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "-",
      home: "pinky",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .rotate(0, [0, 0, 0], [1, 0, 0])
      .rotate(0, [0, 0, 0], [0, 1, 0])
      .rotate(-10, [0, 0, 0], [0, 0, 1])
      .translate(-2.8, -2.9, 0)
      .placeOnMatrix({
        column: 3.5,
        row: 2,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: { row: 4, profile: "xda" }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .rotate(0, [0, 0, 0], [1, 0, 0])
      .rotate(0, [0, 0, 0], [0, 1, 0])
      .rotate(-23, [0, 0, 0], [0, 0, 1])
      .translate(-1.7, -8.5, 0)
      .placeOnMatrix({
        column: 4.5,
        row: 2,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: { row: 4, profile: "xda" }
  }
]

const thumbsLeft: Key[] = []

const fingersRight: Key[] = [
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -5.8, 0)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "p",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -5.8, 0)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: ";",
      home: "pinky",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 1.5
      })
      .transformBy(new Trsf().translate(0, -5.8, 0)
      )
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "/",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "o",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "l",
      home: "ring",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 0.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: ".",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 12, 0)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "i",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 12, 0)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "k",
      home: "middle",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -0.5
      })
      .transformBy(new Trsf().translate(0, 12, 0)
      )
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: ",",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "u",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "j",
      home: "index",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: -1.5
      })
      .transformBy(new Trsf().translate(0, 4.3, 0)
      )
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "m",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "blank",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: -2,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    keycap: {
      letter: "6",
      row: 1,
      profile: "xda"
    },
    size: { height: 2 }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: -1,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "y",
      row: 2,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: 0,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "h",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: 1,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "n",
      row: 4,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .translate(4.2, -1.4, 0)
      .placeOnMatrix({
        column: -2.5,
        row: 2,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: { row: 4, profile: "xda" }
  },
  {
    type: "mx-hotswap",
    aspect: 1.5,
    cluster: "fingers",
    position: new Trsf()
      .rotate(0, [0, 0, 0], [1, 0, 0])
      .rotate(0, [0, 0, 0], [0, 1, 0])
      .rotate(90, [0, 0, 0], [0, 0, 1])
      .translate(-5, -22, 0)
      .placeRow({
        row: 0,
        spacingOfRows: 19.1,
        curvatureOfColumn: 0,
        arc: 0,
        columnForArc: 2.76
      })
      .transformBy(new Trsf().translate(0, 11.3, 0)
      )
      .placeColumn({
        column: 2.76,
        spacingOfColumns: 19.1,
        curvatureOfRow: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "-",
      home: "pinky",
      row: 3,
      profile: "xda"
    }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .rotate(0, [0, 0, 0], [1, 0, 0])
      .rotate(0, [0, 0, 0], [0, 1, 0])
      .rotate(10, [0, 0, 0], [0, 0, 1])
      .translate(2.8, -2.9, 0)
      .placeOnMatrix({
        column: -3.5,
        row: 2,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: { row: 4, profile: "xda" }
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .rotate(0, [0, 0, 0], [1, 0, 0])
      .rotate(0, [0, 0, 0], [0, 1, 0])
      .rotate(23, [0, 0, 0], [0, 0, 1])
      .translate(1.7, -8.5, 0)
      .placeOnMatrix({
        column: -4.5,
        row: 2,
        spacingOfColumns: 19.1,
        spacingOfRows: 19.1,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: { row: 4, profile: "xda" }
  }
]

const thumbsRight: Key[] = []

export default {
  left: {
    ...options,
    connectorIndex: 28.5,
    keys: [...fingersLeft, ...thumbsLeft],
  },
  right: {
    ...options,
    connectorIndex: 28.5,
    keys: [...fingersRight, ...thumbsRight],
  },
}
