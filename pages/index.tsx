import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../components/MapComponent'), { ssr: false });

export default function Home() {
  return (
    <div>
      <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                        fontFamily: "Garamond",
                        background: "#87CEEB"
                    }}
                >
                  Interactive Map with Markers 
                </div>
      
      <MapComponent />
    </div>
  );
}
