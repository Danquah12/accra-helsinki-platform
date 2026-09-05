"use client";

export default function MapLegend() {
  return (
    <div className="absolute bottom-4 right-4 z-[400] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 p-3 text-xs w-48">
      <h4 className="font-bold mb-2 border-b border-gray-100 dark:border-gray-800 pb-1 text-gray-800 dark:text-gray-200">Map Legend</h4>
      
      <div className="mb-3">
        <div className="font-semibold text-gray-500 mb-1 uppercase" style={{fontSize: "10px"}}>Incident Severity</div>
        <div className="space-y-1">
          <LegendItem color="#ef4444" label="Critical" />
          <LegendItem color="#f97316" label="High" />
          <LegendItem color="#eab308" label="Medium" />
          <LegendItem color="#22c55e" label="Low" />
        </div>
      </div>
      
      <div className="mb-3">
        <div className="font-semibold text-gray-500 mb-1 uppercase" style={{fontSize: "10px"}}>Recycling Capacity</div>
        <div className="space-y-1">
          <LegendItem color="#22c55e" label="High (> 70)" opacity={0.5} isArea />
          <LegendItem color="#eab308" label="Medium (50-70)" opacity={0.5} isArea />
          <LegendItem color="#ef4444" label="Low (< 50)" opacity={0.5} isArea />
        </div>
      </div>
      
      <div>
        <div className="font-semibold text-gray-500 mb-1 uppercase" style={{fontSize: "10px"}}>Shipping Routes</div>
        <div className="space-y-1">
          <LegendItem color="#3b82f6" label="Documented" isLine />
          <LegendItem color="#ef4444" label="Undocumented" isLine dashed />
        </div>
      </div>
    </div>
  );
}

function LegendItem({ 
  color, 
  label, 
  opacity = 1, 
  isArea = false, 
  isLine = false,
  dashed = false
}: { 
  color: string, 
  label: string, 
  opacity?: number, 
  isArea?: boolean, 
  isLine?: boolean,
  dashed?: boolean
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 flex items-center justify-center">
        {isArea ? (
          <div className="w-full h-full border border-gray-400" style={{ backgroundColor: color, opacity }} />
        ) : isLine ? (
          <div className="w-full h-0.5" style={{ backgroundColor: dashed ? 'transparent' : color, borderTop: dashed ? `2px dashed ${color}` : 'none' }} />
        ) : (
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
        )}
      </div>
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
    </div>
  );
}
