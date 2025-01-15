import { TableDataItem } from "../type";

export const tableData: Array<TableDataItem> = Array.from(
  { length: 100 },
  (_, index) => ({
    formula: `Formula_${index + 1}`,
    type: `Type_${Math.ceil(Math.random() * 10)}`,
    activity: `${(Math.random() * 100).toFixed(2)}`,
    Syngony: `Syngony_${
      ["Cubic", "Hexagonal", "Orthorhombic"][Math.floor(Math.random() * 3)]
    }`,
    shape: `Shape_${["Sphere", "Cube", "Rod"][Math.floor(Math.random() * 3)]}`,
    "width, nm": (Math.random() * 50 + 1).toFixed(2),
    "depth, nm": (Math.random() * 50 + 1).toFixed(2),
    Sufrace: (Math.random() * 100 + 10).toFixed(2),
    surface: (Math.random() * 100 + 10).toFixed(2),
    pol: `${Math.random() > 0.5 ? "Yes" : "No"}`,
    surf: `${["Rough", "Smooth", "Granular"][Math.floor(Math.random() * 3)]}`,
    "Mw(coat), g/mol": (Math.random() * 1000 + 50).toFixed(2),
    "Km, mM": (Math.random() * 10).toFixed(2),
    "Vmax, mM/s": (Math.random() * 5).toFixed(2),
    ReactionType: `Reaction_${Math.ceil(Math.random() * 5)}`,
    Subtype: `Subtype_${Math.ceil(Math.random() * 3)}`,
    "C min, mM": (Math.random() * 10).toFixed(2),
    "C max, mM": (Math.random() * 50).toFixed(2),
    "C(const), mM": (Math.random() * 20).toFixed(2),
    "Ccat(mg/mL)": (Math.random() * 5).toFixed(2),
    ph: (Math.random() * 7 + 1).toFixed(1),
    "temp, °C": (Math.random() * 100).toFixed(1),
  }),
);
