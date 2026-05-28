import ThreeView, { TERRARIUM_ELEVATION_DECODER } from "@navara/three";
import { DefaultDescriptions, DefaultPlugin } from "@navara/three_default_plugin";
import { ToneMappingMode } from "postprocessing";
import { drawAttributions } from "./attribution";

const view = new ThreeView<DefaultDescriptions>();

// Plugins

const defaultPlugin = new DefaultPlugin();
view.addPlugin(defaultPlugin);

// Initialization

await view.init();

// Setup scene

const defaults = defaultPlugin.addDefaultPhotorealScene();
defaults.toneMapping.update({
  toneMapping: {
    mode: ToneMappingMode.NEUTRAL
  }
});

view.atmosphere.date.setHours(8);
view.toneMappingExposure = 3;

// Layer declarations

view.addLayer({
  type: "tiles",
  data: {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  rasterTile: {
    maxZoom: 18,
  },
});

view.addLayer({
  type: "tiles",
  data: {
    url: "https://tiles.mapterhorn.com/{z}/{x}/{y}.webp",
  },
  rasterTile: {
    maxZoom: 17,
    minZoom: 5,
  },
  hillshade: {
    elevationDecoder: TERRARIUM_ELEVATION_DECODER(),
  },
});

view.addLayer({
  type: "terrain",
  data: {
    url: "https://tiles.mapterhorn.com/{z}/{x}/{y}.webp",
  },
  rasterTerrain: {
    maxZoom: 17,
    minZoom: 5,
    elevationDecoder: TERRARIUM_ELEVATION_DECODER(),
    castShadow: true,
    receiveShadow: true,
    tileSize: 512,
  },
});

drawAttributions([
  {
    url: "https://www.openstreetmap.org/copyright",
    label: "© OpenStreetMap contributors"
  },
  {
    url: "https://mapterhorn.com/attribution",
    label: "© Mapterhorn"
  },
])
