import "./App.css";
import { Globe } from "./Components/ui/Globe/globe";

function App() {
  return (
    <main>
      <h1 className="text-[20px] font-bold montserrat">SK77 NEWS+</h1>

      <h2>The stories you need to hear. Everywhere you want to listen.</h2>

      <Globe
        globeConfig={{
          pointSize: undefined,
          globeColor: undefined,
          showAtmosphere: undefined,
          atmosphereColor: undefined,
          atmosphereAltitude: undefined,
          emissive: undefined,
          emissiveIntensity: undefined,
          shininess: undefined,
          polygonColor: undefined,
          ambientLight: undefined,
          directionalLeftLight: undefined,
          directionalTopLight: undefined,
          pointLight: undefined,
          arcTime: undefined,
          arcLength: undefined,
          rings: undefined,
          maxRings: undefined,
          initialPosition: undefined,
          autoRotate: undefined,
          autoRotateSpeed: undefined,
        }}
        data={[]}
      />
    </main>
  );
}

export default App;
