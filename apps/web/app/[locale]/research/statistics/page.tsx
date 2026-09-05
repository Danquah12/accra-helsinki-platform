'use client';

import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

const IMPORT_DATA = [
  { country: 'Ghana', volume: 45000 },
  { country: 'Nigeria', volume: 85000 },
  { country: 'Kenya', volume: 32000 },
  { country: 'Senegal', volume: 18000 },
  { country: 'Tanzania', volume: 25000 },
  { country: 'Uganda', volume: 15000 },
  { country: 'Cote d\'Ivoire', volume: 22000 },
  { country: 'Egypt', volume: 65000 },
  { country: 'South Africa', volume: 55000 },
  { country: 'Morocco', volume: 38000 },
].sort((a, b) => b.volume - a.volume);

const CATEGORY_DATA = [
  { name: 'Refrigerators/ACs', value: 35 },
  { name: 'Computers/Laptops', value: 25 },
  { name: 'Mobile Phones', value: 15 },
  { name: 'Televisions/Monitors', value: 20 },
  { name: 'Other Small Appliances', value: 5 },
];

const TREND_DATA = [
  { year: '2015', imports: 120000 },
  { year: '2016', imports: 135000 },
  { year: '2017', imports: 142000 },
  { year: '2018', imports: 158000 },
  { year: '2019', imports: 175000 },
  { year: '2020', imports: 160000 }, // COVID dip
  { year: '2021', imports: 195000 },
  { year: '2022', imports: 220000 },
  { year: '2023', imports: 245000 },
  { year: '2024', imports: 260000 },
];

const UNUSABLE_RATE_DATA = [
  { country: 'Ghana', rate: 65 },
  { country: 'Nigeria', rate: 70 },
  { country: 'Kenya', rate: 45 },
  { country: 'Senegal', rate: 50 },
  { country: 'Tanzania', rate: 40 },
];

const COLORS = ['#065F46', '#D97706', '#0EA5E9', '#8B5CF6', '#F43F5E'];

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Statistics & Dashboards</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Interactive visualizations of e-waste flows, appliance imports, and compliance metrics across Africa.
          </p>
        </div>

        {/* Key Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="text-sm text-slate-500 mb-1">Total Estimated Imports (2024)</div>
            <div className="text-3xl font-bold text-emerald-700">~2.8M</div>
            <div className="text-xs text-emerald-600 mt-1 flex items-center">
              <span>↑ 8.5% from 2023</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="text-sm text-slate-500 mb-1">Average Unusable Rate</div>
            <div className="text-3xl font-bold text-amber-600">54%</div>
            <div className="text-xs text-slate-500 mt-1">Appliances destined as waste</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="text-sm text-slate-500 mb-1">HCFC Phasedown Progress</div>
            <div className="text-3xl font-bold text-emerald-700">35%</div>
            <div className="text-xs text-slate-500 mt-1">Reduction from baseline</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="text-sm text-slate-500 mb-1">EPR Implementation</div>
            <div className="text-3xl font-bold text-emerald-700">12</div>
            <div className="text-xs text-slate-500 mt-1">African countries with frameworks</div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Chart 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-96 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Top 10 E-Waste Importing Countries (Tons/Year)</h3>
            <div className="flex-grow min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={IMPORT_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="country" type="category" width={80} tick={{fontSize: 12}} />
                  <Tooltip cursor={{fill: '#f8fafc'}} />
                  <Bar dataKey="volume" fill="#065F46" radius={[0, 4, 4, 0]} name="Volume (Tons)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-96 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Imported E-Waste by Category</h3>
            <div className="flex-grow min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={CATEGORY_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {CATEGORY_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-96 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Used Appliance Imports Trend (2015-2024)</h3>
            <div className="flex-grow min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={TREND_DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="imports" stroke="#D97706" strokeWidth={3} activeDot={{ r: 8 }} name="Units (Estimated)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-96 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Unusable Import Rate by Country (Waste vs Functional)</h3>
            <div className="flex-grow min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={UNUSABLE_RATE_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="country" />
                  <YAxis domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="rate" fill="#ef4444" radius={[4, 4, 0, 0]} name="% Unusable (Waste)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
