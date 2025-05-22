import React, { useState } from 'react';

function App() {
  const [view, setView] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">MatchWork</h1>
      {!view && (
        <div className="space-x-4">
          <button
            onClick={() => setView('worker')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Ich suche Arbeit
          </button>
          <button
            onClick={() => setView('employer')}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Ich biete Arbeit
          </button>
        </div>
      )}

      {view === 'worker' && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Offene Jobs in deiner Nähe:</h2>
          <ul className="space-y-2">
            <li className="bg-white p-4 rounded shadow">Kellner bei Café Morgenlicht – Heute, 18:00 – 15€/h</li>
            <li className="bg-white p-4 rounded shadow">Lagerhilfe bei ExpressLogistik – Morgen, 09:00 – 14€/h</li>
          </ul>
        </div>
      )}

      {view === 'employer' && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Verfügbare Helfer in deiner Nähe:</h2>
          <ul className="space-y-2">
            <li className="bg-white p-4 rounded shadow">Ali – Erfahrung in Gastronomie – Sofort verfügbar</li>
            <li className="bg-white p-4 rounded shadow">Lisa – Pflegehelferin – Verfügbar ab 16 Uhr</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
